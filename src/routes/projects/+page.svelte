<script lang='ts'>
	const drawing = `
\\|/         (__)
    \`\\------(oo)
      ||    (__)
      ||w--||     \\|/
  \\|/
	`

	const projects = [
		{ title: 'sylpth', description: 'A TUI/CLI messaging program that uses P2P, encryption and tor-network to communicate between devices without the need of a intermediary server.\n\nIt shall support text messages and all kinds of binary documents, that might or not be displayed on the interface.', leaders: ['elisoli'] },
		{ title: 'coreutils', description: 'A re-implementation of the GNU coreutils.', leaders: ['elisoli'] },
		{ title: 'klyra', description: 'A multi-service backup CLI application.', leaders: ['elisoli', 'JuniorBecari10'] },
		{ title: 'abyss', description: "A Linux/BSD distro that goes beyond 'do it yourself' or 'build it yourself', on abyss you 'develop it yourself'. abyss encourages the user to develop his own tools like bootloader and libc, though the user is free to port software and/or use software already developed by ditko.", leaders: ['elisoli'] },
		{ title: 'minimal', description: 'A general-purpose programming language that sucks a lot less than Rust.', leaders: ['juniorbecari', 'elisoli'] }
	]

	const quotes = [
		{ text: 'I think creativity is like a river. It flows where it wants, sometimes gently, sometimes rushing in unexpected directions... when we let go and follow its course.', author: 'Louise Fletcher' },
		{ text: "Don't think. Thinking is the enemy of creativity... You simply must do things.", author: 'Ray Bradbury' },
		{ text: "Let's make things exist and then judge later. Don't cancel the process of creativity too early: Let it flow.", author: 'Ross Lovegrove' },
		{ text: 'What is now proved was once only imagined.', author: 'William Blake' },
		{ text: 'Instead of keeping barriers to the thoughts... We welcome all types of thought... flow ourselves with the thought.', author: 'Reddit' },
		{ text: 'Your thoughts are like a river: flowing, unfiltered, rapid. You, with a bucket in hand, pick a certain amount of them to use.', author: 'Reddit' }
	]
</script>

<section class='p-10'>
	<div class='flex justify-between flex-wrap'>
		<pre class='text-lg sm:text-xl font-light'>{drawing}</pre>

		<div class='flex flex-col gap-2 m-8'>
			<p class='max-w-[700px]'>I think creativity is like a river. It flows where it wants, sometimes gently, sometimes rushing in unexpected directions... when we let go and follow its course.</p>
			<p>&mdash; <span>Louise Fletcher</span></p>
		</div>
	</div>
</section>

<section class='p-10'>
	<div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
		{#each projects as { title, description, leaders }}
			<article class='flex flex-col gap-4'>
				<h2 class='text-lg'><a href='https://codeberg.org/ditko/{title}' class='underline'>{title}</a></h2>

				<p class='text-sm text-gray-400 line-clamp-3'>{description}</p>

				<div class='flex gap-2'>
					{#each leaders as leader}
						<a href='https://codeberg.org/{leader}' class='underline'>@{leader}</a>
					{/each}
				</div>
			</article>
		{/each}
	</div>
</section>
