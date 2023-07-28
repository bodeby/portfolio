<script lang="ts">
	import Avatar from "../Avatar.svelte";

	export let title = 'Side Projects';
	export let message = 'Most of the projects can be found on my github Account';
	export let backlink = '/';
</script>

<section class="flex shrink-0 items-center space-x-4">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="w-6 h-6 text-primary dark:text-dark-primary"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
		/>
	</svg>
	
	<Avatar />

	<div class="flex flex-col -space-y-1 text-lg font-light">
		<h1 class="font-semibold text-primary dark:text-dark-primary">{title}</h1>
		<p class="subpixel-antialiased break-words leading-tight text-base">
			{message}
		</p>
	</div>
</section>
