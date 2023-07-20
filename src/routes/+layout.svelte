<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Bodeby</title>
</svelte:head>

<main class="min-h-screen ">
	<div class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 block w-full h-2 mb-16"></div>
	<div class="container mx-auto max-w-xl flex flex-col space-y-8 py-4">
		<slot />
	</div>
</main>
