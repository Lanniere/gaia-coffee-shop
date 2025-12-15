<script setup lang="ts"></script>

<template>
	<section class="great-block flex justify-center-safe">
		<div class="cropped">
			<NuxtImg
				src="/images/tarocard.png"
				alt="Таро-карта Gaia"
				preload
				loading="eager"
				class="tarocard-img"
			/>
		</div>
		<div class="gradient" />
		<div class="absolute top-[15%] text-center">
			<h1 class="font-(family-name:--font-amatic) text-8xl font-bold">
				МАГИЧЕСКАЯ КОФЕЙНЯ GAIA – <br />⭑ ВОЛШЕБСТВО ВКУСА И ПРЕДСКАЗАНИЙ ⭑
			</h1>
			<p class="mt-8 text-4xl font-normal">Место, где уют сочетается с волшебством!</p>
			<UButton
				class="mt-20 rounded-full bg-[#433320] px-25 py-5 text-2xl font-normal"
				size="xl"
				variant="solid"
				to="booking"
			>
				ЗАБРОНИРОВАТЬ ЗАЛ
			</UButton>
		</div>
	</section>
</template>

<style>
.great-block {
	width: 100%;
	min-height: 625px;
	max-height: 1128px;
	height: 70vh;
	background-image: linear-gradient(180deg, #a98152, #f5efea);
	background-color: #f5efea;
	position: relative;
}
.gradient {
	background:
		linear-gradient(180deg, rgba(245, 239, 234, 1) 0%, rgba(245, 239, 234, 0) 100%),
		radial-gradient(
			ellipse closest-corner at 50% 33%,
			rgba(245, 239, 234, 1) 17%,
			rgba(245, 239, 234, 0.25) 100%
		);
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
}
.cropped {
	width: 100%;
	height: 100%;
	overflow: hidden;
}

.cropped > img {
	min-width: 1400px;
	margin: -13% 0px 0px 0px;
	transform: scale(1.35);
}
</style>
