<template>
    <ion-page>
        <ion-content  :fullscreen="true">
        <img src="/assets/img/favicon.png" style="width: 170px;margin: 0 auto;display: block;" alt="">
        <div class="background">
            <ion-card>
                <ion-card-header>
                    <ion-card-title class="ion-text-center">Iniciar sesión</ion-card-title>
                </ion-card-header>

                <ion-card-content>
                     <ion-item>
                        <ion-input placeholder="Correo electrónico"></ion-input>
                    </ion-item>

                     <ion-item style="margin-bottom: 15px;">
                        <ion-input placeholder="Contraseña"></ion-input>
                    </ion-item>
                    <div class="ion-text-center" style="margin-bottom:10px;">
                        <ion-button @click="login" color="primary">Iniciar sesión</ion-button>
                    </div>
                    <p class="ion-text-center" style="margin-bottom:10px;">
                        <a href="#">¿Olvidó su contraseña?</a>
                    </p>
                    <p class="ion-text-center" style="margin-bottom:10px;">
                        <a href="#">¿No tiene cuenta? ¡Regístrese!</a>
                    </p>
                </ion-card-content>
            </ion-card>
        </div>
        
        </ion-content>
        
    </ion-page>
</template> 
<script>
    import { IonPage } from '@ionic/vue';
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ListPage',
        components: {
            IonPage,
        },
        data: function() {
            return {}
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