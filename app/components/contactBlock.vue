<script setup lang="ts">
import coffeePng from "~/assets/images/coffee.png"

interface ContactInfo {
	schedule: string
	phone: string
	legalName: string
	inn: string
	ogrnip: string
}

const contactInfo: ContactInfo = {
	schedule: "Ежедневно 9:00 - 21:00",
	phone: "+7 (982) 52-00-11",
	legalName: "ИП Омлоб",
	inn: "ИНН 124051",
	ogrnip:
		"ОГРНИП (цифры) в Межрайонной инспекции Федеральной налоговой службы № 17 по Пермскому краю г. Пермь",
}

const socialLinks = [
	{ icon: "custom:tg", href: "https://t.me/gaia_coffee", label: "Telegram" },
	{ icon: "custom:watsap", href: "https://wa.me/79825200011", label: "WhatsApp" },
]
</script>

<template>
	<section class="contact-block">
		<!-- Header with title -->
		<div class="bg-[#677256] py-6 text-center">
			<h2
				class="font-(family-name:--font-amatic) text-3xl font-bold text-[#F5EFEA] sm:text-4xl md:text-5xl lg:text-6xl"
			>
				СЛЕДУЙ ЗА ЗОВОМ БОГИНИ – МЫ ЖДЁМ ТЕБЯ ЗДЕСЬ
			</h2>
		</div>

		<!-- Map section -->
		<div class="relative">
			<iframe
				src="https://yandex.ru/map-widget/v1/org/gaia_volshebnaya_kofeynya/152941702538/?ll=73.452627%2C61.250283&z=17"
				allowfullscreen="true"
				class="h-[400px] w-full md:h-[500px]"
			></iframe>
		</div>

		<!-- Footer with coffee image -->
		<div class="relative bg-[#677256] pt-16 pb-8 text-[#F5EFEA] md:pt-20 md:pb-12">
			<UContainer>
				<div class="flex flex-col items-center gap-8 md:flex-row md:items-end md:justify-between">
					<!-- Coffee image - positioned to overlap map -->
					<div
						class="absolute -top-24 left-8 z-10 w-[200px] md:-top-32 md:left-12 md:w-[280px] lg:w-[320px]"
					>
						<img
							:src="coffeePng"
							alt="Кофе и листья"
							class="h-auto w-full object-contain drop-shadow-2xl"
							loading="lazy"
							decoding="async"
						/>
					</div>

					<!-- Center content - Contact info -->
					<div
						class="flex flex-col gap-3 text-center md:mr-auto md:ml-auto md:text-left lg:mr-0 lg:ml-[340px]"
					>
						<h3 class="font-(family-name:--font-amatic) text-5xl leading-none font-bold">GAIA</h3>
						<div class="flex items-center justify-center gap-2 text-base md:justify-start">
							<UIcon name="i-heroicons-clock" class="size-5" />
							<span>{{ contactInfo.schedule }}</span>
						</div>
						<a
							:href="`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`"
							class="flex items-center justify-center gap-2 text-base transition hover:text-[#f1b17a] md:justify-start"
						>
							<UIcon name="i-heroicons-phone" class="size-5" />
							<span>{{ contactInfo.phone }}</span>
						</a>
						<div class="mt-2 space-y-1 text-sm opacity-90">
							<p>{{ contactInfo.legalName }}</p>
							<p>{{ contactInfo.inn }}</p>
							<p class="max-w-md">{{ contactInfo.ogrnip }}</p>
						</div>
					</div>

					<!-- Right - Links and socials -->
					<div class="flex flex-col items-center gap-4 md:items-end">
						<div class="flex flex-col gap-2 text-center text-sm md:text-right">
							<a href="#" class="transition hover:text-[#f1b17a]">Договор-оферта</a>
							<a href="#" class="transition hover:text-[#f1b17a]">Политика конфиденциальности</a>
						</div>
						<div class="flex gap-3">
							<a
								v-for="link in socialLinks"
								:key="link.label"
								:href="link.href"
								target="_blank"
								rel="noopener noreferrer"
								:aria-label="link.label"
								class="flex size-10 items-center justify-center rounded-full bg-[#F5EFEA] text-[#677256] transition hover:scale-110 hover:bg-[#f1b17a]"
							>
								<UIcon :name="link.icon" class="size-5" />
							</a>
						</div>
					</div>
				</div>
			</UContainer>
		</div>
	</section>
</template>
