<template>
	<form @submit.prevent="submit">
		<input v-model="title" placeholder="Nouvelle note" />
		<button class="primary" :disabled="disabled">Ajouter</button>
		<p v-if="error" class="danger">{{ error }}</p>
	</form>
</template>

<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    },
	data() {
		return {
			title: "",
			error: null,
		};
	},
	methods: {
		submit() {
            // Validation  côté frontend
			if (this.title.length < 3) {
				this.error = "Minimum 3 caractères";
				return;
			}
			this.$emit("create", this.title);
			this.title = "";
			this.error = null;
		},
	},
};
</script>
