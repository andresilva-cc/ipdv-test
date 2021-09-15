<template>
  <v-row justify="center" align="center" no-gutters>
    <v-col cols="12">
      <v-card outlined>
        <v-card-title>
          {{ $t('section.home.title') }}
        </v-card-title>
        <v-card-text>
          {{ $t('section.home.description') }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head () {
    return {
      title: this.$t('section.home.title')
    }
  }
}
</script>
