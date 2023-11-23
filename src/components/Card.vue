<template>
  <div
    class="flex justify-center gap-16 flex-col items-center w-full sm:w-[350px] rounded-[32px] border lg:p-16 p-10 bg-[#f5f5f5]"
  >
    <div><img :src="url" :alt="alt" /></div>
    <div class="flex gap-8 flex-col">
      <h2 class="font-bold text-grey text-lg text-center">{{ title }}</h2>
      <p
        class="font-inter text-lg leading-relaxed text-grey opacity-50 text-center"
      >
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    alt: String,
    title: String,
    content: String,
  },
};
</script>
