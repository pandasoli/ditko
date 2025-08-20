<script lang='ts'>
	const members = [
		'elisoli',
		'JuniorBecari10'
	]
</script>

<section class='p-10'>
	<p>
		<a href='https://codeberg.org/ditko' class='underline'>Project link</a>
	</p>

	<br>

	<p>
		<a href='https://discord.gg/GfUtPzxQJ2' class='underline'>Our Discord server</a>
	</p>
</section>

<section class='p-10'>
	<h1>Project members:</h1>

	<div class='flex gap-2'>
		{#each members as member}
			<a href='https://codeberg.org/{member}' class='underline'>@{member}</a>
		{/each}
	</div>
</section>
