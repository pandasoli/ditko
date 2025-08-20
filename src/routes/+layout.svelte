<script lang='ts'>
	import { Header } from '$lib'
	import favicon from '$lib/assets/favicon.svg'
	import '../app.css'

	let { children } = $props()
</script>

<svelte:head>
	<link rel='icon' href={favicon} />
	<title>ditko</title>
</svelte:head>

<Header />

{@render children?.()}
