<script lang="ts">
	import '$lib/styles/app.css';
</script>

<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/discover">Discover</a></li>
		<li><a href="/contact">Contact</a></li>
	</ul>
</nav>
<slot />

<style>
	nav {
		position: fixed;
		top: 0px;
		width: 100%;
		background-color: #333;
		color: white;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		list-style-type: none;
		padding: 0;
	}

	li {
		margin-right: 1rem;
	}

	a {
		color: white;
		text-decoration: none;
	}
</style>
