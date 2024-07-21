<script lang="ts">
	// import { Octokit } from '@octokit/core';

	// Data
	import experiences from '$lib/data/experience.json';
	import education from '$lib/data/education.json';
	import projects from '$lib/data/projects.json';

	// Components
	import ExpCard from '$lib/components/cards/ExpCard.svelte';
	import EduCard from '$lib/components/cards/EduCard.svelte';
	import ProCard from '$lib/components/cards/ProCard.svelte';
	import Avatar from '$lib/components/Avatar.svelte';
	import HeaderTest from '$lib/components/layout/HeaderTest.svelte';

	// // Octokit.js
	// // https://github.com/octokit/core.js#readme
	// const octokit = new Octokit({
	// 	auth: 'YOUR-TOKEN'
	// });

	// const {
	// 	data
	// } = async () => {
	// 	await octokit.request('GET /user', {
	// 		headers: {
	// 			'X-GitHub-Api-Version': '2022-11-28'
	// 		}
	// 	});
	// };
</script>

<!-- Presentation Header -->
<section class="flex shrink-0 items-center space-x-4">
	<div class="max-w-[75px] max-h-[75px] overflow-hidden rounded-full">
		<img
			src="/headshot.jpg"
			alt="Headshot of Frederik Bode"
			class="object-cover scale-100 bg-center"
		/>
	</div>

	<div class="flex flex-col -space-y-1 text-lg font-light">
		<h1 class="font-semibold text-primary dark:text-dark-primary">Frederik Bode</h1>
		<p class="break-words leading-snug subpixel-antialiased text-md font-normal">
			Software Engineering Student at Aalborg University CPH
		</p>
	</div>
</section>

<!-- About Section-->
<section class="text-primary dark:text-dark-primary">
	<h2 class="text-xl font-semibold mb-2">About</h2>
	<p class="text-md font-normal leading-snug subpixel-antialiased">
		Hello, I’m Frederik. I’m a software engineering student with a passion for web-based
		development. You can contact me on <a
			class="underline underline-offset-4"
			href="https://www.linkedin.com/in/frederik-bode-thorbensen/">Linkedin</a
		>.
	</p>
</section>

<!-- Work Section-->
<section class="flex flex-col space-y-8">
	<div class="flex justify-between items-baseline">
		<h2 class="text-md font-semibold -mb-4 text-primary dark:text-dark-primary">Work Experience</h2>
		<a class="text-xs underline underline-offset-2" href="/projects">See more</a>
	</div>

	{#each experiences as exp}
		<ExpCard {exp} />
	{/each}
</section>

<!-- Side Projects -->
<section class="flex flex-col space-y-8">
	<div class="flex justify-between items-baseline">
		<h2 class="text-md font-semibold -mb-4 text-primary dark:text-dark-primary">Side Projects</h2>
		<a class="text-xs underline underline-offset-2" href="/projects">See more</a>
	</div>

	{#each projects as exp}
		<ProCard {exp} />
	{/each}
</section>

<!-- Education Section-->
<section class="flex flex-col space-y-8">
	<h2 class="text-md font-semibold -mb-4 text-primary dark:text-dark-primary">Education</h2>
	{#each education as edu}
		<EduCard {edu} />
	{/each}
</section>
