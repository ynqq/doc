<template>
    <div>
        <a :href="href" target="_">
            <slot>source</slot>
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