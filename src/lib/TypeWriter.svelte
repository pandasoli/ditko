<script lang='ts'>
	import { onMount } from 'svelte'

	interface Props {
		phrases: string[]
		typingSpeed?: number
		deletingSpeed?: number
		pauseTime?: number
	}

	let {
		phrases,
		typingSpeed = 400,
		deletingSpeed = 100,
		pauseTime = 1200
	}: Props = $props()

	let display = $state('')
	let index = $state(0)
	let charIndex = $state(0)
	let deleting = $state(false)
	let paused = $state(false)

	async function typeLoop() {
		const current = phrases[index]
		paused = false

		if (!deleting) {
			display = current.slice(0, charIndex + 1)
			charIndex++
			if (charIndex === current.length) {
				paused = true
				await new Promise(r => setTimeout(r, pauseTime))
				deleting = true
			}
		} else {
			display = current.slice(0, charIndex - 1)
			charIndex--
			if (charIndex === 0) {
				paused = true
				await new Promise(r => setTimeout(r, pauseTime / 2))
				deleting = false
				index = (index + 1) % phrases.length
			}
		}

		setTimeout(typeLoop, deleting ? deletingSpeed : typingSpeed)
	}

	onMount(() => {
		typeLoop()
	})
</script>

<span>
	<!-- .caret is a global CSS class -->
	{display}<span class='bg-white w-10' class:opacity-100={!paused} class:caret={paused}>|</span>
</span>
