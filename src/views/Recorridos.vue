<template>
    <ion-page>
        <ion-content  :fullscreen="true">
            <div style="display:flex;justify-content:center;align-items: center;">
                <img src="/assets/img/menu.png" @click="openMenu()" style="cursor: pointer; width: 45px;padding-left: 15px;">
                <img src="/assets/img/favicon.png" style="width: 60px;margin-left: auto;display: block;" alt="">
            </div>         
            <div class="background">
            <ion-card>
                <ion-card-header>
                    <ion-card-title class="ion-text-center">Recorridos</ion-card-title>
                </ion-card-header>

                <ion-card-content style="display: flex;justify-content: center; flex-direction: column;">
                  <div style="border: 1px solid #d0cfcf;
    padding: 10px;">
                        <p style="
    display: flex;
    align-items: center;
    justify-content: space-between;
">
        <strong>
            <span style="color:blue">01</span> Rutas Azules
        </strong>
        $20.00 MX
        
    </p>
    <p style="font-size:12px;margin-bottom: 30px;">
        Plazuela - Benito
    </p>
    <p style="font-size:12px;">
        6:36 PM Viernes, 17/06/22
    </p>
</div>
<div style="border: 1px solid #d0cfcf;
    padding: 10px;">
                        <p style="
    display: flex;
    align-items: center;
    justify-content: space-between;
">
                            <strong>
                                <span style="color:blue">01</span> Rutas Rojas
                            </strong>
                            $20.00 MX
                            
                        </p>
                        <p style="font-size:12px;margin-bottom: 30px;">
                            zona centro - Santuario
                        </p>
                        <p style="font-size:12px;">
                            10:36 AM Viernes, 17/06/22
                        </p>
                    </div>
                    
                    
                </ion-card-content>
            </ion-card>
        </div>
        
        </ion-content>
        
    </ion-page>
</template> 
<script>
    import { IonPage } from '@ionic/vue';
    import {menuController} from "@ionic/vue";

    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'RecorridosPage',
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
            },
            openMenu(){
                menuController.open("app-menu")
            }
        }
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