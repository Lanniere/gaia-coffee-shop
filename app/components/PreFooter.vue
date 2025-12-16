<script setup lang="ts">
withDefaults(
	defineProps<{
		showImage?: boolean
	}>(),
	{
		showImage: true,
	},
)

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
	{ icon: "custom:tg", href: "https://t.me/+79825120011", label: "Telegram" },
	{ icon: "custom:watsap", href: "https://wa.me/79825120011", label: "WhatsApp" },
]
</script>

<template>
	<div class="relative bg-[#677256] py-8 text-[#F5EFEA]" :class="{ 'pt-8 md:pt-12': !showImage }">
		<UContainer class="flex w-full flex-row justify-between">
			<div v-if="showImage" class="min-w-[500px]">
				<NuxtImg
					src="/images/coffee.png"
					alt="Кофе и листья"
					class="absolute -top-[60%] object-contain drop-shadow-2xl"
					loading="lazy"
					width="474px"
					height="406px"
				/>
			</div>
			<div class="flex w-full flex-col items-center justify-between gap-8 md:flex-col">
				<div class="flex w-full flex-row justify-between">
					<logo />
					<div class="flex flex-row gap-15">
						<div class="flex items-center justify-center gap-2 text-base md:justify-start">
							<UIcon name="i-custom-brief" class="icon-white h-5 w-5" />
							<span>{{ contactInfo.schedule }}</span>
						</div>
						<a
							:href="`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`"
							class="flex items-center justify-center gap-2 text-base transition hover:text-[#f1b17a] md:justify-start"
						>
							<UIcon name="i-custom-phone" class="icon-white h-5 w-5" />
							<span>{{ contactInfo.phone }}</span>
						</a>
					</div>
				</div>

				<USeparator />

				<div class="flex w-full flex-row justify-between">
					<div class="mt-2 space-y-1 text-sm">
						<p>{{ contactInfo.legalName }}</p>
						<p>{{ contactInfo.inn }}</p>
						<p class="max-w-md">{{ contactInfo.ogrnip }}</p>
					</div>

					<div class="flex flex-row gap-4">
						<div class="flex flex-col gap-2 text-left text-sm">
							<a href="#" class="transition hover:text-[#f1b17a]">Договор-оферта</a>
							<a href="#" class="transition hover:text-[#f1b17a]">Политика конфиденциальности</a>
							<div class="flex gap-3 self-end-safe">
								<a
									v-for="link in socialLinks"
									:key="link.label"
									:href="link.href"
									target="_blank"
									rel="noopener noreferrer"
									:aria-label="link.label"
									class="flex items-center justify-center rounded-full text-[#677256] transition hover:bg-[#f1b17a]"
								>
									<UIcon :name="link.icon" size="25" class="icon-white" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</UContainer>
	</div>
</template>

<style scoped>
.icon-white {
	filter: brightness(0) saturate(100%) invert(1);
}
</style>
