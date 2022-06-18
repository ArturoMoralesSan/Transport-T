<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div style="
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
">
          <img src="/assets/img/Logo.png" style="margin: 0 auto;display: block;" alt="">
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  mounted() {
		setTimeout(() => {
      window.location.href = 'http://localhost:8100/iniciar-sesion';
    }, 900);
	},
  
});
</script>

<style scoped lang="scss">
ion-content {
  --background: none;
  background-image: url("../theme/fondo.jpg") !important;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

}

</style>
