<script lang="ts">
	import { onMount } from 'svelte';
	const daylist = ['Sun', 'Mon', 'Tue', 'Wed ', 'Thu', 'Fri', 'Sat'];
	const monthList = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	];

	function getTime(date) {
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		const ampm = hours >= 12 ? 'PM' : 'AM';

		if (seconds < 10) seconds = `0${seconds}`;
		hours %= 12;
		hours = hours || 12;
		minutes = minutes < 10 ? `0${minutes}` : minutes;

		const strTime = `${hours}:${minutes}:${seconds} ${ampm}`;

		return strTime;
	}

	function refreshTime() {
		const timeDisplay = document.getElementById('time');
		let date = new Date();

		let day = date.getDay();
		let presentDate = date.getDate();
		let month = date.getMonth();
		let time = getTime(date);
		timeDisplay.textContent =
			daylist[day] + ' ' + presentDate + ' ' + monthList[month] + ' ' + time;
	}

	let date = new Date();
	const dateString = date.toLocaleString();
	const newDateString = dateString.slice(11);

	onMount(() => {
		refreshTime();
		setInterval(refreshTime, 1000);
	});
</script>

<span id="time" />

<style lang="scss">
	#time {
		position: absolute;
		right: 20px;
		font-weight: 500;
		font-size: 13px;
		padding-top: 4px;
		color: var(--system-text-color);
	}

	@media screen and (max-width: 658px) {
		#time {
			display: none;
		}
	}
</style>
