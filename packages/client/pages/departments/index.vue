<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12">
      <v-card outlined>
        <v-card-title>
          {{ $t('section.departments.title') }}
          <v-spacer />
          <v-col
            class="pa-0"
            cols="12"
            sm="6"
            md="4"
            lg="3"
            xl="2"
          >
            <v-text-field
              v-model="search"
              hide-details
              clearable
              append-icon="mdi-magnify"
              :label="$t('field.search')"
            />
          </v-col>
        </v-card-title>
        <v-card-text>
          <v-btn
            small
            rounded
            depressed
            color="primary"
            class="mb-3"
            nuxt
            to="/departments/create"
          >
            <v-icon left>
              mdi-plus
            </v-icon>
            {{ $t('common.create') }}
          </v-btn>
          <v-data-table
            :loading="loading"
            locale="pt-BR"
            :headers="headers"
            :items="departments"
            :search="search"
            :footer-props="{
              'items-per-page-options': [5, 10, 15, 25, 50]
            }"
            :items-per-page="10"
          >
            <template #[`item.actions`]="{ item }">
              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-btn
                    icon
                    x-small
                    class="mr-2"
                    nuxt
                    :to="`/departments/update/${item.id}`"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <v-icon>
                      mdi-pencil
                    </v-icon>
                  </v-btn>
                </template>
                <span>{{ $t('common.update') }}</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-btn
                    icon
                    x-small
                    nuxt
                    v-bind="attrs"
                    v-on="on"
                    @click="openDeleteDialog(item)"
                  >
                    <v-icon>
                      mdi-delete
                    </v-icon>
                  </v-btn>
                </template>
                <span>{{ $t('common.delete') }}</span>
              </v-tooltip>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>

    <delete-dialog :show.sync="showDialog" @canceled="showDialog = false" @confirmed="deleteItem" />
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      loading: false,
      showDialog: false,
      deleteId: 0,

      headers: [
        { text: this.$t('field.id'), value: 'id' },
        { text: this.$t('field.name'), value: 'name' },
        { text: this.$t('field.costCenter'), value: 'costCenter.name' },
        { text: this.$t('common.actions'), value: 'actions' }
      ]
    }
  },

  head () {
    return {
      title: this.$t('section.departments.title')
    }
  },

  computed: {
    departments () {
      return this.$store.getters['departments/get']
    }
  },

  async created () {
    try {
      this.loading = true
      await this.$store.dispatch('departments/fetch')
    } finally {
      this.loading = false
    }
  },

  methods: {
    openDeleteDialog (item) {
      this.deleteId = item.id
      this.showDialog = true
    },

    async deleteItem () {
      try {
        this.loading = true
        await this.$store.dispatch('departments/delete', this.deleteId)
      } finally {
        this.showDialog = false
        this.loading = false
      }
    }
  }
}
</script>
