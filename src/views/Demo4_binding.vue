<template>
<div>
    <h1>Binding</h1>
    <img v-bind:src="imgeURL">
    <br>
    <a :href="link">facebook</a>
    <div :class="error">ERORR</div>
    <div :class="[error, important]">ERORR</div>
    <div :class="[true ? error : important]">ERORR</div>
    <div :style="{color, fontSize}">green</div>
    <div :style="isActive ? styleObj : ''">green</div>
    <button @click="isActive = !isActive">toggleActive</button>
</div>
</template>

<script>
export default {
    name: "Demo4",
    data(){
        return{
            imgeURL: "https://www.checkraka.com/uploaded/gallery/00/0043e0937bc1400fc427499800946f0b.jpg",
            link: "https://web.facebook.com/profile.php?id=100004202202054",
            error: "error_class",
            important: "important",
            color: "green",
            fontSize: "30px",
            styleObj: {
                backgroundColor: 'red',
                color: 'white'
            },
            isActive: false
        }
    }
}
</script>

<style>
.error_class{
    color: red;
}
.important{
    background-color: black;
}

</style>