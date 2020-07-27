<template>
  <div>
      <h1>Condition</h1>
      <div v-if="type === 'A'"> A </div>
      <div v-else-if="type === 'B'"> B </div>
      <div v-else-if="type === 'C'"> C </div>

      <div v-if="isShow">
          Yes
      </div>
       <div v-else>
          No
      </div>
       <div v-show="isShow">
          WOW
      </div>

  </div>
</template>

<script>
export default {
    name: "Demo7",
    mounted() {
        setInterval(()=>{
            this.isShow = !this.isShow
        }, 1000)
    },
    data() {
        return{
            type: "A",
            isShow: true
        }
    }
}
</script>

<style>

</style>