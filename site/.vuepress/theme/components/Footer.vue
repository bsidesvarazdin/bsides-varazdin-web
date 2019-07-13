<template>
  <footer>
    &copy; 2019 BSidesVarazdin
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
footer {
  margin: 7rem 0;
  font-weight: 700;
  text-align: center;
  color: $background-color;

  @include lg {
    margin: 7rem 0 2rem 0;
  }
}
</style>
