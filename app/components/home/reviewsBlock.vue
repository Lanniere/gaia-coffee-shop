<script setup lang="ts">
import { computed, ref } from "vue"

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
		name: "Лариса Хаерзаманова",
		text: "Восторг! Приятная атмосфера, великолепные ароматы, вкуснющие десерты и нежнейший кофе 😍 Рекомендую!",
		rating: 5,
		imageAlt: "Кофе с десертом",
		imageSrc: "/images/reviews/review1.png",
	},
	{
		id: "review-2",
		name: "K. V. S.",
		text: "Приятная атмосфера. Вкусный кофе.",
		rating: 5,
		imageAlt: "Чашка кофе",
		imageSrc: "/images/reviews/review2.png",
	},
	{
		id: "review-3",
		name: "Снежана Ольденбургская",
		text: "Красивое место, интересная лавочка. Приятный запах масел. Эстетичный образ первого зала. Жаль девочки грустные. Изумительный кофе, вкусно получилось! Красиво проданное нежное кофе с пенкой и корицей!",
		rating: 5,
		imageAlt: "Десерты и напитки",
		imageSrc: "/images/reviews/review3.png",
	},
	{
		id: "review-4",
		name: "Аня Майорова",
		text: "Место действительно волшебное. Атмосферная подача кофе Ведьмин котёл. В плане еды - никаких нареканий. Были проездом, за пару дней успели попробовать немного, но всё понравилось.",
		rating: 5,
		imageAlt: "Гости кофейни",
		imageSrc: "/images/reviews/review4.png",
	},
	{
		id: "review-5",
		name: "Анастасия 🌸",
		text: "Часто захожу в эту кофейню. Самый вкусный кофе, который я только пробывала, десерты замечательные, особенно меренговые рулеты! ❤️ Советую посетить это замечательное заведение!",
		rating: 5,
		imageAlt: "Полка с кофе",
		imageSrc: "/images/reviews/review5.png",
	},
	{
		id: "review-6",
		name: "Инга Кениг",
		text: "Люблю эту кофейню, полную волшебства. Прекрасные залы для аренды. Заниматься йогой или танцевать Каошики и танец Шивы, мастерить карту желаний или просто пить кофе в хорошей компании.",
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
		text: "Была очень удивлена. Безумно вкусный кофе. Теперь, наверное, это место мой фаворит. Всегда была уверена, что кофе умеют делать только в одном месте в городе. Но теперь знаю, что и тут отменный кофе. Что немаловажно, очень приятное обслуживание, милые и внимательные девушки. Большое спасибо.",
		rating: 5,
		imageAlt: "Стол с напитками",
		imageSrc: "/images/reviews/review9.png",
	},
]

const currentIndex = ref(0)

const total = computed(() => reviews.length)
const VISIBLE_LG = 5
const CARD_WIDTH = 400
const GAP_PX = 24
const STEP_PX = CARD_WIDTH + GAP_PX

const maxIndex = computed(() => Math.max(0, total.value - VISIBLE_LG))
const halfWindow = Math.floor(VISIBLE_LG / 2)

function goPrev() {
	currentIndex.value = currentIndex.value <= 0 ? maxIndex.value : currentIndex.value - 1
}

function goNext() {
	currentIndex.value = currentIndex.value >= maxIndex.value ? 0 : currentIndex.value + 1
}

function goTo(index: number) {
	const start = Math.min(Math.max(index - halfWindow, 0), maxIndex.value)
	currentIndex.value = start
}

const dots = computed(() => Array.from({ length: total.value }, (_, i) => i))
</script>

<template>
	<section id="reviews" class="overflow-x-clip bg-[#F5EFEA] py-16 md:py-20 lg:py-24">
		<UContainer>
			<header class="space-y-3 text-center">
				<h2
					class="font-(family-name:--font-amatic) text-4xl leading-tight font-bold text-[#2C2216] sm:text-5xl lg:text-6xl"
				>
					ОТЗЫВЫ ТЕХ, КТО ПОЧУВСТВОВАЛ СИЛУ ЗЕМЛИ В КАЖДОЙ ЧАШКЕ
				</h2>
			</header>
		</UContainer>

		<!-- Классическая карусель: несколько отзывов в ряд, трек на всю ширину -->
		<div class="relative mt-10 w-full overflow-hidden lg:mt-12">
			<div
				class="flex gap-6 px-7 transition-transform duration-500 ease-out"
				:style="{ transform: `translateX(-${currentIndex * STEP_PX}px)` }"
			>
				<article
					v-for="card in reviews"
					:key="card.id"
					class="review-card flex shrink-0 flex-col overflow-hidden bg-[#EFE5DA] shadow-md"
				>
					<div class="h-60 w-full bg-[#DFD3C1]">
						<NuxtImg
							:src="card.imageSrc"
							:alt="card.imageAlt"
							class="h-full w-full object-cover object-center"
							loading="lazy"
							decoding="async"
						/>
					</div>

					<div class="flex flex-1 flex-col justify-between px-6 pt-6 pb-6 text-[#4D3B2C]">
						<div class="space-y-3">
							<div class="flex items-center gap-1 text-lg text-[#DAA520]">
								<span v-for="star in card.rating" :key="star">★</span>
							</div>
							<h3 class="text-lg font-semibold tracking-[0.02em] uppercase md:text-xl">
								{{ card.name }}
							</h3>
							<p class="text-sm leading-relaxed sm:text-base md:text-lg">
								{{ card.text }}
							</p>
						</div>
					</div>
				</article>
			</div>
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
					@click="goPrev"
				>
				</UButton>

				<div class="flex items-center gap-3 sm:gap-4">
					<button
						v-for="index in dots"
						:key="index"
						class="h-3 w-3 rounded-full border border-[#B4B199] transition"
						:class="index === currentIndex ? 'border-[#6F7957] bg-[#6F7957]' : 'bg-transparent'"
						aria-label="Перейти к слайду"
						type="button"
						@click="goTo(index)"
					/>
				</div>

				<UButton
					color="secondary"
					class="rounded-full bg-[#6F7957] p-3 text-white transition hover:-translate-y-0.5 hover:bg-[#5F6A4B]"
					icon="material-symbols:arrow-forward-rounded"
					size="xl"
					variant="solid"
					@click="goNext"
				>
				</UButton>
			</div>
		</UContainer>
	</section>
</template>

<style scoped>
.review-card {
	width: 400px;
	min-width: 400px;
	height: 585px;
	border-radius: 50px;
	border-width: 1px;
	border-style: solid;
	border-color: #b4b199;
}
</style>
