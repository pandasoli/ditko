<script lang='ts'>
	import { TypeWriter } from '$lib'
	import { lockArt, qualityArt, sArt } from '$assets'

	const drawing = `
#!/bin/sh
#     .___.__  __   __
#   __| _/|__|/  |_|  | ______
#  / __ | |  \\   __\\  |/ /  _ \\
# / /_/ | |  ||  | |    <  <_> )
# \\____ | |__||__| |__|_ \\____/
#      \\/               \\/
	`

	const pros = [
		{ drawing: lockArt, title: 'Security' },
		{ drawing: qualityArt, title: 'Quality', small: true },
		{ drawing: sArt, title: 'Simple', big: true },
	]
</script>

<div class='flex justify-center gap-10'>
	<div>
		<pre class='text-xl font-light'>{drawing}</pre>
		<p class='flex'>#&nbsp;<TypeWriter phrases={[ 'Reliable', 'Secure', 'Simple', 'Readable', 'Good' ]} /></p>
	</div>

	<div></div>
</div>

<section class='p-10'>
	<ul class='flex justify-center items-center gap-10'>
		{#each pros as { drawing, title, small, big }}
			<li class='flex flex-col items-center gap-3'>
				<pre class={
					small ? 'text-[4pt] my-4' :
					big ? 'text-[8pt] mt-3 mb-6' : 'text-[5pt]'
				}>{drawing}</pre>

				<h3 class='text-center'>{title}</h3>
			</li>
		{/each}
	</ul>
</section>

<section class='grid place-items-center p-10'>
	<p>We are recruiting!<span class='caret bg-white w-10'>|</span></p>
	<a href='https://discord.gg/GfUtPzxQJ2' class='underline'>https://discord.gg/GfUtPzxQJ2</a>
</section>

<section class='grid place-items-center p-10'>
	<p class='max-w-[700px]'>
		Ditko is a group of friends dedicated to creating software that is reliable,
		secure, and functional while following the UNIX and POSIX philosophies. The group values
		simplicity, readability, and maintainability, focusing on solutions that do one thing
		well rather than adding unnecessary complexity. Each project has its own owner, who
		decides how it will be developed and maintained, but all work adheres to Ditko's
		principles of clean and efficient design. Collaboration is voluntary allowing the group
		to produce high-quality software while fostering a culture of thoughtful, disciplined programming.
	</p>
</section>

<section class='grid place-items-center p-10'>
	<a href='https://codeberg.org/ditko' class='underline'>Project link</a>
</section>

<section class='grid place-items-center p-10'>
	<p class='max-w-[700px]'>
		Ditko is an informal development group made up of friends who collaborate on software projects.
		The group follows the UNIX and POSIX philosophies, emphasizing software that is reliable, secure,
		simple, readable, and functional.
	</p>

	<h3 class='mt-10 mb-6'>Key characteristics of Ditko:</h3>

	<ol class='flex flex-col gap-4 list-[upper-roman] max-w-[700px]'>
		<li>
			<b>Project Ownership</b>

			<ul class='list-disc'>
				<li>Each project has a owner(s).</li>
				<li>The owner decides the project's development process, code style, and guidelines, while respecting the group's principles.</li>
				<li>Owners are responsible for coordinating contributions and ensuring consistency across the project.</li>
			</ul>
		</li>

		<li>
			<b>Collaboration</b>

			<ul class='list-disc'>
				<li>Members work together voluntarily.</li>
				<li>New developers may join individual projects, but their contributions and access are governed by the owner and the project-specific practices.</li>
				<li>Collaboration is encouraged through open discussions, code reviews, and shared problem-solving.</li>
			</ul>
		</li>

		<li>
			<b>Philosophy and Goals</b>

			<ul class='list-disc'>
				<li>Focus on clean, minimal, and maintainable code.</li>
				<li>Software developed aligns with UNIX simplicity and POSIX standards.</li>
				<li>Prioritize legibility so others can learn from the code.</li>
				<li>Focus on efficiency, and long-term sustainability of the code.</li>
			</ul>
		</li>
	</ol>
</section>
