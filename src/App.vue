<template>
  <v-app class="pink">
    <v-parallax  dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
    <Navbar />
    <v-content class="mx-4">
      <router-view></router-view>
    </v-content>
    </v-parallax>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: { Navbar },
  data: () => ({
    //
  }),
};
</script>
