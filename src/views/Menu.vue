<template>
    <ion-menu ion-menu menu-id="app-menu" content-id="main-content">
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Hola, Misael</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content id="contentmenu">
            <ion-list>
                <ion-item>
                  <a class="menuitem" :href="'http://'+host+'/monedero'">Mi saldo</a>
                  </ion-item>
                <ion-item><a class="menuitem" :href="'http:'+host +'/recargar'">Recargar</a></ion-item>
                <ion-item><a class="menuitem" :href="'http:'+host +''">Ver rutas</a></ion-item>
                <ion-item><a class="menuitem" :href="'http:'+host +''">Mi perfil</a></ion-item>
                <ion-item><a class="menuitem"  :href="'http:'+host +'/iniciar-sesion'">Cerrar sesión</a></ion-item>
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
  data: function(){
    return {
       host: location.host
    }
  }
  
});
</script>
<style>
.menuitem{

    text-decoration: none;
    color: #858282;
  }
</style>