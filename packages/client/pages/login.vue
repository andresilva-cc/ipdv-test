<template>
  <v-row align="center" justify="center">
    <v-col cols="12" md="6" lg="4" xl="3">
      <v-card outlined>
        <v-card-title>
          {{ $t('app.name') }} - {{ $t('auth.login') }}
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid">
            <v-row dense>
              <v-col cols="12">
                <v-text-field
                  v-model="data.email"
                  dense
                  outlined
                  prepend-inner-icon="mdi-at"
                  :rules="rules.email"
                  :counter="254"
                  :label="$t('field.email')"
                  required
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="data.password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  dense
                  outlined
                  :type="showPassword ? 'text' : 'password'"
                  :rules="rules.password"
                  prepend-inner-icon="mdi-key-outline"
                  :label="$t('field.password')"
                  required
                  @click:append="showPassword = !showPassword"
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-row dense>
            <v-col align="end" cols="12">
              <v-btn
                rounded
                depressed
                color="primary"
                :disabled="!valid || loading"
                :loading="loading"
                @click="login"
              >
                {{ $t('auth.login') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-snackbar v-model="snackbar" bottom color="error" :timeout="5000">
      {{ $t('auth.invalidCredentials') }}
    </v-snackbar>
  </v-row>
</template>

<script>
export default {
  layout: 'blank',

  auth: false,

  data () {
    return {
      valid: false,

      data: {
        email: '',
        password: ''
      },

      showPassword: false,
      loading: false,
      snackbar: false,

      rules: {
        email: [
          v => !!v || 'E-mail é obrigatório',
          v => (v && v.length >= 3 && v.length <= 254) || 'E-mail deve conter de 3 a 254 caracteres',
          v => /.+@.+/.test(v) || 'E-mail deve ser válido'
        ],
        password: [
          v => !!v || 'Senha é obrigatória'
        ]
      }
    }
  },

  head () {
    return {
      title: this.$t('auth.login')
    }
  },

  methods: {
    async login () {
      try {
        this.loading = true

        const response = await this.$auth.loginWith('local', { data: this.data })
        console.log(response)

        this.$router.push({
          path: '/'
        })
      } catch (error) {
        console.log(error)
        this.snackbar = true
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  height: 100%;
}
</style>
