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

interface Props {
	halls: HallInfo[]
}

defineProps<Props>()

const emit = defineEmits<{
	select: [hallId: string]
}>()

function selectHall(hallId: string) {
	emit("select", hallId)
}
</script>

<template>
	<div class="rounded-3xl bg-[#FBF6F2] p-6 shadow-lg md:p-8">
		<!-- Hall cards grid -->
		<div class="grid gap-6 md:grid-cols-2">
			<article
				v-for="hall in halls"
				:key="hall.id"
				class="cursor-pointer rounded-2xl bg-[#F5EFEA] p-4 transition hover:-translate-y-1"
				@click="selectHall(hall.id)"
			>
				<!-- Hall image -->
				<div class="aspect-4/3 overflow-hidden rounded-xl">
					<img
						:src="hall.image"
						:alt="hall.title"
						class="size-full object-cover transition hover:scale-105"
						loading="lazy"
					/>
				</div>

				<!-- Hall info -->
				<div class="mt-4 space-y-3">
					<h2 class="text-lg font-semibold text-[#677256]">{{ hall.title }}</h2>

					<!-- Capacity -->
					<div>
						<p class="text-xs text-[#9A9590]">Вместимость</p>
						<p class="text-sm text-[#2C2216]">{{ hall.capacity }} человек.</p>
					</div>

					<!-- Price -->
					<div>
						<p class="text-xs text-[#9A9590]">Стоимость</p>
						<p class="text-sm text-[#2C2216]">ПН - ПТ {{ hall.priceWeekday }} руб/час.</p>
						<p class="text-sm text-[#2C2216]">СБ - ВС {{ hall.priceWeekend }} руб/час.</p>
					</div>

					<!-- Description -->
					<div>
						<p class="text-xs text-[#9A9590]">Описание</p>
						<p class="text-sm text-[#2C2216]">{{ hall.description }}</p>
					</div>
				</div>
			</article>
		</div>

		<!-- Note -->
		<p class="mt-6 text-center text-sm text-[#9A9590] italic">
			Запрещено приходить со своей едой и напитками*
		</p>
	</div>
</template>
