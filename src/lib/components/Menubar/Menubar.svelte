<!-- svelte-ignore a11y-invalid-attribute -->
<script lang="ts">
	import Time from './Time.svelte';
	import ActionButton from './ActionButton/ActionButton.svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		const menuIcons = document.querySelectorAll('.menu-icons');
		const actionDrop: HTMLElement = document.querySelector('.action-drop');
		window.addEventListener('mouseup', (e: any) => {
			menuIcons.forEach((icon) => {
				if (e.target != icon && e.target.parentNode != icon) {
					actionDrop.style.display = 'none';
				}
			});
		});
	});
</script>

<div id="menu">
	<nav>
		<div class="content">
			<div class="logo menu-icons menu-icon-1">
				<a href="" class="logo-link dont-ref"> <i class="fab fa-apple" /></a>
				<div class="menu-drop">
					<div class="drop-link" data-open="about" data-db="0">
						<a href="" class="dont-ref">About dbOS</a>
					</div>
					<div class="drop-div" />
					<div class="drop-link">
						<a href="" class="dont-ref">System Preferences...</a>
					</div>
					<div class="drop-link"><a href="" class="dont-ref">App Store...</a></div>
					<div class="drop-div" />
					<div class="drop-link"><a href="" class="dont-ref">Recent Items</a></div>
					<div class="drop-div" />
					<div class="drop-link"><a href="" class="dont-ref">Force Quit</a></div>
					<div class="drop-div" />
					<div class="drop-link"><a href="" class="dont-ref">Sleep</a></div>
					<div class="drop-link"><a href="" class="dont-ref">Restart...</a></div>
					<div class="drop-link"><a href="" class="dont-ref">Shutdown...</a></div>
					<div class="drop-div" />
					<div class="drop-link"><a href="" class="dont-ref">Lock Screen</a></div>
					<div class="drop-link"><a href="" class="dont-ref">Log Out User...</a></div>
				</div>
			</div>
			<ul class="links">
				<li class="menu-icons menu-icon-2">
					<a href="" class="dont-ref">Database</a>
					<div class="menu-drop">
						<div class="drop-link" data-open="about" data-icon="0">
							<a href="" class="dont-ref">About Database</a>
						</div>
						<div class="drop-div" />
						<div class="drop-link"><a href="" class="dont-ref">Open</a></div>
						<div class="drop-div" />
						<div class="drop-link"><a href="" class="dont-ref">Hide Database</a></div>
						<div class="drop-link"><a href="" class="dont-ref">Hide Others</a></div>
						<div><a href="" class="not-active">Show All</a></div>
					</div>
				</li>
				<li class="menu-icons menu-icon-3">
					<a href="" class="dont-ref">Sql</a>
					<div class="menu-drop">
						<div class="drop-link"><a href="" class="dont-ref">New Sql File</a></div>
						<div class="drop-link" data-open="about" data-icon="1">
							<a href="" class="dont-ref">Open</a>
						</div>
						<div><a href="" class="not-active">Close Window</a></div>
						<div class="drop-div" />
						<div class="drop-link"><a href="" class="dont-ref">Get Info</a></div>
						<div><a href="" class="not-active">Rename</a></div>
						<div class="drop-div" />
						<div><a href="" class="not-active">Compress</a></div>
						<div class="drop-div" />
						<div><a href="" class="not-active">Duplicate</a></div>
						<div><a href="" class="not-active">Make Alias</a></div>
						<div><a href="" class="not-active">Quick Look</a></div>
						<div><a href="" class="not-active">Show Original</a></div>
						<div><a href="" class="not-active">Add to Sidebar</a></div>
						<div class="drop-div" />
						<div><a href="" class="not-active">Move to trash</a></div>
						<div><a href="" class="not-active">Eject</a></div>
						<div class="drop-div" />
						<div class="drop-link"><a href="" class="dont-ref">Find</a></div>
						<div class="drop-div" />
						<div><a href="" class="not-active">Tags..</a></div>
					</div>
				</li>
				<li class="menu-icons menu-icon-4">
					<a href="" class="dont-ref">Harsha</a>
					<div class="menu-drop">
						<div class="drop-link" data-open="about" data-icon="2">
							<a href="" class="dont-ref">Open Harsha</a>
						</div>
						<div class="drop-div" />
						<div class="drop-link">
							<a href="https://github.com/Harsha662002" target="_blank">Github</a>
						</div>
						<div class="drop-link">
							<a href="https://www.linkedin.com/in/harsha-vasireddy-9a12671ba/" target="_blank"
								>LinkedIn</a
							>
						</div>
						<div class="drop-div" />
						<div><a class="not-active" href="">Twitter</a></div>
						<div class="drop-link">
							<a href="https://www.instagram.com/harsha_v_7/" target="_blank">Instagram</a>
						</div>
						<div class="drop-link"><a href="mailto:hvasireddy329@gmail.com">Mail</a></div>
						<div class="drop-div" />
						<div><a href="" class="not-active">Hide Harsha</a></div>
						<div class="drop-link"><a href="" class="dont-ref">Hide Others</a></div>
						<div><a href="" class="not-active">Show All</a></div>
					</div>
				</li>
				<li class="menu-icons menu-icon-5">
					<a href="" class="dont-ref">Praveen</a>
					<div class="menu-drop">
						<div class="drop-link" data-open="about" data-icon="3">
							<a href="" class="dont-ref">Open Praveen</a>
						</div>
						<div class="drop-div" />
						<div class="drop-link">
							<a href="https://github.com/praveen-prav" target="_blank">Github</a>
						</div>
						<div class="drop-link">
							<a href="https://www.linkedin.com/in/praveen-pravee-594521194/" target="_blank"
								>LinkedIn</a
							>
						</div>
						<div class="drop-div" />
						<div><a href="" class="not-active">Twitter</a></div>
						<div class="drop-link">
							<a href="https://www.instagram.com/p_r_a_v_e_e_n__p_r_a_v_e/" target="_blank"
								>Instagram</a
							>
						</div>
						<div class="drop-link"><a href="mailto:praveenpravee406@gmail.com">Mail</a></div>
						<div class="drop-div" />
						<div><a href="" class="not-active">Hide Praveen</a></div>
						<div class="drop-link"><a href="" class="dont-ref">Hide Others</a></div>
						<div><a href="" class="not-active">Show All</a></div>
					</div>
				</li>
				<li class="menu-icons menu-icon-6">
					<a href="" class="dont-ref">Ravindar</a>
					<div class="menu-drop">
						<div class="drop-link" data-open="about" data-icon="4">
							<a href="" class="dont-ref">Open Ravindar</a>
						</div>
						<div class="drop-div" />
						<div class="drop-link">
							<a href="https://github.com/Ravindar832" target="_blank">Github</a>
						</div>
						<div class="drop-link">
							<a href="https://www.linkedin.com/in/gugulothu-ravindar-85683a232/" target="_blank"
								>LinkedIn</a
							>
						</div>
						<div class="drop-div" />
						<div class="drop-link">
							<a href="https://twitter.com/RavindarGugulo2" target="_blank">Twitter</a>
						</div>
						<div class="drop-link">
							<a href="https://www.instagram.com/lavi_225.835/" target="_blank">Instagram</a>
						</div>
						<div class="drop-link"><a href="mailto:ravindarguguloth832@gmail.com">Mail</a></div>
						<div class="drop-div" />
						<div><a href="" class="not-active">Hide Ravindar</a></div>
						<div class="drop-link"><a href="" class="dont-ref">Hide Others</a></div>
						<div><a href="" class="not-active">Show All</a></div>
					</div>
				</li>
				<li class="menu-icons menu-icon-7">
					<a href="" class="dont-ref">Vineeth</a>
					<div class="menu-drop">
						<div class="drop-link" data-open="about" data-icon="5">
							<a href="" class="dont-ref">Open Vineeth</a>
						</div>
						<div class="drop-div" />
						<div class="drop-link">
							<a href="https://github.com/VineethChabala" target="_blank">Github</a>
						</div>
						<div class="drop-link">
							<a href="https://www.linkedin.com/in/vineeth-chabala-86b077213/" target="_blank"
								>LinkedIn</a
							>
						</div>
						<div class="drop-div" />
						<div class="drop-link">
							<a href="https://twitter.com/Vineeth96789988" target="_blank">Twitter</a>
						</div>
						<div class="drop-link">
							<a href="https://www.instagram.com/vineethchabala/" target="_blank">Instagram</a>
						</div>
						<div class="drop-link"><a href="mailto:vineeth.chabala@gmail.com">Mail</a></div>
						<div class="drop-div" />
						<div><a href="" class="not-active">Hide Vineeth</a></div>
						<div class="drop-link"><a href="" class="dont-ref">Hide Others</a></div>
						<div><a href="" class="not-active">Show All</a></div>
					</div>
				</li>
				<li class="menu-icons menu-icon-8">
					<a href="" class="dont-ref">Nagasai</a>
					<div class="menu-drop">
						<div class="drop-link" data-open="about" data-icon="6">
							<a href="" class="dont-ref">Open Nagasai</a>
						</div>
						<div class="drop-div" />
						<div class="drop-link">
							<a href="https://github.com/NSVEGUR" target="_blank">Github</a>
						</div>
						<div class="drop-link">
							<a href="https://www.linkedin.com/in/nagasai-v-93b84921b/" target="_blank">LinkedIn</a
							>
						</div>
						<div class="drop-div" />
						<div class="drop-link">
							<a href="https://twitter.com/VegurS" target="_blank">Twitter</a>
						</div>
						<div class="drop-link">
							<a href="https://www.instagram.com/nsvegur/" target="_blank">Instagram</a>
						</div>
						<div class="drop-link"><a href="mailto:nsvegur@gmail.com">Mail</a></div>
						<div class="drop-div" />
						<div><a href="" class="not-active">Hide Nagasai</a></div>
						<div class="drop-link"><a href="" class="dont-ref">Hide Others</a></div>
						<div><a href="" class="not-active">Show All</a></div>
					</div>
				</li>
				<li class="menu-icons menu-icon-9">
					<a href="" class="dont-ref">Help</a>
					<div class="menu-drop">
						<div><a href="" class="not-active">Give Feedback</a></div>
						<div class="drop-div" />
						<div class="drop-link" data-open="about" data-db="1">
							<a href="" class="dont-ref">dbOS Help</a>
						</div>
					</div>
				</li>
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

	.content .logo {
		position: relative;
		color: var(--system-text-color);
		padding: 0 10px;
		margin-left: 0.7rem;
		border-radius: 3px;
	}
	.content .logo a {
		color: var(--system-text-color);
	}
	.logo .menu-drop a {
		padding: 10px 10px;
	}

	.content .links li {
		list-style: none;
		position: relative;
		border-radius: 5px;
		margin: 1px 0;
		transition: all 0.3s ease;
	}

	.content .links li a {
		color: var(--system-text-color);
		font-size: 13px;
		font-weight: 500;
		padding: 0px 8px;
	}

	.menu-drop {
		backdrop-filter: blur(20px);
		color: var(--system-text-color);
		font-size: 13px;
		width: 200px;
		position: absolute;
		top: 41px;
		left: 0px;
		padding: 10px 5px;
		background: var(--system-transparent-color-primary);
		border-radius: 10px;
		box-shadow: var(--shadow-effect);
		display: none;
	}

	.drop-div {
		margin: 3px 0;
		background: var(--system-transparent-color-secondary-op);
		height: 0.5px;
		width: 100%;
	}

	.content .links li .menu-drop div .not-active {
		color: var(--system-transparent-color-secondary-op);
	}

	.drop-link {
		border-radius: 8px;
	}

	#focus {
		position: fixed;
		top: 0;
		color: var(--system-text-color);
		right: 220px;
		padding-top: 2px;
		height: 20px;
		width: 20px;
		display: none;
	}

	.drop-link:hover {
		background: var(--system-color);
	}

	.content .links li .drop-link:hover a {
		color: var(--system-text-color-op);
	}
	.content .logo .drop-link:hover a {
		color: var(--system-text-color-op);
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
		nav .content .links {
			margin-left: 30px;
		}
		.content .links li a {
			padding: 8px 13px;
		}
		.content .logo .logo-link {
			margin-left: 0rem;
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
		nav #show-menu:checked ~ .content .links {
			left: 0%;
		}
		.content .links li {
			margin: 15px 20px;
		}
		.content .links li a {
			line-height: 40px;
			font-size: 1.25rem;
			display: block;
			padding: 8px 18px;
		}

		.content .links ul {
			position: static;
			opacity: 1;
			visibility: visible;
			background: none;
			max-height: 0px;
			overflow: hidden;
		}

		.content .links ul li {
			margin: 7px 20px;
		}
		.content .logo {
			margin-left: -1rem;
		}
	}
	@media screen and (max-width: 658px) {
		#focus {
			right: 50px;
		}
	}
	@media screen and (max-width: 460px) {
		.content .links li a {
			font-size: 0.75rem;
			padding: 2px 5px;
		}
		.content .logo a {
			margin-left: 0;
		}

		nav .content .links {
			padding-bottom: 0px;
		}

		.content .links li {
			margin: 1px 1px;
		}
	}
</style>
