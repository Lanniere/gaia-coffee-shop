<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui"

const route = useRoute()

const navigationItems = computed<NavigationMenuItem[]>(() => [
	{ label: "О нас", to: "#about", active: route.path.startsWith("#about") },
	{ label: "Меню", to: "#menu", active: route.path.startsWith("#menu") },
	{ label: "О кофейне", to: "#about-coffee", active: route.path.startsWith("#about-coffee") },
	{ label: "Отзывы", to: "#reviews", active: route.path.startsWith("#reviews") },
	{ label: "Контакты", to: "#contacts", active: route.path.startsWith("#contacts") },
])
</script>

<template>
	<header class="sticky top-0 z-50">
		<section class="bg-[#F5EFEA] text-[#222222]">
			<UContainer
				class="flex flex-wrap items-center justify-between gap-4 py-[22px] text-2xl font-medium"
			>
				<div class="flex items-center gap-[58px]">
					<span class="flex items-center gap-4 px-2.5">
						<UIcon name="i-custom-brief" class="h-5 w-5" />
						Ежедневно: 9:00 – 21:00
					</span>
					<span class="flex items-center gap-4 px-2.5">
						<UIcon name="i-custom-phone" class="h-5 w-5" />
						+7 (982) 512‑00‑11
					</span>
				</div>

				<Logo class="h-9 w-auto" />

				<div class="flex items-center gap-7">
					<p>Ищите нас в Whatsapp и Telegram!</p>
					<div class="flex items-center">
						<UButton variant="link" class="text-base" aria-label="Открыть Telegram">
							<UIcon name="i-custom-tg" class="h-6 w-6" />
						</UButton>
						<UButton variant="link" class="text-base" aria-label="Открыть Whatsapp">
							<UIcon name="i-custom-watsap" class="h-6 w-6" />
						</UButton>
					</div>
				</div>
			</UContainer>
		</section>
	</header>

	<UHeader class="top-20 bg-[#222222]" :ui="{ root: 'border-none', left: 'hidden' }">
		<!-- <template #left>
			<UNavigationMenu
				:items="navigationItems"
				class="text-2xl"
				:ui="{ link: 'text-2xl text-[#F5EFEA] p-0 font-normal', list: 'gap-[108px]' }"
			/>
		</template> -->

		<template #right>
			<UButton
				variant="ghost"
				color="primary"
				class="text-2xl text-[#F5EFEA] underline decoration-2 underline-offset-4"
			>
				Забронировать зал
			</UButton>
		</template>
		<template #default>
			<UNavigationMenu
				:items="navigationItems"
				:ui="{ link: 'text-2xl text-[#F5EFEA] font-normal', list: 'gap-[108px]' }"
			/>
		</template>
	</UHeader>
</template>
