<script>
	import Button from '$lib/Button.svelte';
	import Block from '$lib/Block.svelte';

	let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];
</script>

<!-- app -->
<section class="flex shrink-0 items-center space-x-4">
	<img
		src="https://bonhomme.lol/profile.png"
		alt="SvelteKit logo"
		class="w-16 h-16 rounded-full object-cover hover:animate-bounce"
	/>
	<div class="flex flex-col -space-y-1">
		<h1 class="text-xl font-semibold">Frederik Bode</h1>
		<p class="text-lg font-light">The next iteration of Svelte's tooling</p>
		<a class="font-mono text-lg" href="https://github.com/bodeby" target="_blank">@bodeby</a>
	</div>
</section>

<!-- About Section-->
<section>
	<h2 class="text-xl font-semibold mb-2">About</h2>
	<p class="text-lg font-light">
		Hello, I’m Frederik. I’m a software engineering student with a passion for web-based development. You can contact me on <a class="underline underline-offset-4" href="https://www.linkedin.com/in/frederik-bode-thorbensen/">Linkedin</a>.
	</p>
</section>

<!-- Work Section-->
<section class="flex flex-col space-y-6">
	<h2 class="text-xl font-semibold -mb-4">Work Experience</h2>

	{#each cats as cat}
		<Button />
		<Block {cat} />
	{/each}

	<article class="flex space-x-4">
		<h3 class="w-1/4">2022 - present</h3>
		<div class="w-3/4">
			<h4 class="text-lg shrink-0 flex-nowrap">Software Engineer - Jorato</h4>
			<p class="text-lg font-light">
				Led a team of 5 engineers to develop our creator tools and e-commerce app. Collaborated
				closely with the Head of Product to track our tactical objectives, improve technical
				directions and shipping frequency.
			</p>
			<p>TS • Next • Nest • Stitches • Mobx • Turbo</p>
		</div>
	</article>

	<article class="flex space-x-4">
		<h3>2022 - 2023</h3>
		<div>
			<h4 class="text-lg">Teaching Assistant - Aalborg University CPH</h4>
			<p class="text-lg font-light">
				Assisting in the course: software development, with a focus on object-oriented design &
				analysis
			</p>
			<p>TS • Next • Nest • Stitches • Mobx • Turbo</p>
		</div>
	</article>
</section>
