<template>
  <div class="container mx-auto py-16 overflow-x-hidden px-3">
    <div class="grid grid-cols-12 items-center">
      <div class="lg:col-span-4 col-span-12 flex gap-4 flex-col">
        <h1
          class="text-pink font-bold leading-tight text-center lg:text-start text-base sm:text-2xl"
        >
          SERVICE
        </h1>
        <p
          class="font-bold sm:text-5xl text-3xl leading-tight text-grey font-circular text-center lg:text-start"
        >
          Our top value categories for you
        </p>
      </div>
      <div
        class="lg:col-span-8 col-span-12 flex gap-5 lg:w-screen sm:w-auto sm:mt-16 mt-8 lg:mt-0 flex-col sm:flex-row"
      >
        <Card v-for="logo in logos" v-bind="logo" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      logos: [
        {
          url: '/logo/destination.png',
          alt: 'destination logo',
          title: 'Best Tour Guide',
          content:
            'What looked like a small patch of purple grass, above five feet.',
        },
        {
          url: '/logo/booking.png',
          alt: 'booking logo',
          title: 'Easy Booking',
          content: 'Square, was moving across the sand in their direction.',
        },
        {
          url: '/logo/cloudy.png',
          alt: 'cloudy logo',
          title: 'Weather Forecast',
          content:
            'What looked like a small patch of purple grass, above five feet.',
        },
      ],
    };
  },
};
</script>
