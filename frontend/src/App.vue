<template>
	<div>
		<h1>Notes</h1>

		<p v-if="loading">Chargement...</p>
		<p v-if="error" class="error">{{ error }}</p>
		<p v-if="success" class="success">{{ success }}</p>

		<NoteForm @create="createNote" :disabled="loading" />

        <h2>Liste de notes</h2>
		<NoteList :notes="notes" :disabled="loading" @delete="deleteNote" />
	</div>
</template>

<script>
import NoteForm from "./components/NoteForm.vue";
import NoteList from "./components/NoteList.vue";
import notesService from "./services/notes.services.Js";

export default {
	components: { NoteForm, NoteList },
	data() {
		return {
			notes: [],
			loading: false,
			error: null,
			success: null,
		};
	},
	created() {
        // Chargement des notes
		this.fetchNotes();
	},
	methods: {
        // Récupération des notes depuis l'API
		fetchNotes() {
			this.loading = true;
			notesService
            .getAll()
            .then((res) => (this.notes = res.data))
            .catch(() => (this.error = "Erreur chargement"))
            .finally(() => (this.loading = false));
		},

        // Création d'une note
		createNote(title) {
			notesService
            .create(title)
            .then(() => {
                this.success = "Note ajoutée";
                this.fetchNotes();
            })
            .catch(() => {
                this.error = "Erreur lors de la création";
            })
            .finally(() => {
                this.loading = false;
                setTimeout(() => (this.success = null), 2000);
            });
		},

        // Suppression d'une note
		deleteNote(id) {
			notesService.delete(id)
            .then(() => {
                this.success = "Note supprimé avec success";
                this.fetchNotes();
            })
            .catch(() => {
                this.error = "Erreur lors de la suppression";
            })
            .finally(() => {
                this.loading = false;
                setTimeout(() => (this.success = null), 2000);
            });
		},
	},
};
</script>
