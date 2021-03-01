<template>
    <div>detail</div>
</template>

<script>
import bus from '@/bus/index'
export default {
    beforeMount(){
        bus.$emit('maizuo', false)
    },
    beforeDestroy(){
        bus.$emit('maizuo', true)
    }

    // beforeMount(){Í
    //     this.$store.commit("HideTabbar", false)
    // },
    // beforeDestroy(){
    //     this.$store.commit("ShowTabbar", true)
    // },
    // mounted(){
    //     console.log("detail--->>",this.$route)
    // }
}
</script>