<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12">
      <v-card outlined>
        <v-card-title>
          {{ $t('section.costCenters.update') }}
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
                @click="update"
              >
                <v-icon left>
                  mdi-check
                </v-icon>
                {{ $t('common.update') }}
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
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },

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
      title: this.$t('section.costCenters.update')
    }
  },

  computed: {
    costCenter () {
      return this.$store.getters['costCenters/getById'](Number.parseInt(this.$route.params.id))
    }
  },

  async mounted () {
    try {
      this.loading = true

      await this.$store.dispatch('costCenters/fetch')

      this.data.name = this.costCenter.name
    } finally {
      this.loading = false
    }
  },

  methods: {
    async update () {
      try {
        this.loading = true

        await this.$store.dispatch('costCenters/update', {
          id: this.$route.params.id,
          data: this.data
        })

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
