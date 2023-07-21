<script>
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	inject({ mode: dev ? 'development' : 'production' });
	import '../app.css';

	// Components
	import GlowBar from '$lib/components/GlowBar.svelte';
</script>

<svelte:head>
	<title>Bodeby</title>
</svelte:head>

<main class="min-h-screen @container dark:bg-licorice dark:text-gray-200 relative">
	<GlowBar />
	<div class="container px-4 md:px-0 mx-auto max-w-xl flex flex-col space-y-8 py-8">
		<slot />
	</div>
</main>

<style>

</style>
