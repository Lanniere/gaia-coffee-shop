<script setup lang="ts"></script>

<template>
	<UApp>
		<Header />
		<UMain>
			<UContainer>
				<slot />
			</UContainer>
		</UMain>
		<Footer />
	</UApp>
</template>
