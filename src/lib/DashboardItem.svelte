<script lang='ts'>
	import { page } from '$app/state'
	import DashboardItem from './DashboardItem.svelte'
	import { type Tree } from '../routes/api/docs/+server'

	interface Props extends Tree {
		url?: string
	}

	const { name, type, children, url }: Props = $props()
</script>

<li>
	{#if type === 'dir'}
		<details open={page.url.pathname.startsWith(`/${url}/${name}`)}>
			<summary>
				<a href='/{url}/{name}' class='underline'>{name}</a>
			</summary>

			<ul class='pl-10'>
				{#each children! as child}
					<DashboardItem {...child} url='{url}/{name}' />
				{/each}
			</ul>
		</details>
	{:else}
		<a href='/{url}/{name}' class='underline'>{name}</a>
	{/if}
</li>
