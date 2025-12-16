<script setup lang="ts">
interface Props {
	modelValue: Date | null
}

const props = defineProps<Props>()

const emit = defineEmits<{
	"update:modelValue": [value: Date | null]
}>()

const currentMonth = ref(new Date())
const weekDays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]
const monthNames = [
	"Январь",
	"Февраль",
	"Март",
	"Апрель",
	"Май",
	"Июнь",
	"Июль",
	"Август",
	"Сентябрь",
	"Октябрь",
	"Ноябрь",
	"Декабрь",
]

const calendarDays = computed(() => {
	const year = currentMonth.value.getFullYear()
	const month = currentMonth.value.getMonth()
	const firstDay = new Date(year, month, 1)
	const lastDay = new Date(year, month + 1, 0)
	const days: Array<{ date: number; currentMonth: boolean; fullDate: Date }> = []

	// Дни предыдущего месяца
	let startDay = firstDay.getDay() - 1
	if (startDay < 0) startDay = 6
	const prevMonthLastDay = new Date(year, month, 0).getDate()
	for (let i = startDay - 1; i >= 0; i--) {
		days.push({
			date: prevMonthLastDay - i,
			currentMonth: false,
			fullDate: new Date(year, month - 1, prevMonthLastDay - i),
		})
	}

	// Дни текущего месяца
	for (let i = 1; i <= lastDay.getDate(); i++) {
		days.push({
			date: i,
			currentMonth: true,
			fullDate: new Date(year, month, i),
		})
	}

	// Дни следующего месяца
	const remaining = 42 - days.length
	for (let i = 1; i <= remaining; i++) {
		days.push({
			date: i,
			currentMonth: false,
			fullDate: new Date(year, month + 1, i),
		})
	}

	return days
})

function prevMonth() {
	currentMonth.value = new Date(
		currentMonth.value.getFullYear(),
		currentMonth.value.getMonth() - 1,
		1,
	)
}

function nextMonth() {
	currentMonth.value = new Date(
		currentMonth.value.getFullYear(),
		currentMonth.value.getMonth() + 1,
		1,
	)
}

function selectDate(day: { date: number; currentMonth: boolean; fullDate: Date }) {
	if (!day.currentMonth) return
	const today = new Date()
	today.setHours(0, 0, 0, 0)
	if (day.fullDate < today) return
	emit("update:modelValue", day.fullDate)
}

function isSelectedDate(day: { fullDate: Date }) {
	if (!props.modelValue) return false
	return day.fullDate.toDateString() === props.modelValue.toDateString()
}

function isToday(day: { fullDate: Date }) {
	return day.fullDate.toDateString() === new Date().toDateString()
}

function isPastDate(day: { fullDate: Date }) {
	const today = new Date()
	today.setHours(0, 0, 0, 0)
	return day.fullDate < today
}
onMounted(() => {
	if (!props.modelValue) {
		const today = new Date()
		today.setHours(0, 0, 0, 0)
		emit("update:modelValue", today)
	}
})
</script>

<template>
	<div>
		<p class="mb-3 text-lg text-[#9A9590]">Выберите дату*</p>
		<div class="rounded-xl border border-[#E0DCD4] bg-[#F5EFEA] p-4">
			<!-- Month navigation -->
			<div class="mb-4 flex items-center justify-between">
				<button
					type="button"
					class="flex size-8 items-center justify-center rounded-full text-[#9A9590] transition hover:bg-[#E0DCD4]"
					@click="prevMonth"
				>
					<UIcon name="i-heroicons-chevron-left" class="size-5" />
				</button>
				<span class="text-sm font-medium text-[#2C2216]">
					{{ monthNames[currentMonth.getMonth()] }}
				</span>
				<button
					type="button"
					class="flex size-8 items-center justify-center rounded-full text-[#9A9590] transition hover:bg-[#E0DCD4]"
					@click="nextMonth"
				>
					<UIcon name="i-heroicons-chevron-right" class="size-5" />
				</button>
			</div>

			<!-- Weekday headers -->
			<div class="mb-2 grid grid-cols-7 gap-1">
				<div
					v-for="day in weekDays"
					:key="day"
					class="text-center text-xs text-[#9A9590]"
					:class="{ 'text-[#677256]': day === 'СБ' || day === 'ВС' }"
				>
					{{ day }}
				</div>
			</div>

			<!-- Calendar days -->
			<div class="grid grid-cols-7 gap-1">
				<button
					v-for="(day, index) in calendarDays"
					:key="index"
					type="button"
					class="flex size-8 items-center-safe justify-center-safe justify-self-center rounded-full text-sm transition"
					:class="{
						'text-[#9A9590]/50': !day.currentMonth,
						'text-[#2C2216]': day.currentMonth && !isSelectedDate(day) && !isPastDate(day),
						'bg-[#677256] text-white': isSelectedDate(day),
						'ring-1 ring-[#677256]': isToday(day) && !isSelectedDate(day),
						'cursor-not-allowed opacity-40': isPastDate(day),
						'hover:bg-[#E0DCD4]': day.currentMonth && !isSelectedDate(day) && !isPastDate(day),
					}"
					:disabled="isPastDate(day) || !day.currentMonth"
					@click="selectDate(day)"
				>
					{{ day.date }}
				</button>
			</div>
		</div>
	</div>
</template>
