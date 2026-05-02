<template>
  <button :class="{ primary: true }">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: ['text'],
}
</script>

<style scoped>

button {
  @apply rounded px-5 py-3 font-medium;
}

.primary {
  @apply border-0  text-white bg-brand-blue-1 hover:shadow-blue;
}

</style>
