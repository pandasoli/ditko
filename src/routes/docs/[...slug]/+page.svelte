<script lang='ts'>
	import { onMount } from 'svelte'
	import { type Tree } from '../../api/docs/+server'
    import Dashboard from '$lib/Dashboard.svelte';

	const { data } = $props()

	let tree = $state<Tree[]>([])

	onMount(async () => {
		const res = await fetch('/api/docs')
		tree = await res.json()
	})
</script>

<div class='md:flex'>
	<Dashboard items={tree} />

	<article class='markdown flex-1'>
		{@html data.html}
	</article>
</div>
