<!-- svelte-ignore a11y-invalid-attribute -->
<script lang="ts">
	import Time from './Time.svelte';
	import ActionButton from './ActionButton/ActionButton.svelte';
	import Logo from './Nav/Logo.svelte';
	import Profile from './Nav/Profile.svelte';
	import Bookings from './Nav/Bookings.svelte';
	import Trains from './Nav/Trains.svelte';
	import Tatkal from './Nav/Tatkal.svelte';
	import Developers from './Nav/Developers.svelte';
	import Help from './Nav/Help.svelte';
	import { onMount } from 'svelte';

	function resetMenu(menuIcons: NodeListOf<HTMLElement>) {
		menuIcons.forEach((icon: HTMLElement) => {
			icon.classList.remove('links-hover');
			const menuDrop: HTMLElement = icon.querySelector('.drop');
			const actionDrop: HTMLElement = document.querySelector('.action-drop');
			menuDrop.style.display = 'none';
			actionDrop.style.display = 'none';
		});
	}
	function showMenuDrop(e: any) {
		const menuIcons: NodeListOf<HTMLElement> = document.querySelectorAll('.menu-icons');
		resetMenu(menuIcons);
		e.target.classList.add('links-hover');
		e.target.querySelector('.drop').style.display = 'block';
	}
	function removeHoverListeners(menuIcons: NodeListOf<HTMLElement>) {
		menuIcons.forEach((icon) => {
			icon.removeEventListener('mouseenter', showMenuDrop);
		});
	}
	function addHoverListeners(menuIcons: NodeListOf<HTMLElement>) {
		menuIcons.forEach((icon) => {
			icon.addEventListener('mouseenter', showMenuDrop);
		});
	}

	onMount(() => {
		const menuIcons: NodeListOf<HTMLElement> = document.querySelectorAll('.menu-icons');
		window.addEventListener('mouseup', (e: any) => {
			menuIcons.forEach((icon) => {
				if (e.target != icon && e.target.parentNode != icon) {
					resetMenu(menuIcons);
					removeHoverListeners(menuIcons);
				}
			});
		});
		document.querySelector('nav').addEventListener('click', (e: any) => {
			if (e.target.closest('.menu-icons')) {
				const el = e.target.closest('.menu-icons');
				resetMenu(menuIcons);
				el.classList.add('links-hover');
				el.querySelector('.drop').style.display = 'block';
				addHoverListeners(menuIcons);
			}
		});
	});
</script>

<div id="menu">
	<nav>
		<div class="content">
			<Logo />
			<ul class="links">
				<Profile />
				<Bookings />
				<Trains />
				<Tatkal />
				<Developers />
				<Help />
			</ul>
		</div>
		<div id="focus">
			<i class="fas fa-moon" />
		</div>
		<ActionButton />
		<Time />
	</nav>
</div>

<style>
	#menu {
		background: var(--system-transparent-color-primary);
		position: fixed;
		z-index: 9900;
		width: 100vw;
	}

	#menu nav {
		position: relative;
		display: flex;
		max-width: 100%;
		justify-content: space-between;
	}

	#menu nav:before {
		content: '';

		width: inherit;
		height: inherit;

		position: fixed;
		left: 0;
		top: 0;

		z-index: 0;
		backdrop-filter: blur(12px);
	}

	nav .content {
		display: flex;
		align-items: center;
	}

	nav .content .links {
		margin-left: 5px;
		display: flex;
	}
	#focus {
		position: fixed;
		top: 0;
		color: var(--system-text-color);
		right: 205px;
		padding-top: 2px;
		height: 20px;
		width: 20px;
		display: none;
	}

	@media screen and (max-width: 1250px) {
		#menu {
			backdrop-filter: inherit;
			box-shadow: none;
		}
		#menu nav {
			max-width: 100%;
			padding: 0 20px;
		}
		#focus {
			right: 220px;
		}
	}
	@media screen and (max-width: 920px) {
		nav .content .links {
			display: block;
			position: fixed;
			background: var(--bg-color);
			height: 100%;
			width: 100%;
			top: 70px;
			left: -100%;
			margin-left: 0;
			max-width: 360px;
			overflow-y: auto;
			padding-bottom: 100px;
			transition: all 0.3s ease;
		}
		.content .links ul {
			position: static;
			opacity: 1;
			visibility: visible;
			background: none;
			max-height: 0px;
			overflow: hidden;
		}
	}
	@media screen and (max-width: 658px) {
		#focus {
			right: 50px;
		}
	}
	@media screen and (max-width: 460px) {
		nav .content .links {
			padding-bottom: 0px;
		}
	}
</style>
