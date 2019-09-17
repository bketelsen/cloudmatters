<script>
  import { user } from "../stores/user.js";

  let name = "You Crazy Person";
  let loggedin = false;

  const unsubscribe = user.subscribe(value => {
    loggedin = user.current() != null;
  });

  function clickIt() {
    postData("/.netlify/functions/hello-lambda")
      .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
      .catch(error => console.error(error));
  }

  function postData(url = "") {
    // Default options are marked with *
    return fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
		"Content-Type": "application/json",
        "Authorization": "Bearer " + user.current().token.access_token
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
    }).then(response => response.json()); // parses JSON response into native JavaScript objects
  }
</script>

<style>
  h1,
  figure,
  p {
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
<h1>Great success!</h1>

<figure>
  <img alt="Borat" src="great-success.png" />
  <figcaption>HIGH FIVE {loggedin}!</figcaption>
</figure>

<p>
  <strong>
    Try editing this file (src/routes/index.svelte) to test live reloading.
  </strong>
</p>
<button on:click={clickIt}>Click Me</button>