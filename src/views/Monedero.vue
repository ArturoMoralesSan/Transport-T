<template>
    <ion-app>
        <ion-page>
            <ion-content  :fullscreen="true">
                <div style="display:flex;justify-content:center;align-items: center;">
                    <ion-button @click="openMenu()" expand="full">Menu</ion-button>
                    <img src="/assets/img/favicon.png" style="width: 60px;margin-left: auto;display: block;" alt="">
                </div> 
                <div class="background">
                    
                    <ion-card>
                        <ion-card-header>
                            <ion-card-title class="ion-text-center">Monedero</ion-card-title>
                        </ion-card-header>

                        <ion-card-content style="display: flex;align-items: center;justify-content: center; flex-direction: column;">
                            <ion-card style="width: 80%;border-radius: 20px;">
                                <ion-card-header>
                                    <ion-card-title>Mi saldo</ion-card-title>
                                </ion-card-header>
                                <ion-card-content>
                                    <p style="font-size: 60px;" class="ion-text-center">
                                        ${{ money }}
                                    </p>
                                </ion-card-content>
                            </ion-card>
                            <div class="ion-text-center" style="margin-bottom:50px;">
                                <ion-button @click="recargar" color="primary">Recargar</ion-button>
                            </div>
                            <div style="display: flex;align-items: center;justify-content: center; flex-direction: column;">
                                <div class="ion-text-center" style="width:100%;margin-bottom:10px;">
                                    <ion-button style="width:100%;" @click="login" color="light">Ver rutas</ion-button>
                                </div>

                                <div class="ion-text-center" style="margin-bottom:10px;">
                                    <ion-button @click="login" color="light">Mis recorridos</ion-button>
                                </div>
                            </div>
                            
                        </ion-card-content>
                    </ion-card>
                </div>
                
            </ion-content>
            
        </ion-page>
    </ion-app>
    
</template> 
<script>
    import { IonPage } from '@ionic/vue';
    import {menuController} from "@ionic/vue";
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'RegisterPage',
        components: {
            IonPage
        },
        data: function() {
            return {
                money: 125,
            }
        },
        methods: {
            recargar: function() {
                window.location.href = 'http://localhost:8100/recargar';
            },

            openMenu(){
                menuController.open("app-menu")
            }
        }
    });
</script> 
<style scoped>

</style>