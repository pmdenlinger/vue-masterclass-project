<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      primary: true,
    }
  },
  computed: {
    buttonClass() {
      return { primary: this.primary, secondary: !this.primary }
    },
  },
}
</script>

<style scoped>
button {
  @apply rounded px-5 py-3 font-medium;
}

.primary {
  @apply border-0  text-white bg-brand-blue-1 hover:shadow-blue;
}

.secondary {
  @apply bg-transparent text-brand-blue-1 hover:text-brand-blue-2 hover:text-white;
}
</style>
