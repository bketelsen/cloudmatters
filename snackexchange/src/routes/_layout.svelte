<script>
	import Nav from '../components/Nav.svelte';
	import {user} from '../stores/user.js';
	export let segment;

	import { onMount } from 'svelte';
	let name = "You Crazy Person";
	let Identity;

	let loggedin = false;

	const unsubscribe = user.subscribe(value => {
		loggedin = (user.current()!=null);
	});
	onMount(async () => {
		const module = await import('netlify-identity-widget');
		Identity = module.default;
		Identity.init();
		Identity.on('login', u => {
			user.set(u);
			Identity.close();
		});
		Identity.on('logout', () => {
			user.set({});
			Identity.close();
		})

	});
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment} {Identity}/>

<main>
<span> {loggedin}</span>
	<slot></slot>
</main>