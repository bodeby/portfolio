<script>
	import '../app.css';
</script>

<svelte:head>
	<title>Bodeby</title>
</svelte:head>

<main class="min-h-screen pt-16">
	<div class="container mx-auto max-w-[500px] flex flex-col space-y-8 py-4">
		<slot />
	</div>
</main>
