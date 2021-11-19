<style lang="scss">
@import './scss/main.scss';
v-app {
  font-family: $body-font-family !important;
}
</style>

<template>
  <v-app id="inspire">
    <Menu />

    <v-main>
      <router-view></router-view>

    </v-main>
    <v-footer padless>
      <v-col class="font-weight-bold text--disabled text-right" cols="12">
        <small
          >Students Register</small
        >
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Menu from './components/Menu.vue';

export default {
  name: 'App',
  components: {
    Menu,

  },
  data: () => ({
    drawer: null,
  }),

  mounted() {
    document.title = 'Students Registration';
  },
};
</script>
<style>
.v-application {
  font-family: 'DM Sans', sans-serif !important;
  font-size: 16px !important;
  line-height: 1.8;
  color: #3c3c3c;
}
.headline,
.title,
.subheading {
  font-family: 'DM Sans', sans-serif !important;
}
.v-application .text-h6 {
  font-size: 1.25rem !important;
  font-weight: 500;
  line-height: 2rem;
  letter-spacing: 0.0125em !important;
  font-family: 'DM Sans', sans-serif !important;
}
.v-application--is-ltr
  .v-toolbar__content
  > .v-btn.v-btn--icon:first-child
  + .v-toolbar__title,
.v-application--is-ltr
  .v-toolbar__extension
  > .v-btn.v-btn--icon:first-child
  + .v-toolbar__title {
  padding-left: 0px !important;
}
</style>
