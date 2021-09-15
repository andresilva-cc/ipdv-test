<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12">
      <v-card outlined>
        <v-card-title>
          {{ $t('section.costCenters.create') }}
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
                  :counter="50"
                  :label="$t('field.name')"
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
                to="/cost-centers"
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

      data: {
        name: ''
      },

      rules: {
        name: [
          v => !!v || 'Nome é obrigatório',
          v => (v && v.length >= 3 && v.length <= 50) || 'Nome deve conter de 3 a 50 caracteres'
        ]
      }
    }
  },

  head () {
    return {
      title: this.$t('section.costCenters.create')
    }
  },

  methods: {
    async create () {
      try {
        this.loading = true

        await this.$store.dispatch('costCenters/create', this.data)

        this.$router.push({
          path: '/cost-centers'
        })
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
