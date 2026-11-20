<script lang="ts">
	import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';

	import type { Project } from '#lib/types/project.js';

	let { project }: { project: Project } = $props();
</script>

<article
	aria-labelledby="{project.slug}-title"
	class="overflow-hidden rounded-2xl border bg-surface lg:grid lg:grid-cols-5"
>
	<a
		href={project.href}
		target="_blank"
		rel="noopener"
		tabindex="-1"
		aria-hidden="true"
		class="block border-b bg-chip lg:col-span-2 lg:border-r lg:border-b-0 lg:p-6"
	>
		<picture>
			<source srcset={project.image.src} type="image/webp" />
			<img
				src={project.image.fallback}
				alt={project.image.alt}
				width={project.image.width}
				height={project.image.height}
				loading="lazy"
				class="aspect-16/10 w-full object-cover object-top lg:rounded-lg lg:border lg:shadow-sm"
			/>
		</picture>
	</a>
	<div class="p-6 lg:col-span-3 lg:p-8">
		<span class="font-mono text-xs text-accent-text uppercase">{project.eyebrow}</span>
		<h3 id="{project.slug}-title" class="mt-2 text-2xl font-extrabold tracking-tight">
			{project.title}
		</h3>
		<p class="mt-2 text-text-muted">{project.summary}</p>
		<ul class="mt-4 list-disc space-y-1.5 pl-5 text-base text-text-muted marker:text-text-subtle">
			{#each project.highlights as highlight (highlight)}
				<li>{highlight}</li>
			{/each}
		</ul>
		<ul aria-label="Tech stack" class="mt-5 flex flex-wrap gap-1.5">
			{#each project.stack as tech (tech)}
				<li class="rounded-md bg-chip px-2 py-0.5 font-mono text-xs text-text-muted">{tech}</li>
			{/each}
		</ul>
		<a
			href={project.href}
			target="_blank"
			rel="noopener"
			class="mt-5 inline-flex items-center gap-1 font-semibold underline underline-offset-4"
		>
			{project.linkText}
			<ArrowUpRight class="size-4" aria-hidden="true" />
			<span class="sr-only">(opens in a new tab)</span>
		</a>
	</div>
</article>
