<script setup lang="ts">
import { onMounted, ref } from "vue"

interface ReviewCard {
	id: string
	name: string
	text: string
	rating: number
	imageAlt: string
	imageSrc: string
}

const reviews: ReviewCard[] = [
	{
		id: "review-1",
		name: "ЛЮБОВЬ ХЛЫБЕНРУЦКАЯ",
		text: "Чистое, потрясающее место! Приятная атмосфера, дружелюбный персонал. Очень вкусные десерты и кофе. Рекомендую попробовать нежное кофе с песочной корицей.",
		rating: 5,
		imageAlt: "Кофе с десертом",
		imageSrc: "/images/reviews/review1.png",
	},
	{
		id: "review-2",
		name: "АНЯ МАКАРОВА",
		text: "Место вдохновляет! Влюбилась с первого визита. Баланс вкуса и внимания к деталям. Если хотите впечатлений, это лучший уголок, чтобы почувствовать землю и её энергию.",
		rating: 5,
		imageAlt: "Чашка кофе",
		imageSrc: "/images/reviews/review2.png",
	},
	{
		id: "review-3",
		name: "ЛАРИСА ХАЕРЗАМАНОВА",
		text: "Восторг! Приятная атмосфера, волшебные напитки, впечатляющая десертная витрина. Рекомендую!",
		rating: 5,
		imageAlt: "Десерты и напитки",
		imageSrc: "/images/reviews/review3.png",
	},
	{
		id: "review-4",
		name: "ИНГА КЕНИГ",
		text: "Люблю эту кофейню. Приятно наблюдать, как растёте. Здесь всегда душевно, вкусно и уютно. Команда искренне заботится, чтобы каждый гость почувствовал тепло и хороший кофе.",
		rating: 5,
		imageAlt: "Гости кофейни",
		imageSrc: "/images/reviews/review4.png",
	},
	{
		id: "review-5",
		name: "АРТЁМ ВОЛОШИН",
		text: "Давно приятно удивляюсь, каждое посещение — праздник вкуса и уюта. Приветливые бариста, отличный кофе и десерты. Спасибо команде за настроение.",
		rating: 5,
		imageAlt: "Полка с кофе",
		imageSrc: "/images/reviews/review5.png",
	},
	{
		id: "review-6",
		name: "МИРА ПЕТРОВА",
		text: "Идеально для спокойных встреч и творческих бесед. Прекрасный чай, кофе и десерты. Обязательно вернусь.",
		rating: 5,
		imageAlt: "Стол с напитками",
		imageSrc: "/images/reviews/review6.png",
	},
	{
		id: "review-7",
		name: "Артём Волошин",
		text: "Очень приятное заведение, вежливые бариста, вкусный кофе. Также приобрел автопарфюм ручной работы, запах у него просто чудесный! Все понравилось, рекомендую данное заведение к посещению.",
		rating: 5,
		imageAlt: "Стол с напитками",
		imageSrc: "/images/reviews/review7.png",
	},
	{
		id: "review-8",
		name: "Somebody .",
		text: "Одно из самых приятных кафе в Сургуте, атмосфера успокаивающая, баристы всегда приветливые, матча самая вкусная, десерты тоже класс.",
		rating: 5,
		imageAlt: "Стол с напитками",
		imageSrc: "/images/reviews/review8.png",
	},
	{
		id: "review-9",
		name: "Виктория Сенникова",
		text: "Каждый визит в GAIA — это маленький праздник. Вкусный кофе, уютная атмосфера и потрясающий сервис.",
		rating: 5,
		imageAlt: "Стол с напитками",
		imageSrc: "/images/reviews/review9.png",
	},
]

const carouselRef = ref<{
	emblaApi?: {
		scrollPrev: () => void
		scrollNext: () => void
		scrollTo: (index: number) => void
		scrollSnapList: () => number[]
	}
} | null>(null)

const currentIndex = ref(0)
const dotsCount = ref(reviews.length)

function updateSnapCount() {
	const api = carouselRef.value?.emblaApi
	if (!api) return
	dotsCount.value = api.scrollSnapList().length
}

