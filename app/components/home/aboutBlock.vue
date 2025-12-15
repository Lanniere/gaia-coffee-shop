<script setup lang="ts"></script>

<template>
	<section class="about-section bg-[#F5EFEA] py-16 md:py-20 lg:py-24">
		<UContainer>
			<div class="grid grid-cols-1 items-start gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
				<div class="text-content">
					<div class="mb-8 flex items-start gap-4 md:mb-12 lg:mb-16">
						<h2
							class="font-(family-name:--font-amatic) text-4xl leading-tight font-bold sm:text-5xl lg:text-[64px]"
						>
							КОФЕЙНЯ, ВДОХНОВЛЕННАЯ<br />ДРЕВНЕЙ БОГИНЕЙ ЗЕМЛИ
						</h2>
						<NuxtImg
							src="/images/branch.svg"
							alt=""
							class="h-10 w-auto self-center sm:h-12 lg:h-14"
						/>
					</div>

					<div class="space-y-6 text-base leading-relaxed sm:text-lg lg:text-2xl">
						<p>
							GAIA — это место, где магия природы сочетается с уютом. Вдохновленные древнегреческой
							богиней Гайей, мы создали пространство тепла, гармонии и таинства.
						</p>
						<p>
							Как Гайя питала жизнь, так и мы наполняем день ароматным кофе, уютом и волшебством
							годзний. Добро пожаловать в GAIA – кофейню, где каждая чашка напитка становится
							маленьким ритуалом!
						</p>
					</div>
				</div>

				<div class="image-content relative flex justify-center lg:justify-end">
					<NuxtImg
						src="/images/aboutComposition.png"
						alt="Древнегреческая богиня Гайя - вдохновение кофейни GAIA"
						class="h-auto w-full max-w-[450px] sm:max-w-[550px] lg:max-w-[750px]"
						loading="lazy"
						sizes="sm:100vw md:550px lg:750px"
					/>
				</div>
			</div>
		</UContainer>
	</section>
</template>

<style scoped>
.about-section {
	color: var(--ui-gray);
}
</style>
