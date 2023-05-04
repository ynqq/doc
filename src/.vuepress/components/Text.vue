<template>
  <span :class="type">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "warning",
    },
  },
};
</script>

<style scoped>
.warning {
  color: #f5b041;
}
.danger {
  color: #c0392b;
}
.info {
  color: #2980b9;
}
</style>
