<script setup lang="ts">
import leavesImg from "~/assets/images/branch2.png"

interface Props {
	price: number
}

defineProps<Props>()
</script>

<template>
	<div
		class="relative mt-6 overflow-hidden rounded-3xl bg-gradient-to-r from-[#677256] to-white px-6 py-6 md:px-8"
	>
		<div class="flex flex-col gap-4">
			<!-- Price -->
			<div>
				<p class="text-sm text-[#F5EFEA]/80">Итоговая цена:</p>
				<p class="text-2xl font-bold text-[#F5EFEA]">{{ price }} рублей</p>
			</div>
		</div>

		<!-- Decorative leaves -->
		<img
			:src="leavesImg"
			alt=""
			class="pointer-events-none absolute -right-4 -bottom-4 w-32 md:-right-8 md:-bottom-8 md:w-44"
			aria-hidden="true"
		/>
	</div>
</template>
