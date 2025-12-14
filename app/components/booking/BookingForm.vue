<script setup lang="ts">
interface HallInfo {
	id: string
	title: string
	image: string
	capacity: number
	priceWeekday: number
	priceWeekend: number
	description: string
}

interface BookingFormData {
	selectedDate: Date | null
	selectedTimeStart: number | null
	selectedTimeEnd: number | null
	fullName: string
	email: string
	phone: string
	comment: string
	agreed: boolean
}

interface Props {
	hallInfo: HallInfo | undefined
}

const props = defineProps<Props>()

const emit = defineEmits<{
	back: []
	submit: [formData: BookingFormData]
}>()

const form = reactive<BookingFormData>({
	selectedDate: null,
	selectedTimeStart: null,
	selectedTimeEnd: null,
	fullName: "",
	email: "",
	phone: "",
	comment: "",
	agreed: false,
})

// Цена
const totalPrice = computed(() => {
	if (
		!props.hallInfo ||
		!form.selectedDate ||
		form.selectedTimeStart === null ||
		form.selectedTimeEnd === null
	)
		return 0
	const dayOfWeek = form.selectedDate.getDay()
	const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
	const hours = form.selectedTimeEnd - form.selectedTimeStart
	const pricePerHour = isWeekend ? props.hallInfo.priceWeekend : props.hallInfo.priceWeekday
	return pricePerHour * hours
})

// Валидация формы
const isFormValid = computed(() => {
	return (
		form.selectedDate !== null &&
		form.selectedTimeStart !== null &&
		form.selectedTimeEnd !== null &&
		form.fullName.trim() !== "" &&
		form.email.trim() !== "" &&
		form.phone.trim() !== "" &&
		form.agreed
	)
})

function goBack() {
	// Сбросить форму
	form.selectedDate = null
	form.selectedTimeStart = null
	form.selectedTimeEnd = null
	form.fullName = ""
	form.email = ""
	form.phone = ""
	form.comment = ""
	form.agreed = false
	emit("back")
}

function submitForm() {
	if (!isFormValid.value) return
	emit("submit", { ...form })
}
</script>

<template>
	<div>
		<!-- Form card -->
		<div class="rounded-3xl bg-[#FBF6F2] p-6 shadow-lg md:p-8">
			<!-- Hall title -->
			<h2 class="mb-6 text-lg font-semibold text-[#2C2216] uppercase">
				{{ hallInfo?.title }}
			</h2>

			<!-- Date and Time selection -->
			<div class="mb-6 grid gap-6 lg:grid-cols-2">
				<BookingCalendar v-model="form.selectedDate" />
				<BookingTimeSlots
					:start-hour="form.selectedTimeStart"
					:end-hour="form.selectedTimeEnd"
					@update:start-hour="form.selectedTimeStart = $event"
					@update:end-hour="form.selectedTimeEnd = $event"
				/>
			</div>

			<!-- Form fields -->
			<div class="mb-6 grid gap-4 md:grid-cols-2">
				<div>
					<label class="mb-2 block text-sm text-[#9A9590]">Ваше ФИО*</label>
					<input
						v-model="form.fullName"
						type="text"
						placeholder="Иванов Иван Иванович"
						class="w-full rounded-lg border border-[#E0DCD4] bg-[#F5EFEA] px-4 py-3 text-sm text-[#2C2216] placeholder-[#9A9590]/60 transition outline-none focus:border-[#677256]"
					/>
				</div>
				<div>
					<label class="mb-2 block text-sm text-[#9A9590]">Номер телефона*</label>
					<input
						v-model="form.phone"
						type="tel"
						placeholder="+7 (999) 99-99-99"
						class="w-full rounded-lg border border-[#E0DCD4] bg-[#F5EFEA] px-4 py-3 text-sm text-[#2C2216] placeholder-[#9A9590]/60 transition outline-none focus:border-[#677256]"
					/>
				</div>
			</div>

			<div class="mb-6">
				<label class="mb-2 block text-sm text-[#9A9590]">Электронная почта*</label>
				<input
					v-model="form.email"
					type="email"
					placeholder="example@mail.ru"
					class="w-full rounded-lg border border-[#E0DCD4] bg-[#F5EFEA] px-4 py-3 text-sm text-[#2C2216] placeholder-[#9A9590]/60 transition outline-none focus:border-[#677256]"
				/>
			</div>

			<div class="mb-6">
				<label class="mb-2 block text-sm text-[#9A9590]">Комментарий</label>
				<textarea
					v-model="form.comment"
					rows="3"
					placeholder="Напишите здесь свои пожелания"
					class="w-full resize-none rounded-lg border border-[#E0DCD4] bg-[#F5EFEA] px-4 py-3 text-sm text-[#2C2216] placeholder-[#9A9590]/60 transition outline-none focus:border-[#677256]"
				/>
			</div>
		</div>

		<!-- Price panel -->
		<BookingPricePanel :price="totalPrice" />

		<!-- Agreement checkbox -->
		<label class="mt-5 flex cursor-pointer items-center gap-2">
			<input v-model="form.agreed" type="checkbox" class="size-4 accent-[#F5EFEA]" />
			<span class="text-sm text-[#222222]">
				Я согласен с
				<a href="#" class="underline"> политикой обработки персональных данных </a>
			</span>
		</label>

		<!-- Buttons -->
		<div class="mt-5 flex gap-3">
			<UButton variant="outline" class="border-[#677256] text-[#677256]" @click="goBack">
				← Назад
			</UButton>
			<UButton
				class="bg-[#677256] text-[#F5EFEA] hover:bg-white"
				:disabled="!isFormValid"
				@click="submitForm"
			>
				Отправить
			</UButton>
		</div>
	</div>
</template>
