<template>
  <div>
      <h1>Filter</h1>
      <h2>{{1234 | currency("THB")}}</h2>
      <h2>{{2000000 | bytes}}</h2>
      <h2>{{"sandbob" | capitalize({onlyFirstLetter: true})}}</h2>
      <h2>{{"sandbob" | uppercase}}</h2>
      <h2>{{[1, 2, 3] | reverseArray}}</h2>
  </div>
</template>

<script>
export default {
    filters: {
        reverseArray(value){
            return value.slice().reverse()
        }
    }
}
</script>

<style>

</style>