<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link
        class="navbar-brand"
        :to="{ name: 'rooms.index' }"
      >
        Veralty
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        @click="toggleMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse"
        :class="{ show : menuCollapsed}"
      >
        <ul class="navbar-nav mr-auto">
          <router-link
            :to="{ name: 'rooms.index' }"
            active-class="active"
            class="nav-item"
            tag="li"
          >
            <a class="nav-link">
              Rooms
            </a>
          </router-link>
        </ul>
        <span class="navbar-text">
        </span>
      </div>
    </nav>

    <div class="container pt-4">
      <div class="row">
        <div class="col col-12">
          <!-- Content will be placed here -->
          <slot></slot>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  /* ============
   * Default Layout
   * ============
   *
   * Used for the home and account pages.
   *
   * Layouts are used to store a lot of shared code.
   * This way the app stays clean.
   */

  export default {
    /**
     * The name of the layout.
     */
    name: 'default-layout',

    /**
     * The data that can be used by the page.
     *
     * @returns {Object} The view-model data.
     */
    data() {
      return {
        menuCollapsed: false,
      };
    },

    /**
     * The methods that the layout can use.
     */
    methods: {

      /**
       * Will toggle the menu.
       */
      toggleMenu() {
        this.menuCollapsed = !this.menuCollapsed;
      },
    },
  };
</script>
