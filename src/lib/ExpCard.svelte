<script lang="ts">
    import type { Experience } from '../interfaces/experience';
    export let exp: Experience;
</script>


<div class="hidden md:block col-span-1">
    <h4 class="text-md font-medium">{exp.period}</h4>
</div>
<div class="col-span-full md:col-span-3">
    <h3 class="text-lg font-medium">{exp.title} - {exp.company}</h3>
    <h3 class="md:hidden text-md font-light text-gray-500">{exp.period}</h3>
    <p class="text-lg font-light leading-snug subpixel-antialiased">
        {exp.description}
    </p>
    <p class="text-sm font-normal text-gray-500 mt-2">TS • React • Vite • Tailwind • Zustand</p>
</div>