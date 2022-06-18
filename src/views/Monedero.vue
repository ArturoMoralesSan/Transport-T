<template>
    <ion-app>
        <ion-page>
            <ion-menu side="start" menu-id="first" content-id="main">
                <ion-header>
                    <ion-toolbar color="primary">
                        <ion-title>Start Menu</ion-title>
                    </ion-toolbar>
                </ion-header>
                <ion-content id="contentmenu">
                    <ion-list>
                        <ion-item>Menu Item</ion-item>
                        <ion-item>Menu Item</ion-item>
                        <ion-item>Menu Item</ion-item>
                        <ion-item>Menu Item</ion-item>
                        <ion-item>Menu Item</ion-item>
                    </ion-list>
                </ion-content>
            </ion-menu>
            <ion-router-outlet id="main">
            
            </ion-router-outlet>
            <ion-content  :fullscreen="true">
                <div>
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
                                <ion-button @click="login" color="primary">Recargar</ion-button>
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
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'RegisterPage',
        components: {
            IonPage,
        },
        data: function() {
            return {
                money: 125,
            }
        },
        methods: {
            login: function() {
                window.location.href = 'http://localhost:8100';
            }
        }
    });
</script> 
<style scoped>

</style>