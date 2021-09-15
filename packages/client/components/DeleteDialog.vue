<template>
  <v-dialog v-model="showDialog" persistent max-width="360">
    <v-card>
      <v-card-title class="headline">
        {{ $t('dialog.delete.title') }}
      </v-card-title>
      <v-card-text>{{ $t('dialog.delete.description') }}</v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text :disabled="loading" @click="cancel">
          {{ $t('common.cancel') }}
        </v-btn>
        <v-btn color="red" text :disabled="loading" :loading="loading" @click="confirm">
          {{ $t('common.confirm') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: Boolean
  },

  data () {
    return {
      loading: false,
      dialog: false
    }
  },

  computed: {
    showDialog () {
      return this.show
    }
  },

  methods: {
    cancel () {
      this.$emit('canceled')
    },

    confirm () {
      this.$emit('confirmed')
    }
  }
}
</script>
