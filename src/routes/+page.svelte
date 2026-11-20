<script lang="ts">
	import { links, site } from '#lib/config/site.js';
	import { projects } from '#lib/config/projects.js';
	import ProjectCard from '#lib/components/project-card.svelte';

	const description =
		'Full-stack developer building production web apps in SvelteKit, TypeScript and Django: client portals, SaaS and personal finance and fitness software.';

	const contactLinks = [
		{ label: 'GitHub', href: links.github, external: true },
		links.linkedin && { label: 'LinkedIn', href: links.linkedin, external: true },
		{ label: 'Email', href: `mailto:${links.email}`, external: false },
		links.resume && { label: 'Resume (PDF)', href: links.resume, external: true }
	].filter((link) => !!link);
</script>

<svelte:head>
	<title>{site.name} · {site.role}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="{site.url}/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="{site.name} · {site.role}" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content="{site.url}/" />
	<meta property="og:image" content="{site.url}/images/jeff-image.jpeg" />
</svelte:head>

<main id="main" class="mx-auto max-w-site px-4 py-12 lg:px-8 lg:py-20">
	<header class="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
		<picture class="shrink-0">
			<source srcset="/images/jeff-image.webp" type="image/webp" />
			<img
				src="/images/jeff-image.jpeg"
				alt={site.name}
				width="400"
				height="400"
				class="size-24 rounded-2xl object-cover lg:size-32"
			/>
		</picture>
		<div>
			<span class="font-mono text-xs text-text-subtle uppercase lg:text-sm">
				{site.role} · {site.location}
			</span>
			<h1 class="mt-2 text-4xl leading-none font-extrabold tracking-tight lg:text-5xl">
				{site.name}
			</h1>
			<p class="mt-4 max-w-2xl text-lg text-text-muted">
				Actuary turned developer. I design, build, host and maintain production web apps end to end,
				from the schema and auth to payments, email and deploys. Most of my work is in SvelteKit and
				TypeScript on PostgreSQL.
			</p>
			<p class="mt-3 max-w-2xl text-lg text-text-muted">
				Below are the projects I have running in production today, for clients and for myself.
			</p>
			<ul class="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-semibold">
				{#each contactLinks as link (link.label)}
					<li>
						<a
							href={link.href}
							target={link.external ? '_blank' : undefined}
							rel={link.external ? 'noopener' : undefined}
							class="underline underline-offset-4"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</header>

	<section aria-labelledby="work-title" class="mt-16 lg:mt-24">
		<h2 id="work-title" class="font-mono text-sm text-text-subtle uppercase">Selected work</h2>
		<div class="mt-5 space-y-6 lg:space-y-8">
			{#each projects as project (project.slug)}
				<ProjectCard {project} />
			{/each}
		</div>
	</section>

	<footer class="mt-16 border-t pt-6 text-sm text-text-subtle">
		© {new Date().getFullYear()}
		{site.name}. Built with SvelteKit and hosted on GitHub Pages.
	</footer>
</main>
