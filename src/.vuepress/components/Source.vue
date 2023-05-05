<template>
    <div>
        <a :href="href" target="_">
            <slot>source <i class="font-icon icon iconfont icon-link"></i> </slot>
        </a>
    </div>
</template>

<script>
    export default {
        props: {
            href: ""
        }
    }
</script>

<style lang="scss" scoped>

</style>