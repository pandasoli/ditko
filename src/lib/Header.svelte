<script lang='ts'>
	const links = [
		'projects',
		'contact'
	]
</script>

<header class='flex justify-evenly p-6 mb-10'>
	<a href='/'>ditko</a>

	<nav>
		<ul class='flex gap-4'>
			{#each links as href}
				<li><a href='/{href}' class='underline'>{href}</a></li>
			{/each}
		</ul>
	</nav>
</header>
