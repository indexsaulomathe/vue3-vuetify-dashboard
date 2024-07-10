<template>
    <v-btn @click="onClick" :color="color">{{ text }}</v-btn>
</template>

<script>
export default {
    props: {
        text: String,
        color: String
    },
    methods: {
        onClick() {
            this.$emit('click');
        }
    }
}
</script>