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
		<div class="mx-auto mb-6 flex size-13 items-center justify-center rounded-full bg-[#677256]">
			<UIcon name="i-heroicons-check" class="size-8 text-white" />
		</div>

		<!-- Title -->
		<h2 class="mb-4 text-5xl font-medium text-[#677256] md:text-3xl">
			Готово! Ваша бронь успешно отправлена.
		</h2>

		<!-- Description -->
		<p class="mx-auto mb-8 max-w-xl text-lg">
			Мы получили вашу анкету и уже передали её администраторам. В ближайшее время на ваш номер
			телефона придет СМС с потверждением брони.
		</p>

		<!-- Button -->
		<UButton
			class="my-4 bg-[#677256] px-15 py-2 text-xl text-[#F5EFEA] hover:bg-[#5a6549]"
			color="secondary"
			@click="goHome"
		>
			Вернуться на главную
		</UButton>
	</div>
</template>
