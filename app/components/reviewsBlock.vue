<script setup lang="ts">
import { computed, ref } from "vue"

interface ReviewCard {
	id: string
	name: string
	text: string
	rating: number
	imageAlt: string
}

const VISIBLE_COUNT = 5
const CARD_WIDTH = 391
const CARD_HEIGHT = 500
const ACTIVE_WIDTH = 422
const ACTIVE_HEIGHT = 542
const GAP_PX = 24
const OFFSET_START = CARD_WIDTH * 2 + GAP_PX * 2 + ACTIVE_WIDTH / 2

const reviews: ReviewCard[] = [
	{
		id: "review-1",
		name: "ЛЮБОВЬ ХЛЫБЕНРУЦКАЯ",
		text: "Чистое, потрясающее место! Приятная атмосфера, дружелюбный персонал. Очень вкусные десерты и кофе. Рекомендую попробовать нежное кофе с песочной корицей.",
		rating: 5,
		imageAlt: "Кофе с десертом",
	},
	{
		id: "review-2",
		name: "АНЯ МАКАРОВА",
		text: "Место вдохновляет! Влюбилась с первого визита. Баланс вкуса и внимания к деталям. Если хотите впечатлений, это лучший уголок, чтобы почувствовать землю и её энергию.",
		rating: 5,
		imageAlt: "Чашка кофе",
	},
	{
		id: "review-3",
		name: "ЛАРИСА ХАЕРЗАМАНОВА",
		text: "Восторг! Приятная атмосфера, волшебные напитки, впечатляющая десертная витрина. Рекомендую!",
		rating: 5,
		imageAlt: "Десерты и напитки",
	},
	{
		id: "review-4",
		name: "ИНГА КЕНИГ",
		text: "Люблю эту кофейню. Приятно наблюдать, как растёте. Здесь всегда душевно, вкусно и уютно. Команда искренне заботится, чтобы каждый гость почувствовал тепло и хороший кофе.",
		rating: 5,
		imageAlt: "Гости кофейни",
	},
	{
		id: "review-5",
		name: "АРТЁМ ВОЛОШИН",
		text: "Давно приятно удивляюсь, каждое посещение — праздник вкуса и уюта. Приветливые бариста, отличный кофе и десерты. Спасибо команде за настроение.",
		rating: 5,
		imageAlt: "Полка с кофе",
	},
	{
		id: "review-6",
		name: "МИРА ПЕТРОВА",
		text: "Идеально для спокойных встреч и творческих бесед. Прекрасный чай, кофе и десерты. Обязательно вернусь.",
		rating: 5,
		imageAlt: "Стол с напитками",
	},
]

const placeholderSrc = "https://via.placeholder.com/320x240/DFD3C1/2C2216?text=Photo"

const currentIndex = ref(0)
const direction = ref<"left" | "right">("right")

function goPrev() {
	direction.value = "left"
	currentIndex.value = currentIndex.value <= 0 ? reviews.length - 1 : currentIndex.value - 1
}

function goNext() {
	direction.value = "right"
	currentIndex.value = currentIndex.value >= reviews.length - 1 ? 0 : currentIndex.value + 1
}

const pagedReviews = computed(() => {
	const result: ReviewCard[] = []
	for (let i = 0; i < VISIBLE_COUNT; i++) {
		const idx = (currentIndex.value + i) % reviews.length
		const review = reviews[idx]
		if (review) result.push(review)
	}
	return result
})

const dots = computed(() => Array.from({ length: reviews.length }, (_, idx) => idx))

function goTo(index: number) {
	const normalized = ((index % reviews.length) + reviews.length) % reviews.length
	direction.value = normalized > currentIndex.value ? "right" : "left"
	currentIndex.value = normalized
}

const trackStyle = computed(() => ({
	gap: `${GAP_PX}px`,
	transform: `translateX(calc(50vw - ${OFFSET_START}px))`,
}))

