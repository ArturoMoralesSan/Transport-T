<template>
    <ion-menu ion-menu menu-id="app-menu" content-id="main-content">
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Hola, Misael</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content id="contentmenu">
            <ion-list>
                <ion-item>Mi saldo</ion-item>
                <ion-item>Recargar</ion-item>
                <ion-item>Ver rutas</ion-item>
                <ion-item>Mi perfil</ion-item>
                <ion-item>Cerrar sesión</ion-item>
            </ion-list>
        </ion-content>
    </ion-menu>
</template>
<script>
import {
  IonMenu,IonHeader,IonContent,IonToolbar,IonTitle,IonItem,IonList,
} from "@ionic/vue";
export default ({
  name: 'MainMenu',
  components: {
    IonMenu,IonHeader,IonContent,IonToolbar,IonTitle,IonItem,IonList,
  },
  
});
</script>