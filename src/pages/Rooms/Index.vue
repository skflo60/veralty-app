<template>
  <v-layout>
    <v-card contextual-style="dark">
      <div slot="body">
          <div class="card" v-for="room in $store.state.rooms" :key="room.name">
            <h3 class="name">
              {{room.name}}
            </h3>
            <div class="chrono">
              {{room.chrono}}
            </div>
            <div class="game">
              {{room.game}}
            </div>
          </div>
      </div>
      <div slot="footer">
      </div>
    </v-card>
  </v-layout>
</template>

<script>
  /* ============
   * room Index Page
   * ============
   *
   * Page where the user can view the room information.
   */

  import VLayout from '@/layouts/Default';
  import VCard from '@/components/Card';
  import './rooms.scss';

  export default {
    /**
     * The name of the page.
     */
    name: 'rooms-index',

    /**
     * The components that the page can use.
     */
    components: {
      VLayout,
      VCard,
    },
  };
</script>
