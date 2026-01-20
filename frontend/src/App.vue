<template>
  <div>
    <h1>Notes</h1>

    <p v-if="loading">Chargement...</p>
    <p v-if="error">{{ error }}</p>

    <NoteForm @create="createNote" />
    <NoteList :notes="notes" @delete="deleteNote" />
  </div>
</template>

<script>
import NoteForm from './components/NoteForm.vue';
import NoteList from './components/NoteList.vue';
import notesService from './services/notes.services.Js';

export default {
  components: { NoteForm, NoteList },
  data() {
    return {
      notes: [],
      loading: false,
      error: null
    };
  },
  created() {
    this.fetchNotes();
  },
  methods: {
    fetchNotes() {
      this.loading = true;
      notesService.getAll()
        .then(res => this.notes = res.data)
        .catch(() => this.error = 'Erreur chargement')
        .finally(() => this.loading = false);
    },
    createNote(title) {
      notesService.create(title).then(() => this.fetchNotes());
    },
    deleteNote(id) {
      notesService.delete(id).then(() => this.fetchNotes());
    }
  }
};
</script>
