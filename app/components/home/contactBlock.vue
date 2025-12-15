<script setup lang="ts"></script>

<template>
	<section id="contacts" class="contact-block">
		<!-- Header with title -->
		<div class="bg-[#677256] py-6 text-center">
			<h2
				class="font-(family-name:--font-amatic) text-3xl font-bold text-[#F5EFEA] sm:text-4xl md:text-5xl lg:text-6xl"
			>
				СЛЕДУЙ ЗА ЗОВОМ БОГИНИ – МЫ ЖДЁМ ТЕБЯ ЗДЕСЬ
			</h2>
		</div>

		<!-- Map section -->
		<div class="relative">
			<iframe
				src="https://yandex.ru/map-widget/v1/org/gaia_volshebnaya_kofeynya/152941702538/?ll=73.452627%2C61.250283&z=17"
				allowfullscreen="true"
				class="h-[400px] w-full md:h-[500px]"
			></iframe>
		</div>

		<!-- Pre-footer -->
		<PreFooter />
	</section>
</template>
