<template>
  <div class="flex justify-center">
    <button class="bg-blue-500 text-white">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      text: "WELCOME!",
    };
  },
};
</script>
