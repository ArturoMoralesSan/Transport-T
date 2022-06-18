<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Tarjeta de debito</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item>
        $ <ion-input placeholder="  Cantidad a recargar" name="mount" v-model="mount"></ion-input>
    </ion-item>
    <ion-item>
        <ion-input placeholder="Nombre completo"></ion-input>
    </ion-item>
    <ion-item style="margin-bottom: 15px;">
        <ion-input placeholder="Número de tarjeta"></ion-input>
    </ion-item>
    <ion-item style="margin-bottom: 15px;">
        <ion-input placeholder="Mes"></ion-input>
    </ion-item>
    <ion-item style="margin-bottom: 15px;">
        <ion-input placeholder="Año"></ion-input>
    </ion-item>
    <ion-item style="margin-bottom: 15px;">
        <ion-input placeholder="CVV"></ion-input>
    </ion-item>
    <div class="ion-text-center">
        <ion-button  @click="closeModal">Recargar</ion-button>    
    </div>
    
  </ion-content>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  modalController,
  IonInput
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalItem",
  components: { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonInput },
  data(){
    return {
      'mount': ''
    };
  },
  methods : {
    closeModal : function() {
      console.log(this.mount)
      modalController.dismiss({ amount: this.mount });
    }
  }
});
</script>