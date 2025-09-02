<script lang='ts'>
	import DashboardItem from './DashboardItem.svelte'
	import { type Tree } from '../routes/api/docs/+server'

	interface Props {
		items: Tree[]
	}

	const { items }: Props = $props()
</script>

<aside class='px-10 md:min-w-[300px]'>
	<ul>
		{#each items as child}
			<DashboardItem {...child} url='docs' />
		{/each}
	</ul>
</aside>
