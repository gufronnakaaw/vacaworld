<template>
  <nav class="py-9 px-4">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <img
          src="/logo/vacaworld.svg"
          alt="vacaworld logo"
          class="order-1 sm:order-2"
        />
        <img
          src="/icons/icon-hamburger.svg"
          alt="hamburger menu"
          @click="setShowNavbar"
          class="order-2 sm:order-1 lg:hidden cursor-pointer"
        />
        <div class="order-2 hidden lg:block">
          <ul class="flex gap-16 font-circular">
            <li class="text-grey font-bold text-sm"><a href="">Home</a></li>
            <li class="text-grey font-bold text-sm opacity-50">
              <a href="">Discover</a>
            </li>
            <li class="text-grey font-bold text-sm opacity-50">
              <a href="">Special</a>
            </li>
            <li class="text-grey font-bold text-sm opacity-50">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div class="order-3 hidden sm:block">
          <button
            class="grow bg-white border border-[#eee] hover:bg-[#eaeaea] transition py-4 px-8 font-bold text-grey rounded-lg text-sm mx-2"
          >
            Login
          </button>
          <button
            class="grow bg-purple py-4 px-8 font-bold text-white rounded-lg text-sm"
          >
            Register
          </button>
        </div>
      </div>
    </div>
    <div
      class="fixed bottom-0 right-0 left-0 p-4 bg-white border lg:hidden z-50"
      v-if="showNavbar"
    >
      <ul class="flex justify-between">
        <li>
          <a href="" class="flex justify-center flex-col items-center gap-1">
            <ion-icon
              name="home-outline"
              class="text-2xl text-purple"
            ></ion-icon>
            <span class="text-purple text-base font-normal">Home</span>
          </a>
        </li>
        <li>
          <a href="" class="flex justify-center flex-col items-center gap-1">
            <ion-icon
              name="albums-outline"
              class="text-2xl text-grey opacity-50"
            ></ion-icon>
            <span class="text-grey opacity-50 text-base font-normal"
              >Discover</span
            >
          </a>
        </li>
        <li>
          <a href="" class="flex justify-center flex-col items-center gap-1">
            <ion-icon
              name="sparkles-outline"
              class="text-2xl text-grey opacity-50"
            ></ion-icon>
            <span class="text-grey opacity-50 text-base font-normal"
              >Special</span
            >
          </a>
        </li>
        <li>
          <a href="" class="flex justify-center flex-col items-center gap-1">
            <ion-icon
              name="megaphone-outline"
              class="text-2xl text-grey opacity-50"
            ></ion-icon>
            <span class="text-grey opacity-50 text-base font-normal"
              >Contact</span
            >
          </a>
        </li>
        <li>
          <a
            href=""
            class="flex justify-center flex-col items-center gap-1"
            @click.prevent="setShowMore"
          >
            <ion-icon
              name="menu-outline"
              class="text-2xl text-grey opacity-50"
            ></ion-icon>
            <span class="text-grey opacity-50 text-base font-normal">More</span>
          </a>
        </li>
      </ul>
      <div
        class="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-4 w-3/4"
        v-if="showMore"
      >
        <button
          class="grow bg-white border border-[#eee] hover:bg-[#eaeaea] transition py-4 px-8 font-bold text-grey rounded-lg text-sm"
        >
          Login
        </button>
        <button
          class="grow bg-purple py-4 px-8 font-bold text-white rounded-lg text-sm"
        >
          Register
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMore: false,
      showNavbar: false,
    };
  },
  methods: {
    setShowMore() {
      this.showMore = !this.showMore;
    },
    setShowNavbar() {
      this.showNavbar = !this.showNavbar;
    },
  },
};
</script>
