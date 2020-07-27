<template>
<div id="header">
<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/demo">Demo</router-link> |
      <router-link to="/demo2">Demo2</router-link>|
      <router-link to="/demo3">Demo3</router-link>|
      <router-link to="/demo4">Demo4</router-link>|
      <router-link to="/demo5">Form</router-link>|
      <router-link to="/demo6">Slot</router-link>|
      <router-link to="/demo7">Condition</router-link>|
      <router-link to="/demo8">Loop</router-link>|
      <router-link to="/demo9">Lifecycle</router-link>|
      <router-link to="/demo10">Variable</router-link>|
      <router-link to="/demo11">Ref</router-link>|
      <router-link to="/demo12">Filter</router-link>
    </div>
</div>
   
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>