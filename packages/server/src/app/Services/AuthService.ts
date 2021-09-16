import { InvalidCredentialsError, TokenError } from '../Errors';
import { PasswordFacade, TokenFacade } from '../Facades';
import { User } from '../Models';
import { UserRepository } from '../Repositories';

class AuthService {
  constructor(
    private userRepository: UserRepository,
  ) {}

  public async login(email: string, password: string): Promise<any> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new InvalidCredentialsError();
    }

    const passwordMatches = PasswordFacade.compare(password, user.password);

    if (!passwordMatches) {
      throw new InvalidCredentialsError();
    }

    return AuthService.generateToken(user, true);
  }

  public async refreshToken(refreshToken: string): Promise<any> {
    const result = <any>TokenFacade.verify(refreshToken);

    const user = await this.userRepository.findById(result.id);

    if (!user) {
      throw new TokenError();
    }

    return AuthService.generateToken(user, false);
  }

  private static async generateToken(user: User, includeRefreshToken: boolean): Promise<any> {
    const userData = {
      id: user.id,
      email: user.email,
      name: user.name,
    };

    const authData = {
      user: userData,
      token: await TokenFacade.sign(userData, {
        expiresIn: 60 * 60,
      }),

    };

    if (!includeRefreshToken) {
      return authData;
    }

    return {
      ...authData,
      refresh_token: await TokenFacade.sign(userData, {
        expiresIn: 60 * 60 * 24 * 30,
      }),
    };
  }
}

export default AuthService;
