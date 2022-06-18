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

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
