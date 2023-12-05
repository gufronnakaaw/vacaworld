<template>
  <Navbar />
  <Hero />
  <Service />
  <Destination />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Service from './components/Service.vue';
import Destination from './components/Destination.vue';

export default {
  components: {
    Navbar,
    Hero,
    Service,
    Destination,
  },
};
</script>
