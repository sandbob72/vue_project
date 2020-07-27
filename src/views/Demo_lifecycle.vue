<template>
  <div>
      <h1>Lifecycle</h1>
      <span>{{count}}</span>
    <button @click="add">+</button>
  </div>
</template>

<script>
export default {
    name: "lifecycle",
    data() {
        return {
            count: 0
        }
    },
    methods: {
        add(){
            this.count++
        }
    },
    created(){
        console.log("created");
    },
    mounted(){
        console.log("mounted");
    },
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    updated() {
        console.log("updated");
    },
    beforeDestroy() {
        console.log("beforeDestroy");
    },
    destroyed(){
        console.log("destroyed");
    }

}
</script>

<style>

</style>