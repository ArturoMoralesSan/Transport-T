<template>
  <ion-app>
    <MainMenu></MainMenu>
    <ion-router-outlet id="main-content"/>
  </ion-app>
</template>

<script>
  import MainMenu from "../src/views/Menu.vue"
  import { IonApp, IonRouterOutlet } from '@ionic/vue';
  import { defineComponent } from 'vue';


  export default defineComponent({
    name: 'App',
    components: {
      IonApp,
      IonRouterOutlet,
      MainMenu
    }
  });
</script>