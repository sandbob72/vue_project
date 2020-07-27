<template>
  <div id="footer" class="footer">
      <span :style="{color}">
          {{title}}
      </span>
  </div>
</template>

<script>
export default {
    name:"footer",
    mounted(){
        setInterval(()=>{
            this.$emit("onClock", Date())
        }, 100)
    },
    props: [
        "title",
        "color"
    ]
}
</script>

<style>
.footer{
    font-size: 12px;
    color:red;
}
</style>