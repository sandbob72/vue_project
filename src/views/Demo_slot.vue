<template>
  <div>
      <h1>Slot</h1>
      <!-- <Clock>
      <span>เวลวปัจจุบัน</span>
      </Clock>

      <Clock/> -->

      <Clock>
          <span style="color:red">now</span>
          <template v-slot:header>
              <div>
                  <h1>Header</h1>
              </div>
          </template>
      </Clock>

  </div>
</template>

<script>
import Clock from "@/components/helpers/Clock.vue"
export default {
    name: "demo6",
    components: {
        Clock
    }
}
</script>

<style>

</style>