<template>
  <v-app>
    <!-- Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      permanent
      expand-on-hover
      clipped
      color="secondary"
      app
    >
      <v-list subheader>
        <v-list-item class="px-2 pt-2 user-info">
          <v-list-item-avatar>
            <v-img src="/user.png" class="py-3" />
          </v-list-item-avatar>
          <v-list-item-content class="pa-0">
            <v-list-item-title class="font-weight-bold white--text">
              {{ $auth.user.name }}
            </v-list-item-title>
            <v-list-item-subtitle class="white--text">
              {{ $auth.user.email }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template #append>
        <v-list color="red" tile class="tile pa-0">
          <v-list-item @click="dialog = true">
            <v-list-item-action>
              <v-icon color="white">
                mdi-logout
              </v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="white--text" v-text="$t('auth.logout')" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
      <v-divider />
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon color="white">
              {{ item.icon }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>

    <!-- Logout Dialog -->
    <v-dialog v-model="dialog" persistent max-width="360">
      <v-card>
        <v-card-title class="headline">
          {{ $t('dialog.logout.title') }}
        </v-card-title>
        <v-card-text>{{ $t('dialog.logout.description') }}</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text :disabled="loading" @click="dialog = false">
            {{ $t('common.cancel') }}
          </v-btn>
          <v-btn color="red" text :disabled="loading" :loading="loading" @click="logout">
            {{ $t('common.confirm') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      loading: false,

      drawer: false,
      items: [
        {
          icon: 'mdi-home-outline',
          title: this.$t('section.home.title'),
          to: '/'
        },
        {
          icon: 'mdi-currency-usd',
          title: this.$t('section.costCenters.title'),
          to: '/cost-centers'
        },
        {
          icon: 'mdi-family-tree',
          title: this.$t('section.departments.title'),
          to: '/departments'
        },
        {
          icon: 'mdi-briefcase-account-outline',
          title: this.$t('section.positions.title'),
          to: '/positions'
        },
        {
          icon: 'mdi-account-outline',
          title: this.$t('section.users.title'),
          to: '/users'
        }
      ]
    }
  },

  methods: {
    logout () {
      try {
        this.loading = true

        this.$auth.logout()
        this.$router.push({
          path: '/login'
        })
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.user-info {
  height: 64px;
}

.tile {
  border-radius: 0;
}
</style>
