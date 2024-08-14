<div class="container">
	<slot></slot>
	<!-- Slot für dynamische Inhalte -->
</div>

<style>
	.container {
		position: absolute;
		bottom: 20%;
		right: 4%;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 10px; /* Abstand zwischen den Items */
		z-index: 10; /* Stellt sicher, dass die Liste über dem Inhalt liegt */
	}
</style>
