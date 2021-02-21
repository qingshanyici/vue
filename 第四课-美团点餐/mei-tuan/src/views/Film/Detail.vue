<template>
    <div>detail</div>
</template>

<script>
export default {
    beforeMount(){
        this.$store.commit("HideTabbar", false)
    },
    beforeDestroy(){
        this.$store.commit("ShowTabbar", true)
    },
    mounted(){
        console.log("detail--->>",this.$route)
    }
}
</script>