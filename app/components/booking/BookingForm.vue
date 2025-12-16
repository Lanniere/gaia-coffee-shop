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
	date: Date | null
	start_time: number | null
	end_time: number | null
	customer_name: string
	customer_email: string
	customer_phone: string
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
	date: null,
	start_time: null,
	end_time: null,
	customer_name: "",
	customer_email: "",
	customer_phone: "",
	comment: "",
	agreed: false,
})

watch(
	() => form,
	() => {
		console.log(form)
	},
	{ deep: true },
)
// Цена
const totalPrice = computed(() => {
	if (!props.hallInfo || !form.date || form.start_time === null || form.end_time === null) return 0
	const dayOfWeek = form.date.getDay()
	const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
	const hours = form.end_time - form.start_time
	const pricePerHour = isWeekend ? props.hallInfo.priceWeekend : props.hallInfo.priceWeekday
	return pricePerHour * hours
})

// Валидация формы
const isFormValid = computed(() => {
	return (
		form.date !== null &&
		form.start_time !== null &&
		form.end_time !== null &&
		form.customer_name.trim() !== "" &&
		form.customer_email.trim() !== "" &&
		form.customer_phone.trim() !== "" &&
		form.agreed
	)
})

function goBack() {
	// Сбросить форму
	form.date = null
	form.start_time = null
	form.end_time = null
	form.customer_name = ""
	form.customer_email = ""
	form.customer_phone = ""
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
		<div class="rounded-3xl bg-[#FBF6F2] p-6 shadow-md md:p-8">
			<!-- Hall title -->
			<h2 class="mb-6 text-3xl font-semibold text-[#2C2216] uppercase">
				{{ hallInfo?.title }}
			</h2>

			<!-- Date and Time selection -->
			<div class="mb-6 grid gap-4 lg:grid-cols-2">
				<BookingCalendar v-model="form.date" />
				<BookingTimeSlots
					:start-hour="form.start_time"
					:end-hour="form.end_time"
					@update:start-hour="form.start_time = $event"
					@update:end-hour="form.end_time = $event"
				/>
			</div>

			<!-- Form fields -->
			<div class="mb-6 grid gap-4 md:grid-cols-2">
				<div>
					<label class="mb-2 block text-lg text-[#9A9590]">Ваше ФИО*</label>
					<input
						v-model="form.customer_name"
						type="text"
						placeholder="Иванов Иван Иванович"
						class="w-full rounded-lg border border-[#E0DCD4] bg-[#F5EFEA] px-4 py-3 text-xl text-[#2C2216] placeholder-[#9A9590]/60 transition outline-none focus:border-[#677256]"
					/>
				</div>
				<div>
					<label class="mb-2 block text-lg text-[#9A9590]">Номер телефона*</label>
					<input
						v-model="form.customer_phone"
						type="tel"
						placeholder="+7 (999) 99-99-99"
						class="w-full rounded-lg border border-[#E0DCD4] bg-[#F5EFEA] px-4 py-3 text-xl text-[#2C2216] placeholder-[#9A9590]/60 transition outline-none focus:border-[#677256]"
					/>
				</div>
			</div>

			<div class="mb-6">
				<label class="mb-2 block text-lg text-[#9A9590]">Электронная почта*</label>
				<input
					v-model="form.customer_email"
					type="email"
					placeholder="example@mail.ru"
					class="w-full rounded-lg border border-[#E0DCD4] bg-[#F5EFEA] px-4 py-3 text-xl text-[#2C2216] placeholder-[#9A9590]/60 transition outline-none focus:border-[#677256]"
				/>
			</div>

			<div class="mb-6">
				<label class="mb-2 block text-lg text-[#9A9590]">Комментарий</label>
				<textarea
					v-model="form.comment"
					rows="3"
					placeholder="Напишите здесь свои пожелания"
					class="w-full resize-none rounded-lg border border-[#E0DCD4] bg-[#F5EFEA] px-4 py-3 text-xl text-[#2C2216] placeholder-[#9A9590]/60 transition outline-none focus:border-[#677256]"
				/>
			</div>
		</div>

		<!-- Price panel -->
		<BookingPricePanel :price="totalPrice" />

		<!-- Agreement checkbox -->
		<label class="mt-5 flex cursor-pointer items-center gap-2">
			<UCheckbox v-model="form.agreed" size="md" color="secondary" />
			<span class="text-lg text-[#222222]">
				Я согласен с
				<a href="#" class="underline"> политикой обработки персональных данных </a>
			</span>
		</label>

		<!-- Buttons -->
		<div class="mt-5 flex w-full justify-center gap-3">
			<UButton
				variant="outline"
				class="cursor-pointer px-10 text-2xl text-[#677256]"
				color="primary"
				size="xl"
				@click="goBack"
			>
				← Назад
			</UButton>
			<UButton
				class="cursor-pointer bg-[#677256] px-30 py-3 text-2xl text-[#F5EFEA]"
				:disabled="!isFormValid"
				size="xl"
				color="secondary"
				@click="submitForm"
			>
				Отправить
			</UButton>
		</div>
	</div>
</template>
