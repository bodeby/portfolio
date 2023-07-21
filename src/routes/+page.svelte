<script lang="ts">
	// Data
	import experiences from '$lib/data/experience.json';
	import education from '$lib/data/education.json';

	// Components
	import ExpCard from '$lib/components/ExpCard.svelte';
	import EduCard from '$lib/components/EduCard.svelte';
</script>

<!-- Presentation Header -->
<section class="flex shrink-0 items-center space-x-4">
	<img
		src="/headshot.jpg"
		alt="Headshot of Frederik Bode"
		class="w-16 h-16 rounded-full object-cover"
	/>
	<div class="flex flex-col -space-y-1 text-lg font-light">
		<h1 class="font-semibold">Frederik Bode</h1>
		<p class="subpixel-antialiased break-words leading-tight">
			Software Engineering Student at Aalborg University CPH
		</p>
	</div>
</section>

<!-- <a class="text-lg" href="https://github.com/bodeby" target="_blank">@bodeby</a> -->

<!-- About Section-->
<section>
	<h2 class="text-xl font-semibold mb-2">About</h2>
	<p class="text-lg font-light subpixel-antialiased">
		Hello, I’m Frederik. I’m a software engineering student with a passion for web-based
		development. You can contact me on <a
			class="underline underline-offset-4"
			href="https://www.linkedin.com/in/frederik-bode-thorbensen/">Linkedin</a
		>.
	</p>
</section>

<!-- Work Section-->
<section class="flex flex-col space-y-8">
	<h2 class="text-md font-semibold -mb-4">Work Experience</h2>
	{#each experiences as exp}
		<ExpCard {exp} />
	{/each}
</section>

<!-- Work Section-->
<section class="flex flex-col space-y-6">
	<h2 class="text-xl font-semibold mb-4">Education</h2>
	<div class="grid grid-cols-4 gap-y-4">
		{#each education as edu}
			<EduCard {edu} />
		{/each}
	</div>
</section>

<!-- Side Projects -->
<section class="flex flex-col">
	<h2 class="text-xl font-semibold mb-4">Side Projects</h2>
	<div class="grid grid-cols-4 gap-y-4">
		{#each education as edu}
			<EduCard {edu} />
		{/each}
	</div>
</section>
