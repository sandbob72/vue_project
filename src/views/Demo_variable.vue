<template>
  <div>
      <h1>Variable</h1>
      <span>count : {{count}}</span>
      <span>timestamp : {{timestamp}}</span>
      <button @click="timestamp = Date()">timestamp</button>
      <button @click="count++">count</button>
  </div>
</template>

<script>
export default {
    name: "variable",
    created(){
        this.timestamp = 0
    },
    // mounted() {
    //     setInterval(()=>{
    //         console.log(this.timestamp);
    //     }, 100)
    // },
    data() {
        return {
            count: 0
        }
    },
}
</script>

<style>

</style>