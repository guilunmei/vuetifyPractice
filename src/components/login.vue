<template>
  <div>
    <v-btn x-small @click="login">login</v-btn>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    login () {
      this.$router.push('/home')
    }
  }
}
</script>
