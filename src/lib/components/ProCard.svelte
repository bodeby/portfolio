<script lang="ts">
	import type { Experience } from '../../interfaces/experience';
	export let exp: Experience;

    let length = exp.technologies.length - 1;
</script>

<article class="flex flex-col md:flex-row">
	<div class="md:w-1/4">
		<h4 class="text-sm font-semibold text-gray-500">{exp.period}</h4>
	</div>
	<div class="md:w-3/4 md:mb-0 md:ml-8">
		<h3 class="text-md font-semibold">{exp.title} - {exp.company}</h3>
		<p class="text-sm font-normal text-gray-300 leading-snug subpixel-antialiased">
			{exp.description}
		</p>
		<p class="text-sm font-normal text-gray-500 mt-1">
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
