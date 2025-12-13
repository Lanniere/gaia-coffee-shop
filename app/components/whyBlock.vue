<script setup lang="ts">
import photo1 from "~/assets/images/why/gaiaPhoto1.png"
import photo2 from "~/assets/images/why/gaiaPhoto2.png"
import photo3 from "~/assets/images/why/gaiaPhoto3.png"
import photo4 from "~/assets/images/why/gaiaPhoto4.png"
import photo5 from "~/assets/images/why/gaiaPhoto5.png"

import flower1 from "~/assets/images/why/flowers1.png"
import flower2 from "~/assets/images/why/flowers2.png"
import flower3 from "~/assets/images/why/flowers3.png"

const photos = [photo1, photo2, photo3, photo4, photo5]

const benefits = [
	{
		number: "01",
		title: "Уникальная атмосфера магии и уюта",
		bg: flower1,
	},
	{
		number: "02",
		title: "Пространство для встреч, обучения и ритуалов",
		bg: flower2,
	},
	{
		number: "03",
		title: "Магический магазин с уникальными товарами",
		bg: flower3,
	},
]
</script>

<template>
	<section class="why-section bg-[#F5EFEA] py-16 md:py-20 lg:py-24">
		<UContainer>
			<h2
				class="text-center font-(family-name:--font-amatic) text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl"
			>
				ПОЧЕМУ GAIA – ЭТО БОЛЬШЕ, ЧЕМ ПРОСТО КОФЕЙНЯ?
			</h2>
		</UContainer>

		<!-- Галерея фото: на всю ширину -->
		<div class="mt-10 w-full overflow-visible px-0">
			<div class="flex flex-nowrap items-start justify-center gap-5 sm:gap-6 lg:gap-8">
				<div
					v-for="(photo, index) in photos"
					:key="index"
					:class="[
						'h-[573px] w-[430px] shrink-0 overflow-hidden rounded-[50px] shadow-sm',
						index === 0 ? '-ml-10 sm:-ml-14 lg:-ml-16' : '',
						index === photos.length - 1 ? '-mr-10 sm:-mr-14 lg:-mr-16' : '',
					]"
				>
					<img
						:src="photo"
						alt="GAIA пространство"
						class="h-full w-full rounded-[50px] object-cover"
						loading="lazy"
					/>
				</div>
			</div>
		</div>

		<UContainer>
			<!-- Карточки преимуществ -->
			<div class="mt-10 flex flex-col gap-4 md:mt-12 md:flex-row md:gap-6">
				<div
					v-for="benefit in benefits"
					:key="benefit.number"
					class="relative flex-1 overflow-hidden rounded-[50px] bg-[#eef2e8] shadow-sm"
					:style="{
						backgroundImage: `url(${benefit.bg})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
					}"
				>
					<div class="absolute inset-0 bg-[#ECE8D9]/40"></div>
					<div
						class="relative z-10 flex h-[170px] w-full max-w-[430px] flex-col items-center justify-center px-4 py-2 md:px-2"
					>
						<div
							class="flex h-full w-full flex-col items-center justify-center gap-2 rounded-[40px] border border-[#7A8A68] px-4 py-2 md:px-6"
						>
							<div class="text-2xl font-medium text-[#6b7b55] md:text-3xl">
								{{ benefit.number }}
							</div>
							<div class="text-center text-base leading-relaxed text-[#1f1f1f] md:text-lg">
								{{ benefit.title }}
							</div>
						</div>
					</div>
				</div>
			</div>
		</UContainer>
	</section>
</template>

<style scoped>
.why-section {
	color: var(--ui-gray);
}
</style>