onMounted(() => {
	updateSnapCount()
})

function handleSelect(index: number) {
	currentIndex.value = index
}

function scrollPrev() {
	carouselRef.value?.emblaApi?.scrollPrev()
}

function scrollNext() {
	carouselRef.value?.emblaApi?.scrollNext()
}

function scrollTo(index: number) {
	carouselRef.value?.emblaApi?.scrollTo(index)
}
</script>

<template>
	<section id="reviews" class="overflow-x-clip py-16 md:py-20 lg:py-24">
		<UContainer>
			<header class="space-y-3 text-center">
				<h2
					class="font-(family-name:--font-amatic) text-4xl leading-tight font-bold text-[#2C2216] sm:text-5xl lg:text-6xl"
				>
					ОТЗЫВЫ ТЕХ, КТО ПОЧУВСТВОВАЛ СИЛУ ЗЕМЛИ В КАЖДОЙ ЧАШКЕ
				</h2>
			</header>
		</UContainer>

		<div class="relative mt-10 w-full lg:mt-12">
			<UCarousel
				ref="carouselRef"
				v-slot="{ item }"
				:items="reviews"
				:ui="{
					viewport: 'px-6 pb-3',
					item: 'flex justify-center basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 2xl:basis-1/4 2xl:basis-1/5',
					container: 'items-stretch',
				}"
				loop
				@select="handleSelect"
			>
				<article
					:key="item.id"
					class="review-card flex flex-col overflow-hidden bg-[#EFE5DA] shadow-sm"
				>
					<div class="h-60 bg-[#DFD3C1]">
						<NuxtImg
							:src="item.imageSrc"
							:alt="item.imageAlt"
							class="h-full w-full object-cover object-center"
							loading="lazy"
						/>
					</div>

					<div class="flex flex-1 flex-col justify-between px-6 pt-6 pb-6 text-[#4D3B2C]">
						<div class="space-y-3">
							<div class="flex flex-row items-center justify-center gap-1">
								<UIcon
									v-for="(star, index) in item.rating"
									:key="star"
									name="i-heroicons-star-solid"
									class="text-[#DAA520]"
									:class="`size-${4 + 2 * Math.min(index, item.rating - 1 - index)}`"
								/>
							</div>
							<h3 class="text-center text-xl font-semibold tracking-[0.02em] uppercase md:text-xl">
								{{ item.name }}
							</h3>
							<p class="text-center text-sm leading-relaxed sm:text-base">
								{{ item.text }}
							</p>
						</div>
					</div>
				</article>
			</UCarousel>
		</div>

		<!-- Навигация карусели -->
		<UContainer>
			<div class="mt-10 flex items-center justify-center gap-4 sm:gap-6">
				<UButton
					color="secondary"
					class="rounded-full bg-[#6F7957] p-3 text-white transition hover:-translate-y-0.5 hover:bg-[#5F6A4B]"
					size="xl"
					icon="material-symbols:arrow-back-rounded"
					variant="solid"
					@click="scrollPrev"
				/>

				<div class="flex items-center gap-3 sm:gap-4">
					<button
						v-for="index in dotsCount"
						:key="index"
						type="button"
						class="h-3 w-3 rounded-full border border-[#B4B199] transition"
						:class="index - 1 === currentIndex ? 'border-[#6F7957] bg-[#6F7957]' : 'bg-transparent'"
						@click="scrollTo(index - 1)"
					/>
				</div>

				<UButton
					color="secondary"
					class="rounded-full bg-[#6F7957] p-3 text-white transition hover:-translate-y-0.5 hover:bg-[#5F6A4B]"
					icon="material-symbols:arrow-forward-rounded"
					size="xl"
					variant="solid"
					@click="scrollNext"
				/>
			</div>
		</UContainer>
	</section>
</template>

<style scoped>
.review-card {
	/* min-width: 400px; */
	border-radius: 50px;
	border-width: 1px;
	border-style: solid;
	border-color: #b4b199;
}
</style>
