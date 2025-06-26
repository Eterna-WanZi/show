<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
const str = 'xiaowanzi';

if (str) {
  console.log(str);
}
</script>

<style lang="scss" scoped>
h1 {
  color: $Timecolor;
}
</style>
