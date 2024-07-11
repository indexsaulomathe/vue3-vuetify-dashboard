<template>
    <v-container class="fill-height">
        <v-row justify="center" align="center" class="fill-height">
            <v-col cols="12" sm="8" md="6">
                <v-card class="pa-6" elevation="10">
                    <!-- Botão de voltar no canto superior esquerdo -->
                    <v-btn icon class="back-button" @click="goBack">
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>

                    <v-card-title class="headline text-center">Reset Password</v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="resetPassword">
                            <v-text-field v-model="email" label="Email" outlined prepend-icon="mdi-email" required />
                            <v-btn type="submit" color="primary" block class="mt-2">
                                Reset Password
                            </v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emit = defineEmits(['back-to-login']);

const email = ref('');

const resetPassword = () => {
    console.log('Resetting password for email:', email.value);
    // Implement your password reset logic here
};

const goBack = () => {
    emit('back-to-login');
};
</script>

<style scoped>
.fill-height {
    min-height: 100vh;
}

.back-button {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 10;
}

.back-button v-icon {
    color: var(--v-primary-base);
}
</style>