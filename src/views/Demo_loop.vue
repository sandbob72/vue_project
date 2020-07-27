<template>
  <div>
      <h1>Loop</h1>
      <ul>
          <li v-for="(item, index) in ['A', 'B', 'C']" :key="index">{{item}}</li>
      </ul>
      <ul>
          <li v-for="(item, index) in d" :key="index">{{item}}</li>
      </ul>
      <ul>
          <li v-for="(item, index) in dd" :key="index">{{item.t}} {{item.p}}</li>
      </ul>
      <ul>
          <li v-for="({t, p}, index) in dd" :key="index">{{t}} {{p}}</li>
      </ul>

      <hr/>
      <input type="text" v-model="ddd.t"><br>
      <input type="number" v-model="ddd.p"><br>
      <button @click="add">add</button>
      <ul>
          <li v-for="({t, p}, index) in dynamic" :key="index">
              {{t}} {{p}} <button @click="remove(index)">X</button>
          </li>
      </ul>


  </div>
</template>

<script>
export default {
    name: "loop",
    methods:{
        add(){
            this.dynamic.push(this.ddd)
            this.ddd = {t:"", p:0}
        },
        remove(index){
            this.dynamic.splice(index, 1)
        }
    },
    data() {
        return {
            ddd:{t:"", p:0},
            dynamic: [],
            d: ['A', 'B', 'C'],
            dd: [
                {t:"A", p:2},
                {t:"B", p:3},
                {t:"C", p:1},
            ]
        }
    },

}
</script>

<style>

</style>