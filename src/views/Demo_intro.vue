<template>
<div id="demo">
    <h1>Test</h1>
    <button v-on:click="clickMe">ClickMe</button>
    <button v-on:click="clickMe2('uo')">ClickMe2</button>
    <button @click="clickMe2('uo')">ClickMe3</button>
    <h3>{{getData()}}</h3>
</div>
  
</template>

<script>
export default {
    name:"Demo",
    mounted(){
        this.initiat()
    },
    methods: {
        initiat(){
            console.log("test");
        },
        clickMe(){
            alert("Yo")
        },
        clickMe2(message){
            alert(message)
        },
        getData(){
            return Date()
        }
    }
}
</script>

<style>

</style>