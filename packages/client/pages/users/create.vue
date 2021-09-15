<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12">
      <v-card outlined>
        <v-card-title>
          {{ $t('section.users.create') }}
        </v-card-title>
        <v-card-text>
          <v-form v-model="valid">
            <v-row dense>
              <v-col cols="12">
                <v-text-field
                  v-model="data.name"
                  dense
                  outlined
                  prepend-inner-icon="mdi-label-outline"
                  :rules="rules.name"
                  :counter="255"
                  :label="$t('field.name')"
                  required
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="data.email"
                  dense
                  outlined
                  prepend-inner-icon="mdi-email-outline"
                  :rules="rules.email"
                  :counter="254"
                  :label="$t('field.email')"
                  required
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="data.password"
                  dense
                  outlined
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  prepend-inner-icon="mdi-lock-outline"
                  :rules="rules.password"
                  :counter="72"
                  :label="$t('field.password')"
                  required
                  @click:append="showPassword = !showPassword"
                />
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="data.positionId"
                  dense
                  :items="positions"
                  item-value="id"
                  item-text="name"
                  prepend-inner-icon="mdi-briefcase-account-outline"
                  :rules="rules.position"
                  :label="$t('field.position')"
                  outlined
                  required
                />
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="data.departmentId"
                  dense
                  :items="departments"
                  item-value="id"
                  item-text="name"
                  prepend-inner-icon="mdi-family-tree"
                  :rules="rules.department"
                  :label="$t('field.department')"
                  outlined
                  required
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-row dense>
            <v-col cols="12" align="end">
              <v-btn
                rounded
                depressed
                color="secondary"
                class="mb-3 mr-2"
                nuxt
                to="/users"
              >
                {{ $t('common.cancel') }}
              </v-btn>
              <v-btn
                rounded
                depressed
                color="primary"
                class="mb-3 mr-2"
                :loading="loading"
                :disabled="loading || !valid"
                @click="create"
              >
                <v-icon left>
                  mdi-check
                </v-icon>
                {{ $t('common.create') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      valid: false,
      showPassword: false,

      data: {
        name: '',
        email: '',
        password: '',
        positionId: null,
        departmentId: null
      },

      rules: {
        name: [
          v => !!v || 'Nome é obrigatório',
          v => (v && v.length >= 3 && v.length <= 255) || 'Nome deve conter de 3 a 255 caracteres'
        ],
        email: [
          v => !!v || 'E-mail é obrigatório',
          v => (v && v.length >= 3 && v.length <= 254) || 'E-mail deve conter de 3 a 254 caracteres',
          v => /.+@.+/.test(v) || 'E-mail deve ser válido'
        ],
        password: [
          v => !!v || 'Senha é obrigatório',
          v => (v && v.length >= 3 && v.length <= 72) || 'Senha deve conter de 3 a 72 caracteres'
        ],
        position: [
          v => !!v || 'Cargo é obrigatório'
        ],
        department: [
          v => !!v || 'Departamento é obrigatório'
        ]
      }
    }
  },

  head () {
    return {
      title: this.$t('section.users.create')
    }
  },

  computed: {
    positions () {
      return this.$store.getters['positions/get']
    },

    departments () {
      return this.$store.getters['departments/get']
    }
  },

  async mounted () {
    try {
      this.loading = true
      await Promise.all([
        this.$store.dispatch('positions/fetch'),
        this.$store.dispatch('departments/fetch')
      ])
    } finally {
      this.loading = false
    }
  },

  methods: {
    async create () {
      try {
        this.loading = true

        await this.$store.dispatch('users/create', this.data)

        this.$router.push({
          path: '/users'
        })
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
