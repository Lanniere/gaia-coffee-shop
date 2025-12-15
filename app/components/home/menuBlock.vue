<script setup lang="ts">
const currentSlide = ref(0)
const totalSlides = 6

const menuPages = [
	"/images/menu/page1.png",
	"/images/menu/page2.png",
	"/images/menu/page3.png",
	"/images/menu/page4.png",
	"/images/menu/page5.png",
	"/images/menu/page6.png",
]

function nextSlide() {
	currentSlide.value = (currentSlide.value + 1) % totalSlides
}

function prevSlide() {
	currentSlide.value = currentSlide.value === 0 ? totalSlides - 1 : currentSlide.value - 1
}

function downloadMenu() {
	const link = document.createElement("a")
	link.href = "/menu.pdf"
	link.download = "gaia-menu.pdf"
	link.click()
}
</script>

<template>
	<section id="menu" class="menu-section relative bg-[#F5EFEA] py-16 md:py-20 lg:py-24">
		<!-- Заголовок -->
		<h2
			class="text-center font-(family-name:--font-amatic) text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl"
		>
			ПОГРУЗИТЕСЬ В МЕНЮ, ПОЛНОЕ ДАРОВ БОГИНИ
		</h2>

		<!-- Декоративная композиция веточек позади меню -->
		<div class="pointer-events-none absolute inset-x-0 flex justify-center">
			<NuxtImg
				src="/images/menuCompositionBranches.png"
				alt=""
				class="select-none"
				loading="lazy"
				sizes="sm:100vw lg:1200px"
			/>
		</div>

		<UContainer>
			<div class="relative z-10">
				<!-- Карусель -->
				<div class="relative top-20 mx-auto max-w-4xl">
					<!-- Контейнер слайдов -->
					<div class="relative overflow-hidden rounded-lg">
						<div
							class="flex transition-transform duration-500 ease-in-out"
							:style="{ transform: `translateX(-${currentSlide * 100}%)` }"
						>
							<div v-for="(page, index) in menuPages" :key="index" class="relative w-full shrink-0">
								<NuxtImg
									:src="page"
									:alt="`Страница меню ${index + 1}`"
									class="h-auto w-full"
									sizes="sm:100vw md:768px lg:896px"
									:loading="index === 0 ? 'eager' : 'lazy'"
								/>
							</div>
						</div>
						<!-- Декоративный листочек -->
						<div class="absolute right-0 bottom-0">
							<NuxtImg src="/images/menuLeaf.png" alt="" loading="lazy" sizes="100px" />
						</div>
					</div>

					<!-- Индикаторы страниц -->
					<div class="mt-6 flex justify-center gap-2">
						<button
							v-for="index in totalSlides"
							:key="index"
							type="button"
							class="h-2 w-2 rounded-full transition-all"
							:class="
								currentSlide === index - 1
									? 'w-8 bg-[#7A8A68]'
									: 'bg-[#7A8A68] opacity-30 hover:opacity-50'
							"
							:aria-label="`Перейти к странице ${index}`"
							@click="currentSlide = index - 1"
						></button>
					</div>

					<!-- Навигация -->
					<div class="mt-8 flex items-center justify-start gap-4 md:mt-6 md:gap-6">
						<!-- Кнопка Скачать меню -->
						<UButton
							color="secondary"
							size="lg"
							class="rounded-full bg-[#7A8A68] px-6 py-3 text-lg font-medium text-white hover:bg-[#6A7A58] md:px-8 md:py-4 md:text-xl"
							@click="downloadMenu"
						>
							Скачать Меню
						</UButton>

						<!-- Группа стрелок -->
						<div class="flex gap-3">
							<!-- Кнопка Previous -->
							<button
								type="button"
								class="flex h-12 w-12 items-center justify-center rounded-full bg-[#7A8A68] text-white transition-all hover:bg-[#6A7A58] focus:ring-2 focus:ring-[#7A8A68] focus:ring-offset-2 focus:outline-none md:h-14 md:w-14"
								aria-label="Предыдущая страница"
								@click="prevSlide"
							>
								<UIcon name="i-heroicons-chevron-left" class="h-6 w-6" />
							</button>

							<!-- Кнопка Next -->
							<button
								type="button"
								class="flex h-12 w-12 items-center justify-center rounded-full bg-[#7A8A68] text-white transition-all hover:bg-[#6A7A58] focus:ring-2 focus:ring-[#7A8A68] focus:ring-offset-2 focus:outline-none md:h-14 md:w-14"
								aria-label="Следующая страница"
								@click="nextSlide"
							>
								<UIcon name="i-heroicons-chevron-right" class="h-6 w-6" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</UContainer>
	</section>
</template>

<style scoped>
.menu-section {
	color: var(--ui-gray);
}
</style>
