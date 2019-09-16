<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<script>
import GoTrue from "gotrue-js";
let email = ""
let password = ""

let auth = new GoTrue({
  APIUrl: "https://optimistic-khorana-1a7154.netlify.com/.netlify/identity",
  audience: "",
  setCookie: false
});


function login() {
auth
  .login(email, password)
  .then(response => {
    console.log("Success! Response: " + JSON.stringify({ response }));
  })
  .catch(error => console.log("Failed :( " + JSON.stringify(error)));
}
</script>

<h1>Great success!</h1>

<figure>
	<img alt='Borat' src='great-success.png'>
	<figcaption>HIGH FIVE!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
<form name="login">
  <div class="message"></div>
  <p>
    <label>Email<br/><input type="email" name="email" bind:value={email} required/></label>
  </p>
  <p>
    <label>Password<br/><input type="password" name="password" bind:value={password} required/></label>
  </p>
  <button type="submit" on:click={login}>Log in</button>
</form>