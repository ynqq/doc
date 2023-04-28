<template>
    <div class="authorTime">
        @ {{ name }} {{ time }}
    </div>
</template>

<script>
    export default {
        props: {
            name: '',
            time: ''
        }
    }
</script>

<style lang="scss" scoped>
.authorTime{
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
}
</style>