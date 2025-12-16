<script setup lang="ts">
interface Props {
	currentStep: number
}

defineProps<Props>()
</script>

<template>
	<div class="mb-10 flex items-center gap-2">
		<!-- Step 1 -->
		<div class="flex items-center gap-2">
			<div
				class="flex size-8 items-center justify-center rounded-full text-sm font-semibold"
				:class="currentStep >= 1 ? 'bg-[#677256] text-white' : 'bg-[#E0DCD4] text-[#9A9590]'"
			>
				<UIcon v-if="currentStep > 1" name="i-heroicons-check" class="size-4" />
				<span v-else>1</span>
			</div>
			<span
				class="text-sm text-[20px] font-medium"
				:class="currentStep >= 1 ? 'text-[#2C2216]' : 'text-[#9A9590]'"
			>
				Выбор зала
			</span>
		</div>

		<!-- Connector 1-2 -->
		<div class="mx-2 h-px w-12 bg-[#E0DCD4]" />

		<!-- Step 2 -->
		<div class="flex items-center gap-2">
			<div
				class="flex size-8 items-center justify-center rounded-full text-sm font-semibold"
				:class="currentStep >= 2 ? 'bg-[#677256] text-white' : 'bg-[#E0DCD4] text-[#9A9590]'"
			>
				<UIcon v-if="currentStep > 2" name="i-heroicons-check" class="size-4" />
				<span v-else>2</span>
			</div>
			<span
				class="text-sm text-[20px] font-medium"
				:class="currentStep >= 2 ? 'text-[#2C2216]' : 'text-[#9A9590]'"
			>
				Заполнение анкеты
			</span>
		</div>

		<!-- Connector 2-3 -->
		<div class="mx-2 h-px w-12 bg-[#E0DCD4]" />

		<!-- Step 3 -->
		<div class="flex items-center gap-2">
			<div
				class="flex size-8 items-center justify-center rounded-full text-sm font-semibold"
				:class="currentStep >= 3 ? 'bg-[#677256] text-white' : 'bg-[#E0DCD4] text-[#9A9590]'"
			>
				<UIcon v-if="currentStep >= 3" name="i-heroicons-check" class="size-4" />
				<span v-else>3</span>
			</div>
			<span
				class="text-sm text-[20px] font-medium"
				:class="currentStep >= 3 ? 'text-[#2C2216]' : 'text-[#9A9590]'"
			>
				Подтверждение брони
			</span>
		</div>
	</div>
</template>
