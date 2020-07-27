<template>
  <div>
      <h1>Form</h1>
      <form v-on:submit.prevent="submit">
          <div>
              <label for="f_name">F_name</label>
              <input type="text" name="f_name" id="f_name" v-model.trim="applicant.f_name">
          </div>

          <div>
              <label for="l_name">L_name</label>
              <input type="text" name="l_name" id="l_name" v-model.lazy="applicant.l_name">
          </div>
          <div>
              <label for="age">L_name</label>
              <input type="number" name="age" id="age" v-model.number="applicant.age">
          </div>
          <button type="button" @click.exact="clear()" @click.alt="useDefaulf()">claer</button>
          <button type="submit">submit</button>
      </form>
      <div style="color: red">f_name:
          {{JSON.stringify(applicant)}}
      </div>
  </div>
</template>

<script>
export default {
    name: "Demo5",
    data() {
        return {
            applicant: {
                f_name: "",
                l_name: "",
                age: 0
            }
        }
    },
     methods: {
         submit(){
             alert(JSON.stringify(this.applicant))
         },
         clear(){
             this.applicant = {
                 f_name: "",
                 l_name: "",
                 age: 0
             }
         },
         useDefaulf(){
             this.applicant = {
                 f_name: "Unkown",
                 l_name: "Unkown",
                 age: 0
             }
         }
     }
}
</script>

<style>

</style>