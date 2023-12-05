<template>
  <div class="container mx-auto px-3">
    <div class="grid grid-cols-12">
      <div class="col-span-12 flex flex-col gap-4">
        <h1 class="text-pink text-base font-bold text-center">
          TOP DESTINATION
        </h1>
        <p class="font-circular text-3xl font-bold text-center">
          Explore top destination
        </p>
      </div>
      <div
        class="col-span-12 flex flex-col gap-8 w-auto mt-8 sm:flex-row sm:w-auto justify-center"
      >
        <CardDestination
          v-for="destination in destinations"
          v-bind="destination"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardDestination from './CardDestination.vue';

export default {
  components: {
    CardDestination,
  },
  data() {
    return {
      destinations: [
        {
          url: '/images/bantayan-island.png',
          alt: 'bantayan island image',
          price: 1500,
          title: 'Paradise Beach, Bantayan Island',
          location: 'Rome, Italy',
          rating: 4.8,
        },
        {
          url: '/images/fish.png',
          alt: 'fish image',
          price: 1000,
          title: 'Ocean with full of colors',
          location: 'Maldives',
          rating: 4.7,
        },
        {
          url: '/images/mountain.png',
          alt: 'mountain image',
          price: 800,
          title: 'Mountain View, Above the cloud',
          location: 'Indonesia',
          rating: 4.8,
        },
      ],
    };
  },
};
</script>
