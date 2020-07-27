<template>
  <div>
      <h1>Ref</h1>
      <h3 ref="title">Test</h3>
      <input ref="input1" type="text" placeholder="test........"/>
  </div>
</template>

<script>
export default {
    mounted() {
        this.$refs["title"].textContent = "Test Ref"
        this.$refs["input1"].focus()
        this.$refs["input1"].value = "test try"
    }

}
</script>

<style>

</style>