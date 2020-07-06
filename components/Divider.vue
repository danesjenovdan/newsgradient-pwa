<template>
  <div class="divider" />
</template>

<script>
export default {
  name: 'Divider'
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables';

.divider {
  height: 5px;
  background-image: linear-gradient(to right, #0076fe 0%, #e50001 100%);

  @media (max-width: $medium) {
    height: 2px;
  }
}
</style>
