<script lang="ts">
	// Data
	import projects from '$lib/data/projects.json';

	// Components
    import SubHeader from '$lib/components/layout/SubHeader.svelte';

    let headerProps = {
        title: 'Specific Side Project',
        message: 'Most of the projects can be found on my github Account',
        backlink: '/projects'
    }
</script>

<!-- Sub page header -->
<SubHeader {...headerProps}/>

<!-- Side Projects -->
<section class="gap-4 columns-1 md:columns-2 lg:columns-3">
	{#each projects as exp}
        <p>{exp.title}</p>
	{/each}
</section>
