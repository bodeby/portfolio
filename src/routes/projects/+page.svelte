<script lang="ts">
	// Data
	import projects from '$lib/data/projects.json';

	// Components
    import SubHeader from '$lib/components/SubHeader.svelte';

    let headerProps = {
        title: 'Side Projects',
        message: 'Most of the projects can be found on my github Account',
        backlink: '/'
    }
</script>

<!-- Sub page header -->
<SubHeader {...headerProps}/>

<!-- Side Projects -->
<section class="gap-4 columns-1 md:columns-2 lg:columns-3">
	{#each projects as exp}
		<img class="w-full aspect-video mb-4 rounded" src="https://picsum.photos/500/300?random=1" />
		<img class="w-full aspect-square mb-4 rounded" src="https://picsum.photos/500/300?random=2" />
		<img class="w-full aspect-square mb-4 rounded" src="https://picsum.photos/500/300?random=3" />
		<img class="w-full aspect-square mb-4 rounded" src="https://picsum.photos/500/300?random=4" />
		<img class="w-full aspect-video mb-4 rounded" src="https://picsum.photos/500/300?random=5" />
		<img class="w-full aspect-video mb-4 rounded" src="https://picsum.photos/500/300?random=6" />
		<img class="w-full aspect-square mb-4 rounded" src="https://picsum.photos/500/300?random=7" />
		<img class="w-full aspect-video mb-4 rounded" src="https://picsum.photos/500/300?random=8" />
		<img class="w-full aspect-square mb-4 rounded" src="https://picsum.photos/500/300?random=9" />
	{/each}
</section>
