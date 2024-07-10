<template>
    <v-text-field :label="label" :type="type"></v-text-field>
</template>

<script lang="ts">
export default {
    props: {
        value: String,
        label: String,
        type: String
    },
    emits: ['update:value'],
    computed: {
        model: {
            get() {
                return this.value;
            },
            set(newValue: any) {
                this.$emit('update:value', newValue);
            }
        }
    }
}
</script>