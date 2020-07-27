<template>
  <div id="demo2">
      <h1>Data</h1>
      <button @click="count++; isLogged=true">couunt</button>
      <span>{{count}}</span>
      <div>{{message}}</div>
      <div>{{isLogged}}</div>
      <input type="text" placeholder="Enter text" v-model="message">
      <h2 v-if="isLogged">YA</h2>
      <div>{{account}} {{account.username}}</div>
      <div>{{nameList[0]}}</div>
      <ul>
          <li v-for="(item, index) in nameList" :key="index">{{item}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name : "Demo2",
    mounted(){
        this.message="sandbob"
    },
    data() {
        return {
            count:0,
            message:"",
            isLogged: false,
            account:{
                username: "sandbob",
                password: "72"
            },
            nameList:[
                "a","b","c","d"
            ]

        }
    },
}
</script>

<style scoped>
ul{
    margin: 0;
    padding: 0;
}
li{
    display: inline;
    margin-right: 8px;
}
</style>