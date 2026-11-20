import type { Project } from '#lib/types/project.js';

export const projects: Project[] = [
	{
		slug: 'engeltax',
		eyebrow: 'Client work · Tax prep · Live',
		title: 'File with Engeltax',
		summary:
			'A secure client portal for a tax preparation firm, rebuilt from the ground up to replace an older upload-only site I had built for them.',
		highlights: [
			'Passwordless sign-in with email magic links and passkeys, plus role-based staff access, all on better-auth.',
			'Tax documents organized by year and uploaded straight to S3 with presigned URLs, so files never pass through the app server.',
			'Stripe invoicing, with payment status kept in sync through webhooks.',
			'Migrated every client, file and invoice from the old system in a single morning.'
		],
		stack: [
			'SvelteKit',
			'TypeScript',
			'PostgreSQL',
			'Drizzle',
			'better-auth',
			'AWS S3',
			'AWS SES',
			'Stripe',
			'Sentry',
			'Playwright'
		],
		href: 'https://www.filewithengeltax.com',
		linkText: 'filewithengeltax.com',
		image: {
			src: '/screenshots/filewithengeltax/portal_small.webp',
			fallback: '/screenshots/filewithengeltax/portal_fallback.png',
			alt: 'The File with Engeltax client portal, listing a client’s uploaded tax documents',
			width: 1200,
			height: 750
		}
	},
	{
		slug: 'ce-keepers',
		eyebrow: 'SaaS · Healthcare compliance · Live',
		title: 'CE Keepers',
		summary:
			'A subscription platform that helps mental health professionals track continuing education credits and stay compliant through license renewals.',
		highlights: [
			'A compliance engine covering 38 states and D.C. It handles per-category requirements, face-to-face minimums and caps on online hours.',
			'Individual and group-practice subscriptions on Stripe, with a compliance dashboard for each practice’s whole team.',
			'Scheduled jobs for renewal reminders, grace-period warnings, expiring payment methods and account cleanup.',
			'Email bounce and complaint handling through SES and SNS, a Redis cache, and share images generated on the server with Satori.'
		],
		stack: [
			'SvelteKit',
			'TypeScript',
			'PostgreSQL',
			'Drizzle',
			'Redis',
			'better-auth',
			'Stripe',
			'AWS S3',
			'AWS SES/SNS',
			'Vitest',
			'Playwright'
		],
		href: 'https://www.cekeepers.com',
		linkText: 'cekeepers.com',
		image: {
			src: '/screenshots/cekeepers/fullscreen_small.webp',
			fallback: '/screenshots/cekeepers/fullscreen_fallback.png',
			alt: 'The CE Keepers homepage',
			width: 1200,
			height: 750
		}
	},
	{
		slug: 'cubby',
		eyebrow: 'My own product · Personal finance · Live',
		title: 'Cubby',
		summary:
			'A free, multi-tenant household finance app that brings budgets, transactions, investments and net worth together in one place. It’s also packaged to self-host.',
		highlights: [
			'Bank CSV import that recognizes common banks and remembers any other mapping after it’s set up once.',
			'Vendor rules that categorize transactions automatically, with a review queue for anything they don’t match.',
			'Brokerage sync through SnapTrade, daily holding prices from Tiingo, and net-worth history with a projection.',
			'Ships as a Docker Compose stack and a Render blueprint for people who want their data on their own server.'
		],
		stack: [
			'SvelteKit',
			'TypeScript',
			'PostgreSQL',
			'Drizzle',
			'better-auth',
			'SnapTrade',
			'LayerChart',
			'Docker',
			'Playwright'
		],
		href: 'https://cubby.money',
		linkText: 'cubby.money',
		image: {
			src: '/screenshots/cubby/fullscreen_small.webp',
			fallback: '/screenshots/cubby/fullscreen_fallback.png',
			alt: 'The Cubby homepage',
			width: 1200,
			height: 750
		}
	},
	{
		slug: 'weight-points-plus',
		eyebrow: 'My own product · Health & fitness · Live',
		title: 'Weight Points Plus',
		summary:
			'A food and weight tracker I built to replace the spreadsheet I used for my own weight loss. It has been running in production since 2022.',
		highlights: [
			'A points engine that sets a daily target from height, weight, age and sex, and scores foods, recipes and activities.',
			'Unit conversion lets a food entered by weight be logged by volume or count, using a per-food density.',
			'Foods and recipes are versioned, so editing nutrition data never rewrites past meal logs.',
			'Installs on a phone as a progressive web app, with email-verified signup and email through Amazon SES.'
		],
		stack: [
			'Django',
			'Python',
			'PostgreSQL',
			'Tailwind CSS',
			'django-allauth',
			'AWS SES',
			'Sentry',
			'pytest',
			'Docker'
		],
		href: 'https://www.weightpointsplus.com',
		linkText: 'weightpointsplus.com',
		image: {
			src: '/screenshots/weightpointsplus/fullscreen_small.webp',
			fallback: '/screenshots/weightpointsplus/fullscreen_fallback.png',
			alt: 'The Weight Points Plus homepage',
			width: 1200,
			height: 750
		}
	},
	{
		slug: 'bottom-up',
		eyebrow: 'Client work · Construction · Live',
		title: 'Bottom Up Construction',
		summary:
			'A redesigned marketing site for a growing local contractor, kept deliberately simple. I host and maintain it.',
		highlights: [
			'A contact form protected by Cloudflare Turnstile that delivers through Amazon SES.',
			'Environment validated when the server starts, so a missing variable stops the container instead of shipping a broken form.',
			'Playwright end-to-end tests with screenshot baselines that catch visual regressions.',
			'Containerized deploys on Coolify, with automatic staging and production released on demand.'
		],
		stack: [
			'SvelteKit',
			'TypeScript',
			'Tailwind CSS',
			'AWS SES',
			'Turnstile',
			'Docker',
			'Playwright'
		],
		href: 'https://www.bottomupconstruction.com',
		linkText: 'bottomupconstruction.com',
		image: {
			src: '/screenshots/bottomupconstruction/fullscreen_small.webp',
			fallback: '/screenshots/bottomupconstruction/fullscreen_fallback.png',
			alt: 'The Bottom Up Construction homepage',
			width: 1200,
			height: 750
		}
	}
];
