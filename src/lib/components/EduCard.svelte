<script lang="ts">
	import type { Education } from '../../interfaces/education';
	export let edu: Education;
</script>

<article class="flex flex-col md:flex-row">
	<div class="md:w-1/4">
		<h4 class="text-sm font-semibold text-gray-500">{edu.period}</h4>
	</div>
	<div class="md:w-3/4 md:mb-0 md:ml-8">
		<h3 class="text-md font-semibold">{edu.title}</h3>
		<p class="text-sm font-normal text-gray-300 leading-snug subpixel-antialiased">
			{edu.school}
		</p>
	</div>
</article>
