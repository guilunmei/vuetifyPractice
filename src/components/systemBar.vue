<template>
  <v-card class="d-flex pa-2" outlined tile style="background: #ccc">
    <v-btn x-small @click="quit">Quit</v-btn>
  </v-card>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    quit () {
      this.$router.replace('login')
    }
  }
}
</script>
