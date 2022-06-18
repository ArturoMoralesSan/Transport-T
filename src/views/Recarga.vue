<template>
    <ion-page>
        <ion-content  :fullscreen="true">
            <div style="display:flex;justify-content:center;align-items: center;">
                <ion-button @click="openMenu()" expand="full">Menu</ion-button>
                <img src="/assets/img/favicon.png" style="width: 60px;margin-left: auto;display: block;" alt="">
            </div>         
            <div class="background">
            <ion-card>
                <ion-card-header>
                    <ion-card-title class="ion-text-center">Recargar</ion-card-title>
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
                    <p style="font-size:20px;margin-bottom:30px;">¿Cómo quieres recargar?</p>
                    
                    <div style="display: flex;align-items: center;justify-content: center; flex-direction: column;">
                        <div class="ion-text-center" style="width:100%;margin-bottom:10px;">
                            <ion-button style="width:100%;" @click="openModal" color="light">Tarjeta de debito</ion-button>
                        </div>
                        <div class="ion-text-center" style="margin-bottom:50px;">
                            <ion-button @click="login" color="primary">Confirmar recarga</ion-button>
                        </div>
                    </div>
                    
                    
                </ion-card-content>
            </ion-card>
        </div>
        
        </ion-content>
        
    </ion-page>
</template> 
<script>
    import { IonPage,  modalController, } from '@ionic/vue';
    import {menuController} from "@ionic/vue";
    import Modal from "./modal.vue";

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
        setup() {
            const openModal = async () => {
            const modal = await modalController.create({
                component: Modal, //Modal is name of the component to render inside ionic modal
            });
            return modal.present();
            };

            return { openModal };
        },
        methods: {
            login: function() {
                window.location.href = 'http://localhost:8100';
            },
            openMenu(){
                menuController.open("app-menu")
            }
        }
    });
</script> 
<style scoped>

</style>