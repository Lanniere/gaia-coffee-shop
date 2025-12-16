<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui"

const navigationItems: NavigationMenuItem[] = [
	{ label: "О нас", to: "/#about", active: false },
	{ label: "Меню", to: "/#menu", active: false },
	{ label: "О кофейне", to: "/#about-coffee", active: false },
	{ label: "Отзывы", to: "/#reviews", active: false },
	{ label: "Контакты", to: "/#contacts", active: false },
]
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

				<Logo class="h-9 w-auto" dark />

				<div class="flex items-center gap-7">
					<p>Ищите нас в Whatsapp и Telegram!</p>
					<div class="flex items-center">
						<UButton
							variant="link"
							to="https://t.me/+79825120011"
							class="text-base"
							target="_blank"
							aria-label="Открыть Telegram"
						>
							<UIcon name="i-custom-tg" class="h-6 w-6" />
						</UButton>
						<UButton
							variant="link"
							to="https://wa.me/79825120011"
							class="text-base"
							target="_blank"
							aria-label="Открыть Whatsapp"
						>
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
		<template #default>
			<UNavigationMenu
				:items="navigationItems"
				:ui="{
					link: 'text-2xl text-[#F5EFEA] hover:text-white font-normal px-4 py-2 rounded-full transition-colors hover:before:bg-[rgba(241,177,122,0.4)]',
					list: 'gap-[108px]',
				}"
			/>
		</template>
		<template #right>
			<UButton
				variant="ghost"
				class="cursor-pointer text-2xl text-[#F5EFEA] underline decoration-2 underline-offset-4 hover:text-[#f1b17a]"
				to="booking"
			>
				Забронировать зал
			</UButton>
		</template>
	</UHeader>
</template>
