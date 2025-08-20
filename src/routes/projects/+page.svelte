<script lang='ts'>
	const projects = [
		{ title: 'sylpth', description: 'A TUI/CLI messaging program that uses P2P, encryption and tor-network to communicate between devices without the need of a intermediary server.\n\nIt shall support text messages and all kinds of binary documents, that might or not be displayed on the interface.', leaders: ['elisoli'] },
		{ title: 'coreutils', description: 'A re-implementation of the GNU coreutils.', leaders: ['elisoli'] },
		{ title: 'klyra', description: 'A multi-service backup CLI application.', leaders: ['elisoli', 'JuniorBecari10'] },
		{ title: 'abyss', description: 'A Linux/BSD distro that goes beyond "do it yourself" or "build it yourself", on abyss you "develop it yourself". abyss encourages the user to develop his own tools like bootloader and libc, though the user is free to port software and/or use software already developed by ditko.', leaders: ['elisoli'] },
		{ title: 'minimal', description: 'A general-purpose programming language that sucks a lot less than Rust.', leaders: ['juniorbecari', 'elisoli'] }
	]
</script>

<section class='p-10'>
	<div class='flex flex-wrap gap-20'>
		{#each projects as { title, description, leaders }}
			<article class='flex flex-col gap-4'>
				<h2 class='text-lg'><a href='https://codeberg.org/ditko/{title}' class='underline'>{title}</a></h2>

				<p class='max-w-[600px]'>{description}</p>

				<div class='flex gap-2'>
					{#each leaders as leader}
						<a href='https://codeberg.org/{leader}' class='underline'>@{leader}</a>
					{/each}
				</div>
			</article>
		{/each}
	</div>
</section>
