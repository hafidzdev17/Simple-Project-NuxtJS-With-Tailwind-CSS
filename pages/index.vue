<template>
  <div class="container">
    <h1>
      <nuxt-link to="/about">
        <button
          class="bg-blue-500 my-3 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          About
        </button>
      </nuxt-link>

      <br />

      <nuxt-link to="/profile/">
        <button
          class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          Profile
        </button>
      </nuxt-link>
    </h1>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style></style>
