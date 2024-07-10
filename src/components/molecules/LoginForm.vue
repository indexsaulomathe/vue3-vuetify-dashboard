<template>
    <v-container class="fill-height d-flex align-center justify-center">
        <v-row justify="center" align="center" class="fill-height">
            <v-col cols="12" sm="8" md="6">
                <v-card class="pa-6" elevation="10">
                    <v-card-title class="headline text-center">Login</v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="login">
                            <v-text-field v-model="username" label="Username" outlined prepend-icon="mdi-account"
                                required />
                            <v-text-field v-model="password" label="Password" outlined prepend-icon="mdi-lock"
                                type="password" required />
                            <div class="d-flex justify-end">
                                <v-btn size="x-small" text color="info" class="text-caption  mb-4"
                                    @click="recoverPassword">
                                    Esqueceu a senha?
                                </v-btn>
                            </div>
                            <v-divider class="mb-4"></v-divider>
                            <v-btn type="submit" color="primary" block class="mt-2">
                                Login
                            </v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const username = ref('');
const password = ref('');

const login = () => {
    console.log('Logging in with:', username.value, password.value);
};

const recoverPassword = () => {
    console.log('Password recovery clicked');
};
</script>

<style scoped>
.fill-height {
    min-height: 100vh;
}
</style>
