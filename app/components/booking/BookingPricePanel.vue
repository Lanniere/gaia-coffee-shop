<script setup lang="ts">
interface Props {
	price: number
}

defineProps<Props>()
</script>

<template>
	<div
		class="relative mt-6 overflow-hidden rounded-3xl bg-linear-to-r from-[#677256] to-white px-6 py-6 shadow-md md:px-8"
	>
		<div class="flex flex-col gap-4">
			<!-- Price -->
			<div>
				<p class="text-lg text-[#F5EFEA]/80">Итоговая цена:</p>
				<p class="text-2xl font-bold text-[#F5EFEA]">{{ price }} рублей</p>
			</div>
		</div>

		<!-- Decorative leaves -->
		<NuxtImg
			src="/images/branch2.png"
			alt=""
			class="pointer-events-none absolute top-2 right-0 w-32"
			aria-hidden="true"
			loading="lazy"
			sizes="176px"
		/>
	</div>
</template>
