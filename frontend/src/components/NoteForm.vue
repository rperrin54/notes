<template>
	<form @submit.prevent="submit">
		<input v-model="title" placeholder="Nouvelle note" />
		<button class="primary">Ajouter</button>
		<p v-if="error">{{ error }}</p>
	</form>
</template>

<script>
export default {
	data() {
		return {
			title: "",
			error: null,
		};
	},
	methods: {
		submit() {
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
