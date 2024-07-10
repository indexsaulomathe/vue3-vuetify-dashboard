<template>
    <AuthenticationLayout>
        <v-container fluid>
            <!-- Your login form content -->
            <LoginForm />
        </v-container>
    </AuthenticationLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AuthenticationLayout from '@/layouts/AuthenticationLayout.vue';
import LoginForm from '@/components/molecules/LoginForm.vue';

export default defineComponent({
    components: {
        AuthenticationLayout,
        LoginForm,
    },
    data() {
        return {
            value: {
                propName: 'example', // Example prop value
            },
        };
    },
});
</script>