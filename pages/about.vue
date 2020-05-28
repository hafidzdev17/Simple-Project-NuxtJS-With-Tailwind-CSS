<template>
  <div class="container">
    <p>About {{ name }}</p>
    <NuxtLink to="/">
      Go to /
    </NuxtLink>
  </div>
</template>

<script>
export default {
  layout: "dark",
  asyncData({ req }) {
    return {
      name: req ? "server" : "client"
    };
  }
};
</script>

<style scoped>
.container {
  font-size: 20px;
  text-align: center;
  padding-top: 100px;
}
</style>
