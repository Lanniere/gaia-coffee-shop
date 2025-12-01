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
	<header>
		<section class="bg-[#F5EFEA] text-[#222222]">
			<UContainer class="flex flex-wrap items-center justify-between gap-4 py-[22px] text-2xl font-medium">
				<div class="flex items-center gap-[58px]">
					<span class="flex items-center gap-4">
						<UIcon name="i-custom-brief" class="w-5 h-5" />
						Ежедневно: 9:00 – 21:00
					</span>
					<span class="flex items-center gap-4">
						<UIcon name="i-custom-phone" class="w-5 h-5" />
						+7 (982) 512‑00‑11
					</span>
				</div>

				<Logo class="h-9 w-auto" />

				<div class="flex items-center gap-7">
					<p>Ищите нас в Whatsapp и Telegram!</p>
					<div class="flex items-center gap-1">
						<UButton variant="link" class="text-base" aria-label="Открыть Telegram">
							<UIcon name="i-custom-tg" class="w-6 h-6" />
						</UButton>
						<UButton variant="link" class="text-base" aria-label="Открыть Whatsapp">
							<UIcon name="i-custom-watsap" class="w-6 h-6" />						
						</UButton>
					</div>
				</div>
			</UContainer>
		</section>
	</header>

	<UHeader class="bg-[#222222] text-[#F5EFEA]">
		<template #left>
			<UNavigationMenu
				:items="navigationItems"
				class="text-2xl font-semibold"
				:ui="{ link: 'text-2xl' }"
			/>
		</template>

		<template #right>
			<UButton
				variant="ghost"
				color="primary"
				class="text-2xl underline decoration-2 underline-offset-4"
			>
				Забронировать зал
			</UButton>
		</template>
	</UHeader>
</template>
