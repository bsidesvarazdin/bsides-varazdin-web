<template>
  <img
    :src="$withBase('/static/img/logo.png')"
    :alt="$siteTitle"
    class="logo"
  />
</template>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
</style>
