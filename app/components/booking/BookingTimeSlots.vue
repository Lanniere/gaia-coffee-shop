<script setup lang="ts">
interface Props {
	startHour: number | null
	endHour: number | null
}

const props = defineProps<Props>()

const emit = defineEmits<{
	"update:startHour": [value: number | null]
	"update:endHour": [value: number | null]
}>()

const timeSlots = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

function selectTimeSlot(hour: number) {
	if (props.startHour === null) {
		emit("update:startHour", hour)
		emit("update:endHour", hour + 1)
	} else if (props.endHour === null) {
		emit("update:endHour", hour + 1)
	} else if (hour < props.startHour) {
		emit("update:startHour", hour)
	} else if (hour >= props.endHour) {
		emit("update:endHour", hour + 1)
	} else {
		// Клик внутри диапазона — сбросить и выбрать заново
		emit("update:startHour", hour)
		emit("update:endHour", hour + 1)
	}
}

function isTimeSelected(hour: number) {
	if (props.startHour === null || props.endHour === null) return false
	return hour >= props.startHour && hour < props.endHour
}

const timeRangeText = computed(() => {
	if (props.startHour === null || props.endHour === null) return ""
	return `Бронь с ${props.startHour}:00 до ${props.endHour}:00`
})
</script>

<template>
	<div>
		<p class="mb-3 text-lg text-[#9A9590]">Выберите время*</p>
		<div class="rounded-xl border border-[#E0DCD4] bg-[#F5EFEA] p-4">
			<div class="grid grid-cols-5 gap-2">
				<button
					v-for="hour in timeSlots"
					:key="hour"
					type="button"
					class="rounded-lg border px-3 py-2 text-sm transition"
					:class="{
						'border-[#677256] bg-[#677256] text-white': isTimeSelected(hour),
						'border-[#E0DCD4] text-[#2C2216] hover:border-[#677256]': !isTimeSelected(hour),
					}"
					@click="selectTimeSlot(hour)"
				>
					{{ hour }}:00
				</button>
			</div>
			<p v-if="timeRangeText" class="mt-4 text-center text-xs text-[#9A9590]">
				{{ timeRangeText }}
			</p>
		</div>
	</div>
</template>
