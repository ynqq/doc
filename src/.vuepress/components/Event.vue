<template>
    <div>
11
    </div>
</template>

<script>
    export default {
        mounted(){
            alert(1)
            document.addEventListener('fullscreenchange', (e) => {
      if(document.fullscreenElement){
        document.body.classList.add('fullScreen')
      }else{
        document.body.classList.remove('fullScreen')
      }
      
    })
        }
    }
</script>

<style lang="scss" scoped>

</style>