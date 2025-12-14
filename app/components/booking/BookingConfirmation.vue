<script setup lang="ts">
const emit = defineEmits<{
	home: []
}>()

function goHome() {
	emit("home")
}
</script>

<template>
	<div class="rounded-3xl bg-[#FBF6F2] p-8 text-center shadow-lg md:p-12">
		<!-- Check icon -->
		<div class="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-[#677256]">
			<UIcon name="i-heroicons-check" class="size-8 text-white" />
		</div>

		<!-- Title -->
		<h2 class="mb-4 text-2xl font-medium text-[#2C2216] md:text-3xl">
			Готово! Ваша бронь успешно отправлена.
		</h2>

		<!-- Description -->
		<p class="mx-auto mb-8 max-w-md text-sm text-[#9A9590]">
			Мы получили вашу анкету и уже передали её администратору. В ближайшее время на ваш номер
			телефона придёт СМС с подтверждением брони.
		</p>

		<!-- Button -->
		<UButton class="bg-[#677256] text-[#F5EFEA] hover:bg-[#5a6549]" @click="goHome">
			Вернуться на главную
		</UButton>
	</div>
</template>
