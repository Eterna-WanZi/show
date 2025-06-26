<template>
  <svg style="width: 30px; height: 30px">
    <use :xlink:href="prefix + name"></use>
  </svg>
</template>

<script setup lang="ts">
//接收图标的参数
defineProps({
  prefix: {
    type: String,
    default: '#icon-',
  },
  name: String,
});
</script>

<style lang="scss" scoped></style>
