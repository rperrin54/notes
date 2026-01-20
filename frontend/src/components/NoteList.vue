<template>
	<ul v-if="notes && notes.length > 0">
		<li v-for="note in notes" :key="note.id">
			{{ note.title }}
			<button  class="danger" @click="$emit('delete', note.id)">x</button>
		</li>
	</ul>
    <span v-else> Il n'y a aucune notes</span>
</template>

<script>
export default {
	props: {
        "notes": {
            type: [Array, Object],
            required: true
        }
    },
    
};
</script>

<style lang="scss" scoped>
    li {
        margin-bottom: 5px;
    }
</style>