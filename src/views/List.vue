<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-title>Lista</ion-title>
            </ion-toolbar>
        </ion-header>
    </ion-page>
</template> 
<script>
    import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ListPage',
        components: {
            IonPage,
            IonHeader,
            IonToolbar,
            IonTitle
        }
    });
</script> 