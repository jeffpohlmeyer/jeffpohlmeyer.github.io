<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<a
	href="#main"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-4 focus:py-2"
>
	Skip to content
</a>

{@render children()}