function getCardStyle(localIndex: number) {
	const isCenter = localIndex === 2
	return {
		width: `${isCenter ? ACTIVE_WIDTH : CARD_WIDTH}px`,
		minWidth: `${isCenter ? ACTIVE_WIDTH : CARD_WIDTH}px`,
		height: `${isCenter ? ACTIVE_HEIGHT : CARD_HEIGHT}px`,
		borderRadius: `${isCenter ? 55 : 50}px`,
		border: "1px solid #B4B199",
	}
}
</script>

<template>
	<section class="overflow-x-clip bg-[#F5EFEA] py-16 md:py-20 lg:py-24">
		<UContainer>
			<header class="space-y-3 text-center">
				<h2
					class="font-(family-name:--font-amatic) text-4xl leading-tight font-bold text-[#2C2216] sm:text-5xl lg:text-6xl"
				>
					ОТЗЫВЫ ТЕХ, КТО ПОЧУВСТВОВАЛ СИЛУ ЗЕМЛИ В КАЖДОЙ ЧАШКЕ
				</h2>
			</header>
		</UContainer>

		<div class="relative mt-10 flex w-full items-end justify-center lg:mt-12">
			<TransitionGroup
				:name="direction === 'right' ? 'slide-right' : 'slide-left'"
				tag="div"
				class="flex items-end"
				:style="trackStyle"
			>
				<article
					v-for="(card, idx) in pagedReviews"
					:key="card.id"
					class="flex shrink-0 flex-col overflow-hidden bg-[#EFE5DA] shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
					:style="getCardStyle(idx)"
				>
					<div class="relative h-48 w-full bg-[#DFD3C1]">
						<img
							:src="placeholderSrc"
							:alt="card.imageAlt"
							class="h-full w-full object-cover"
							loading="lazy"
							decoding="async"
						/>
					</div>

					<div class="flex flex-1 flex-col justify-between px-5 pt-5 pb-6 text-[#4D3B2C]">
						<div class="space-y-3">
							<div class="flex items-center gap-1 text-lg text-[#DAA520]">
								<span v-for="star in card.rating" :key="star">★</span>
							</div>
							<h3 class="text-lg font-semibold tracking-[0.02em] uppercase">
								{{ card.name }}
							</h3>
							<p class="text-sm leading-relaxed sm:text-base">
								{{ card.text }}
							</p>
						</div>
					</div>
				</article>
			</TransitionGroup>
		</div>

		<UContainer>
			<div class="mt-10 flex items-center justify-center gap-4 sm:gap-6">
				<UButton
					variant="ghost"
					color="primary"
					class="h-12 w-12 rounded-full border-0 bg-[#6F7957] text-white shadow-[0_6px_18px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#5F6A4B]"
					@click="goPrev"
				>
					<span class="text-xl leading-none">←</span>
				</UButton>

				<div class="flex items-center gap-3 sm:gap-4">
					<button
						v-for="dot in dots"
						:key="dot"
						class="h-3 w-3 rounded-full border border-[#B4B199] transition"
						:class="dot === currentIndex ? 'border-[#6F7957] bg-[#6F7957]' : 'bg-transparent'"
						aria-label="Перейти к слайду"
						type="button"
						@click="goTo(dot)"
					/>
				</div>

				<UButton
					variant="ghost"
					color="primary"
					class="h-12 w-12 rounded-full border-0 bg-[#6F7957] text-white shadow-[0_6px_18px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5 hover:bg-[#5F6A4B]"
					@click="goNext"
				>
					<span class="text-xl leading-none">→</span>
				</UButton>
			</div>
		</UContainer>
	</section>
</template>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
	transition: all 0.4s ease-out;
}

.slide-right-enter-from {
	opacity: 0;
	transform: translateX(100px);
}

.slide-right-leave-to {
	opacity: 0;
	transform: translateX(-100px);
}

.slide-left-enter-from {
	opacity: 0;
	transform: translateX(-100px);
}

.slide-left-leave-to {
	opacity: 0;
	transform: translateX(100px);
}

.slide-right-move,
.slide-left-move {
	transition: transform 0.4s ease-out;
}
</style>
