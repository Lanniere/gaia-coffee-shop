<script setup lang="ts">
interface HallCard {
	id: string
	title: string
	lead: string
	paragraphs: string[]
	image: string
	reverse?: boolean
}

const hallCards: HallCard[] = [
	{
		id: "small-hall",
		title: "МАЛЫЙ ЗАЛ «ЛУННЫЙ КРУГ»",
		lead: "Это пространство идеально подходит для камерных мероприятий на шестерых: от дружеских чаепитий и душевных разговоров до медитативных практик, творческих мастер-классов и магических ритуалов.",
		paragraphs: [
			"Здесь можно провести вечер гаданий при свечах, обсудить тайны Вселенной за чашкой ароматного чая или просто насладиться неспешным временем в компании единомышленников.",
		],
		image: "/images/hall/smallHall.png",
	},
	{
		id: "big-hall",
		title: "БОЛЬШОЙ ЗАЛ «ЗАЛ ЗВЁЗДНЫХ СОВЕТОВ»",
		lead: "Пространство для важных встреч, где каждая деталь — от хрустальной  люстры до мягких кресел — создаёт атмосферу сосредоточенности и  вдохновения.",
		paragraphs: [
			"Здесь легко говорить, слушать и создавать — будто под  покровительством тихой магии. Идеально для бизнес-встреч, презентаций и  мастер-классов, где ценится не только содержание, но и настроение.",
		],
		image: "/images/hall/bigHall.png",
		reverse: true,
	},
]
</script>

<template>
	<section class="py-16 md:py-20 lg:py-24">
		<UContainer class="space-y-12">
			<div class="space-y-3 text-left">
				<h2
					class="font-(family-name:--font-amatic) text-4xl leading-tight font-bold text-[#2C2216] sm:text-5xl lg:text-6xl"
				>
					АРЕНДА ЗАЛОВ В GAIA
				</h2>
				<p class="text-base text-[#433320] sm:text-lg lg:text-xl">
					Идеальное место для мистических встреч, лекций и тематических вечеров
				</p>
			</div>

			<div class="space-y-8 lg:space-y-10">
				<article
					v-for="card in hallCards"
					:key="card.id"
					class="group flex flex-col gap-6 rounded-[32px] bg-[#ECE8D9] p-6 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition md:flex-row md:items-center md:gap-10 md:p-8 lg:gap-12"
					:class="card.reverse ? 'md:flex-row-reverse' : 'md:flex-row'"
				>
					<div class="flex flex-col space-y-5 text-[#677256] md:w-1/2">
						<h3 class="text-3xl leading-tight sm:text-4xl lg:text-[34px]">
							{{ card.title }}
						</h3>
						<p class="text-base leading-relaxed sm:text-lg lg:text-xl">
							{{ card.lead }}
						</p>
						<div class="space-y-4 text-base leading-relaxed sm:text-lg lg:text-xl">
							<p v-for="(paragraph, idx) in card.paragraphs" :key="idx">
								{{ paragraph }}
							</p>
						</div>
						<UButton
							to="/booking"
							class="mt-4 w-full justify-center rounded-full bg-[#677256] px-8 py-4 text-[24px] font-semibold text-[#ECE8D9] shadow-[0_6px_18px_rgba(75,58,40,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(75,58,40,0.4)] sm:w-auto sm:justify-start sm:self-start"
							:class="card.reverse ? 'md:ml-auto md:self-end lg:ml-auto lg:self-end' : ''"
							size="lg"
							color="secondary"
						>
							Забронировать зал
						</UButton>
					</div>

					<div
						class="relative overflow-hidden rounded-[30px] bg-[#DFD3C1] shadow-[0_10px_26px_rgba(0,0,0,0.12)] md:w-1/2"
					>
						<NuxtImg
							:src="card.image"
							:alt="card.title"
							loading="lazy"
							class="h-full w-full rounded-[30px] object-cover"
							sizes="sm:100vw md:50vw lg:600px"
						/>
					</div>
				</article>
			</div>
		</UContainer>
	</section>
</template>
