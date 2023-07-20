<script>
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>Bodeby</title>
</svelte:head>

<main class="min-h-screen @container">
	<div class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 block w-full h-2 mb-8 md:mb-16" />
	<div class="container px-4 md:px-0 mx-auto max-w-xl flex flex-col space-y-8 py-4">
		<slot />
	</div>
</main>
