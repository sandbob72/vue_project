<template>
  <div>
      <h1>Computed</h1>
      <h2>{{getrandom2}}</h2>
      <h2>{{getrandom2}}</h2>
      <h1>Method</h1>
      <h2>{{getrandom1()}}</h2>
      <h2>{{getrandom1()}}</h2>
  </div>
</template>

<script>
export default {
    name: "Demo3",
    methods: {
        getrandom1(){
            return Math.random();
        }
    },
    computed: {
        getrandom2(){
            return Math.random();
        }
    },

}
</script>

<style>

</style>