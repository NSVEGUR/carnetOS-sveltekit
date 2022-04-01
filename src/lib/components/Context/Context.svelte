<!-- svelte-ignore a11y-invalid-attribute -->
<script lang="ts">
	import { onMount } from 'svelte';
	function hideMenu() {
		document.getElementById('contextMenu').style.display = 'none';
	}
	function rightClick(e: any) {
		e.preventDefault();
		const contextMenu = document.getElementById('contextMenu');
		if (contextMenu.style.display == 'block') hideMenu();
		else {
			contextMenu.style.display = 'block';
			if (e.pageX >= window.screen.width - 300 && e.pageY >= window.screen.height - 300) {
				contextMenu.style.left = e.pageX - 200 + 'px';
				contextMenu.style.top = e.pageY - 200 + 'px';
			} else if (e.pageX >= window.screen.width - 300 || e.pageY >= window.screen.height - 300) {
				if (e.pageX >= window.screen.width - 300) {
					contextMenu.style.left = e.pageX - 200 + 'px';
					contextMenu.style.top = e.pageY + 'px';
				} else {
					contextMenu.style.left = e.pageX + 'px';
					contextMenu.style.top = e.pageY - 200 + 'px';
				}
			} else {
				contextMenu.style.left = e.pageX + 'px';
				contextMenu.style.top = e.pageY + 'px';
			}
		}
	}
	onMount(() => {
		document.onclick = hideMenu;
		document.oncontextmenu = rightClick;
	});
</script>

<div id="contextMenu" class="contextMenu">
	<div class="context-link"><a href="">Book Tickets</a></div>
	<div class="drop-div" />
	<div class="context-link"><a href="">Get Info</a></div>
	<div class="context-link"><a href="">Change Background</a></div>
	<div class="drop-div" />
	<div class="stack context-link">
		<i class="fas fa-check left-glyph" /><a href="">Use Stacks</a>
	</div>
	<div class="stack context-link">
		<i class="fas fa-angle-right right-glyph" /><a href="">Group Stacks By</a>
	</div>
	<div class="context-link"><a href="">Show View Options</a></div>
</div>

<style lang="scss">
	#contextMenu {
		position: absolute;
		color: var(--system-text-color);
		font-size: 13px;
		width: 200px;
		z-index: 9900;
		padding: 10px 5px;
		background: var(--system-transparent-color-primary);
		border-radius: 10px;
		backdrop-filter: blur(20px);
		box-shadow: var(--shadow-effect);
		display: none;
		.stack {
			position: relative;
		}

		.left-glyph {
			position: absolute;
			top: 6px;
			left: 3px;
		}
		.right-glyph {
			position: absolute;
			top: 6px;
			right: 3px;
		}
		.fa-angle-right {
			font-size: 1.1rem;
		}
		.context-link {
			padding: 0px 20px;
			border-radius: 5px;
			font-weight: 500;
			a {
				color: var(--system-text-color);
			}
			&:hover {
				background: var(--system-color);
			}
			&:hover .left-glyph,
			&:hover .right-glyph {
				color: var(--system-text-color-op);
			}
			&:hover a {
				color: var(--system-text-color-op);
			}
		}
	}
</style>
