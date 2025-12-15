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

const halls: HallInfo[] = [
	{
		id: "small",
		title: "МАЛЫЙ ЗАЛ «ЛУННЫЙ КРУГ»",
		image: "/images/hall/smallHall.png",
		capacity: 6,
		priceWeekday: 700,
		priceWeekend: 800,
		description: "Идеально для трансформационных игр, психологов и девичников.",
	},
	{
		id: "big",
		title: "БОЛЬШОЙ ЗАЛ «ЗАЛ ЗВЁЗДНЫХ СОВЕТОВ»",
		image: "/images/hall/bigHall.png",
		capacity: 12,
		priceWeekday: 900,
		priceWeekend: 1000,
		description: "Идеально для бизнес-завтраков, мастермайндов, игр и мастер-классов.",
	},
]

const currentStep = ref(1)
const selectedHall = useState<string | null>("selectedHall", () => null)

const selectedHallInfo = computed(() => halls.find((h) => h.id === selectedHall.value))

function selectHall(hallId: string) {
	selectedHall.value = hallId
	currentStep.value = 2
}

function goBack() {
	currentStep.value = 1
}

function submitForm(formData: BookingFormData) {
	// TODO: отправка на сервер
	console.log("Booking submitted:", { hall: selectedHall.value, ...formData })
	currentStep.value = 3
}

function goHome() {
	navigateTo("/")
}
</script>

<template>
	<main class="min-h-screen bg-[#F5EFEA]">
		<UContainer class="py-12 md:py-16">
			<!-- Title -->
			<h1
				class="mb-8 font-(family-name:--font-amatic) text-4xl font-bold text-[#2C2216] md:text-5xl lg:text-6xl"
			>
				БРОНИРОВАНИЕ ЗАЛА
			</h1>

			<!-- Stepper -->
			<BookingStepper :current-step="currentStep" />

			<!-- Step 1: Hall selection -->
			<HallSelection v-if="currentStep === 1" :halls="halls" @select="selectHall" />

			<!-- Step 2: Booking Form -->
			<BookingForm
				v-else-if="currentStep === 2"
				:hall-info="selectedHallInfo"
				@back="goBack"
				@submit="submitForm"
			/>

			<!-- Step 3: Confirmation -->
			<BookingConfirmation v-else-if="currentStep === 3" @home="goHome" />
		</UContainer>

		<!-- Pre-footer -->
		<PreFooter :show-image="false" />
	</main>
</template>
