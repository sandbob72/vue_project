<template>
  <div id="app">
    <Header/>
    <Content/>
    <Footer @onClock="onClock" title="Footer Test" color="blue"/>
    <span>{{time}}</span>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue"
import Content from "@/components/layout/Content.vue"
import Footer from "@/components/layout/Footer.vue"
export default {
  name: "app",
  methods:{
    onClock(value){
      this.time = value
    }
  },
  data() {
    return{
      time:""
    }
  },
  components:{
    Header,
    Content,
    Footer
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
