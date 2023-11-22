<template>
  <div class="container mx-auto p-4 lg:py-16">
    <div class="grid grid-cols-12 items-center">
      <div class="col-span-12 lg:col-span-4 order-2 lg:order-1">
        <div>
          <button
            class="px-8 py-4 border border-[#eee] text-pink flex gap-2 font-bold text-sm rounded-lg mx-auto lg:mx-0 items-center font-circular hover:bg-[#eaeaea] transition"
          >
            Explore the world!
            <img src="/icons/icon-work.svg" alt="work icon" />
          </button>
          <h1
            class="font-bold text-[40px] md:text-[56px] text-grey leading-tight text-center mt-4 mb-6 lg:text-[69px] lg:text-start font-circular"
          >
            Travel <span class="text-pink">top destination</span> of the world
          </h1>
          <p
            class="text-center md:text-[18px] text-grey opacity-50 text-base font-inter mb-8 md:w-3/4 mx-auto md:mb-[43px] md:mt-[43px] lg:w-full lg:text-start"
          >
            We always make our customer happy by providing as many choices as
            possible
          </p>
          <div
            class="flex flex-col md:flex-row justify-center gap-6 lg:justify-start"
          >
            <button
              class="py-6 px-8 bg-purple rounded-lg text-white text-sm font-bold"
            >
              Get Started
            </button>
            <button
              class="justify-center items-center py-6 px-8 bg-white border border-[#EEE] rounded-lg text-sm font-bold flex gap-2 hover:bg-[#eaeaea] transition"
            >
              <img src="/icons/icon-play.svg" alt="play icon" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
      <div class="col-span-12 lg:col-span-8 order-1 lg:order-2">
        <img src="/images/hero.png" class="w-full" alt="hero image" />
      </div>
      <div class="col-span-12 order-3 py-8">
        <div
          class="flex justify-center gap-6 sm:gap-7 lg:justify-between flex-wrap"
        >
          <div v-for="logo in logos">
            <img :src="logo.url" class="h-5 sm:h-8" :alt="logo.alt" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        { url: '/logo/airbnb.svg', alt: 'airbnb logo' },
        { url: '/logo/booking.svg', alt: 'booking logo' },
        { url: '/logo/tripadvisor.svg', alt: 'tripadvisor logo' },
        { url: '/logo/orbitz.svg', alt: 'orbitz logo' },
        { url: '/logo/expedia.svg', alt: 'expedia logo' },
      ],
    };
  },
};
</script>
