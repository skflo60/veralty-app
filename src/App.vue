<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  /* ============
   * Entry Point
   * ============
   *
   * The entry point of the application
   */

  export default {
    /**
     * The name of the application.
     */
    name: 'vue-boilerplate',

    /**
     * Fires when the app has been mounted.
     */
    mounted() {
      // fetch the data from the API
      this.$store.dispatch('rooms/find');
    },
  };
</script>
