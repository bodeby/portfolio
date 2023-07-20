<script lang="ts">
	import type { Education } from '../interfaces/education';
	export let edu: Education;
</script>

<div class="hidden md:block col-span-1">
	<h4 class="text-md font-medium">{edu.period}</h4>
</div>
<div class="col-span-full md:col-span-3">
	<h3 class="text-lg font-medium">{edu.title}</h3>
	<p class="text-sm font-normal text-gray-500 mt-0">{edu.school}</p>
	<h3 class="md:hidden text-md font-light text-gray-500">{edu.period}</h3>
</div>
