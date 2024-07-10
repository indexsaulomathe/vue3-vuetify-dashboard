<template>
    <div>
        <InputField v-model="email" label="Email" type="email" />
        <Button text="Reset Password" color="primary" @click="resetPassword" />
    </div>
</template>

<script>
import InputField from '@/components/atoms/InputField.vue';
import Button from '@/components/atoms/Button.vue';

export default {
    components: {
        InputField,
        Button
    },
    data() {
        return {
            email: ''
        };
    },
    methods: {
        resetPassword() {
            // Implementar lógica de reset de senha aqui
        }
    }
}
</script>