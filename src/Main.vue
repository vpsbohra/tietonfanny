<template>
  <div id="Main">
		<router-view></router-view>
    </div>
</template>
<script>

export default {
  name: 'Main',
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
  }
}
</script>
