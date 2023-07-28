<script lang="ts">
	import type { Experience } from '../../../interfaces/experience';
	export let exp: Experience;

	let length = exp.technologies.length - 1;
</script>

<article class="flex flex-col md:flex-row">
	<div class="md:w-1/4">
		<h4 class="text-sm font-semibold text-secondary dark:text-dark-secondary">{exp.period}</h4>
	</div>
	<div class="md:w-3/4 md:mb-0 md:ml-8 text-primary dark:text-dark-primary">
		<h3 class="text-md font-semibold hover:underline underline-offset-2">
			<a href={exp.link} target="_blank" referrerpolicy="no-referrer">
				{exp.title} - {exp.company}
			</a>
		</h3>
		<p class="text-sm font-normal leading-snug subpixel-antialiased">
			{exp.description}
		</p>
		<p class="text-sm font-normal mt-1 text-secondary dark:text-dark-secondary">
			{#each exp.technologies as tech}
				{#if tech === exp.technologies[length]}
					{tech}
				{:else}
					{tech} •
				{/if}
			{/each}
		</p>
	</div>
</article>
