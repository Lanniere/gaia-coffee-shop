<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
	<footer class="bg-[#222222] py-4 text-center">
		<p class="text-sm text-[#F5EFEA]/60">© {{ currentYear }}</p>
	</footer>
</template>
