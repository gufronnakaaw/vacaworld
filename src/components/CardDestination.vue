<template>
  <div class="flex flex-col h-[550px]">
    <div>
      <img
        class="h-72 w-full object-cover rounded-t-[32px]"
        :src="url"
        :alt="alt"
      />
    </div>

    <div
      class="flex flex-col p-8 bg-[#f5f5f5] rounded-b-[32px] h-full justify-between"
    >
      <h1
        class="text-pink font-bold text-[24px] sm:text-[22px] md:text-[24px] font-circular"
      >
        ${{ price }}
      </h1>
      <h1
        class="font-bold font-circular text-[24px] sm:text-[22px] md:text-[24px] sm:w-5/6 md:w-3/4"
      >
        {{ title }}
      </h1>
      <p class="font-inter text-lg opacity-60">{{ location }}</p>
      <p
        class="pt-8 text-orange font-circular text-[24px] sm:text-[22px] md:text-[24px] flex gap-2"
      >
        <span>{{ rating }}</span>
        <img src="/icons/icon-star.svg" class="w-7 h-7" alt="star icon" />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    alt: String,
    price: Number,
    title: String,
    location: String,
    rating: Number,
  },
};
</script>
