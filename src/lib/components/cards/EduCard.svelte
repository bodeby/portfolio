<script lang="ts">
	import type { Education } from '../../../interfaces/education';
	export let edu: Education;
</script>

<article class="flex flex-col md:flex-row text-secondary dark:text-dark-secondary">
	<div class="md:w-1/6">
		<h4 class="text-sm font-semibold">{edu.period}</h4>
	</div>
	<div class="md:w-5/6 md:mb-0 md:ml-8">
		<h3 class="text-md text-primary dark:text-dark-primary">{edu.title}</h3>
		<p class="text-sm font-normal leading-snug subpixel-antialiased">
			{edu.school}
		</p>
	</div>
</article>
