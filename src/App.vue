<template>
  <Navbar />
  <Hero />
  <Service />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Service from './components/Service.vue';

export default {
  components: {
    Navbar,
    Hero,
    Service,
  },
};
</script>
