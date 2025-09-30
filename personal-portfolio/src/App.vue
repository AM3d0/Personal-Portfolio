<script setup>
import { ref, onMounted } from "vue";
import { MyBBFService } from '@/services/MyBBFService.js';

const bbfData = ref();
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);

const fullText = "Willkommen auf meiner Website!";
const displayedText = ref("");
const active = ref('home');
const isManualScroll = ref(false);

function getOffset() {
  if (window.innerWidth < 640) {
    return 165;
  } else if (window.innerWidth < 1024) {
    return 165;
  } else {
    return 100;
  }
}


function scrollTo(id, offSet) {
  isManualScroll.value = true;
  active.value = id;
  const element = document.getElementById(id);
  const headerOffset = offSet;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });

  setTimeout(() => {
    isManualScroll.value = false;
  }, 1000);
}

let observer;

const initIntersectionObserver = () => {
  const options = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  observer = new IntersectionObserver((entries) => {
    if (isManualScroll.value) return;

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        active.value = entry.target.id;
      }
    });
  }, options);

  const sections = ['home', 'about', 'projects', 'skills', 'contact'];
  sections.forEach(sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      observer.observe(element);
    }
  });
};

onMounted(() => {
  let index = 0;
  const interval = setInterval(() => {
    displayedText.value += fullText[index];
    index++;
    if (index === fullText.length) clearInterval(interval);
  }, 50);
  bbfData.value = MyBBFService.getMyBBFData().slice(0, 3);
  setTimeout(initIntersectionObserver, 100);
});
</script>

<template>
  <div class='min-h-screen bg-gradient-to-br from-purple-900 to-black'>
    <!----Toolbar------------------------------------------------------------------->
    <Toolbar class='!sticky !top-0 !z-50 !bg-gray-900 !border-cyan-900 shadow-md shadow-purple-500'
      style="padding: 1rem 1rem 1rem 1.5rem">
      <!----Image + Name------------------------------------------------------------------->
      <template #start>
        <div class="flex items-center gap-4">
          <Avatar class="rounded-full" image='/images/pb.jpeg'
            style="height:50px; width: 50px; border-radius:9999px; overflow:hidden;" />
          <h1 class='text-xl sm:text-3xl font-mono tracking-widest text-purple-500 ml-4 drop-shadow-[0_0_10px_#a855f7]'>
            Ahmed
            Alamoudi</h1>
        </div>
      </template>
      <!----Tabs------------------------------------------------------------------->
      <template #end>
        <div class="grid grid-cols-3 sm:items-center gap-0 sm:gap-2 sm:flex sm:flex-wrap">
          <Button label="Home" text plain @click="scrollTo('home', getOffset())"
            :class="active === 'home' ? 'text-xs! sm:text-base! text-purple-400! font-bold! border-2! border-b-purple-400! bg-transparent!' : 'text-xs! sm:text-base! text-white! opacity-85! hover:text-purple-200! bg-transparent!'" />
          <Button label="About" text plain @click="scrollTo('about', getOffset())"
            :class="active === 'about' ? 'text-xs! sm:text-base! text-purple-400! font-bold! border-2! border-b-purple-400! bg-transparent!' : 'text-xs! sm:text-base! text-white! opacity-85! hover:text-purple-200! bg-transparent!'" />
          <Button label="Projects" text plain @click="scrollTo('projects', getOffset())"
            :class="active === 'projects' ? 'text-xs! sm:text-base! text-purple-400! font-bold! border-2! border-b-purple-400! bg-transparent!' : 'text-xs! sm:text-base! text-white! opacity-85! hover:text-purple-200! bg-transparent!'" />
          <Button label="Skills" text plain @click="scrollTo('skills', getOffset())"
            :class="active === 'skills' ? 'text-xs! sm:text-base! text-purple-400! font-bold! border-2! border-b-purple-400! bg-transparent!' : 'text-xs! sm:text-base! text-white! opacity-85! hover:text-purple-200! bg-transparent!'" />
          <Button label="Contact" text plain @click="scrollTo('contact', getOffset())"
            :class="active === 'contact' ? 'text-xs! sm:text-base! text-purple-400! font-bold! border-2! border-b-purple-400! bg-transparent!' : 'text-xs! sm:text-base! text-white! opacity-85! hover:text-purple-200! bg-transparent!'" />
        </div>
      </template>
    </Toolbar>

    <!----Home------------------------------------------------------------------->
    <section id='home' class='mt-20 flex-col justify-center'>
      <h1
        class='text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-center font-bold bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent'>
        {{ displayedText }}</h1>
      <h3 class='mt-8 text-sm sm:text-base md:text-lg lg:text-xl text-center text-white'>Informatik Student an der
        Albert-Ludwigs-Universität</h3>
      <h3 class='mt-4 text-xs sm:text-sm md:text-base lg:text-lg text-center text-white'>Von spannenden Projekten bis zu
        praktischen Skills <br> – <br> Hier
        bekommst
        du einen Einblick in meine Arbeit als Informatik-Student</h3>
      <div class="card flex flex-col items-center gap-4 mt-10">
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="https://github.com/AM3d0">
            <Button class='bg-purple-300! border border-white! rounded-2xl! text-white!' label="GitHub"
              icon="pi pi-github" />
          </a>
          <a href="/pdfs/Harvard_Zertifikat.pdf" download>
            <Button class='bg-transparent! border border-purple-100! rounded-2xl! text-white!' label="Download CV"
              icon="pi pi-user" />
          </a>
        </div>
      </div>
    </section>
    <!----About me------------------------------------------------------------------->
    <section id='about' class='mt-30 flex-col justify-center'>
      <h1
        class='text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-center font-bold bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent'
        v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
        About me</h1>
      <h3
        class='mt-8 pr-20 pl-20 sm:pr-60 sm:pl-60 text-xs sm:text-sm sm:text-base md:text-lg lg:text-xl text-center text-white'
        v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
        Mein Name ist Ahmed
        Alamoudi,
        ich
        bin 23 Jahre alt und studiere an der Albert-Ludwigs-Universität Freiburg. Programmieren gehört zu meinem Alltag
        und
        ermöglicht mir, kontinuierlich neues Wissen aufzubauen und meine Fähigkeiten stetig zu erweitern. Einen Einblick
        in
        einige meiner Projekte gebe ich im entsprechenden Abschnitt.</h3>
      <div class='flex flex-row justify-center m-5 mt-15 gap-2 sm:gap-4'>
        <Card class='!bg-black/50 border border-white'
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 animate-duration-500', leaveClass: 'animate-leave fade-out-0' }">
          <template #content>
            <div class='flex flex-col justiy-center'>
              <p class="text-purple-600 text-center text-sm sm:text-xl font-bold">
                1+
              </p>
              <p class="pt-2 text-white text-center text-xs sm:text-sm">
                Years experience
              </p>
            </div>

          </template>
        </Card>
        <Card class='!bg-black/50 border border-white'
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 animate-duration-500', leaveClass: 'animate-leave fade-out-0' }">
          <template #content>
            <div class='flex flex-col justiy-center'>
              <p class="text-purple-600 text-center text-sm sm:text-xl font-bold">
                20+
              </p>
              <p class="pt-2 text-white text-center text-xs sm:text-sm">
                Projects completed
              </p>
            </div>

          </template>
        </Card>
        <Card class='!bg-black/50 border border-white'
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 animate-duration-500', leaveClass: 'animate-leave fade-out-0' }">
          <template #content>
            <div class='flex flex-col justiy-center'>
              <p class="text-purple-600 text-center text-sm sm:text-xl font-bold">
                5+
              </p>
              <p class="pt-2 text-white text-center text-xs sm:text-sm">
                Languages learned
              </p>
            </div>

          </template>
        </Card>
      </div>
    </section>
    <!----Projects------------------------------------------------------------------->
    <section id='projects'>
      <h1 v-animateonscroll="{
        enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000 ', once: true
      }"
        class='mt-45 text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-center font-bold bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent leading-snug md:leading-snug lg:leading-snug'>
        Meine Projekte</h1>
      <div class='mt-10 grid grid-cols-1 gap-2 w-max mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>

        <div class="card w-80 sm:w-90 md:w-95 lg:w-100"
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000', once: true }">
          <Carousel :value="bbfData" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions"
            class="relative custom-carousel">
            <template #item="slotProps">
              <div class="border border-surface-200 rounded-xl m-2 relative transition duration-100 ease-in-out hover:-translate-y-1 shadow hover:shadow-md hover:shadow-purple-500/25
                  bg-gradient-to-br from-gray-900/50 to-purple-900/30
                  backdrop-blur-sm">
                <div class="mb-4">
                  <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image"
                    :alt="slotProps.data.name" class="w-full h-60 object-cover rounded-t-xl" />
                </div>
                <div class="flex flex-col justify-between items-center">
                  <div class="font-medium text-white">{{ slotProps.data.name }}</div>
                  <div class="m-5 font-semibold text-sm text-white">
                    Dies ist eine lange Beschreibung. Dies ist eine lange BeschreibungDies ist eine lange
                    BeschreibungDies
                    ist eine lange BeschreibungDies ist eine lange Beschreibung
                  </div>
                </div>
              </div>
            </template>
          </Carousel>

        </div>
        <div class="card w-80 sm:w-90 md:w-95 lg:w-100"
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 animate-duration-1000', once: true }">
          <Carousel :value="bbfData" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions"
            class="relative custom-carousel">
            <template #item="slotProps">
              <div class="border border-surface-200 rounded-xl m-2 relative transition delay-150 duration-300 ease-in-out hover:-translate-y-1 shadow hover:shadow-md hover:shadow-purple-500/25
                  bg-gradient-to-br from-gray-900/50 to-purple-900/30
                  backdrop-blur-sm">
                <div class="mb-4">
                  <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image"
                    :alt="slotProps.data.name" class="w-full h-60 object-cover rounded-t-xl" />
                </div>
                <div class="flex flex-col justify-between items-center">
                  <div class="font-medium text-white">{{ slotProps.data.name }}</div>
                  <div class="m-5 font-semibold text-sm text-white">
                    Dies ist eine lange Beschreibung. Dies ist eine lange BeschreibungDies ist eine lange
                    BeschreibungDies
                    ist eine lange BeschreibungDies ist eine lange Beschreibung
                  </div>
                </div>
              </div>
            </template>
          </Carousel>

        </div>
        <div class="card w-80 sm:w-90 md:w-95 lg:w-100"
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000', once: true }">
          <Carousel :value="bbfData" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions"
            class="relative custom-carousel">
            <template #item="slotProps">
              <div class="border border-surface-200 rounded-xl m-2 relative transition delay-150 duration-300 ease-in-out hover:-translate-y-1 shadow hover:shadow-md hover:shadow-purple-500/25
                  bg-gradient-to-br from-gray-900/50 to-purple-900/30
                  backdrop-blur-sm">
                <div class="mb-4">
                  <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image"
                    :alt="slotProps.data.name" class="w-full h-60 object-cover rounded-t-xl" />
                </div>
                <div class="flex flex-col justify-between items-center">
                  <div class="font-medium text-white">{{ slotProps.data.name }}</div>
                  <div class="m-5 font-semibold text-sm text-white">
                    Dies ist eine lange Beschreibung. Dies ist eine lange BeschreibungDies ist eine lange
                    BeschreibungDies
                    ist eine lange BeschreibungDies ist eine lange Beschreibung
                  </div>
                </div>
              </div>
            </template>
          </Carousel>

        </div>
        <div class="card w-80 sm:w-90 md:w-95 lg:w-100"
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000', once: true }">
          <Carousel :value="bbfData" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions"
            class="relative custom-carousel">
            <template #item="slotProps">
              <div class="border border-surface-200 rounded-xl m-2 relative transition duration-100 ease-in-out hover:-translate-y-1 shadow hover:shadow-md hover:shadow-purple-500/25
                  bg-gradient-to-br from-gray-900/50 to-purple-900/30
                  backdrop-blur-sm">
                <div class="mb-4">
                  <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image"
                    :alt="slotProps.data.name" class="w-full h-60 object-cover rounded-t-xl" />
                </div>
                <div class="flex flex-col justify-between items-center">
                  <div class="font-medium text-white">{{ slotProps.data.name }}</div>
                  <div class="m-5 font-semibold text-sm text-white">
                    Dies ist eine lange Beschreibung. Dies ist eine lange BeschreibungDies ist eine lange
                    BeschreibungDies
                    ist eine lange BeschreibungDies ist eine lange Beschreibung
                  </div>
                </div>
              </div>
            </template>
          </Carousel>

        </div>
        <div class="card w-80 sm:w-90 md:w-95 lg:w-100"
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-50 slide-in-from-t-20 animate-duration-1000', once: true }">
          <Carousel :value="bbfData" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions"
            class="relative custom-carousel">
            <template #item="slotProps">
              <div class="border border-surface-200 rounded-xl m-2 relative transition delay-150 duration-300 ease-in-out hover:-translate-y-1 shadow hover:shadow-md hover:shadow-purple-500/25
                  bg-gradient-to-br from-gray-900/50 to-purple-900/30
                  backdrop-blur-sm">
                <div class="mb-4">
                  <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image"
                    :alt="slotProps.data.name" class="w-full h-60 object-cover rounded-t-xl" />
                </div>
                <div class="flex flex-col justify-between items-center">
                  <div class="font-medium text-white">{{ slotProps.data.name }}</div>
                  <div class="m-5 font-semibold text-sm text-white">
                    Dies ist eine lange Beschreibung. Dies ist eine lange BeschreibungDies ist eine lange
                    BeschreibungDies
                    ist eine lange BeschreibungDies ist eine lange Beschreibung
                  </div>
                </div>
              </div>
            </template>
          </Carousel>

        </div>
        <div class="card w-80 sm:w-90 md:w-95 lg:w-100"
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000', once: true }">
          <Carousel :value="bbfData" :numVisible="1" :numScroll="1" :responsiveOptions="responsiveOptions"
            class="relative custom-carousel">
            <template #item="slotProps">
              <div class="border border-surface-200 rounded-xl m-2 relative transition delay-150 duration-300 ease-in-out hover:-translate-y-1 shadow hover:shadow-md hover:shadow-purple-500/25
                  bg-gradient-to-br from-gray-900/50 to-purple-900/30
                  backdrop-blur-sm">
                <div class="mb-4">
                  <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image"
                    :alt="slotProps.data.name" class="w-full h-60 object-cover rounded-t-xl" />
                </div>
                <div class="flex flex-col justify-between items-center">
                  <div class="font-medium text-white">{{ slotProps.data.name }}</div>
                  <div class="m-5 font-semibold text-sm text-white">
                    Dies ist eine lange Beschreibung. Dies ist eine lange BeschreibungDies ist eine lange
                    BeschreibungDies
                    ist eine lange BeschreibungDies ist eine lange Beschreibung
                  </div>
                </div>
              </div>
            </template>
          </Carousel>
        </div>
      </div>
    </section>

    <!----Skills------------------------------------------------------------------->
    <section id='skills'>
      <h1 v-animateonscroll="{
        enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000 ', once: true
      }"
        class='mt-45 text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-center font-bold bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent leading-snug md:leading-snug lg:leading-snug'>
        Skills</h1>
      <div class='mt-20 grid grid-cols-1 gap-4 w-max mx-auto sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
        <Card class='!bg-black/50 border border-white'
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 spin-in-45 slide-in-from-t-12 animate-duration-1000' }">
          <template #content>
            <div class='flex flex-col items-center'>
              <img src="/icons/HTML5_Logo.png" alt="C Logo" width="60">

              <p class="pt-5 text-white text-sm">
                HTML
              </p>
            </div>

          </template>
        </Card>
        <Card class='!bg-black/50 border border-white'
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 spin-in-45 slide-in-from-t-12 animate-duration-1000' }">
          <template #content>
            <div class='flex flex-col items-center'>
              <img src="/icons/css.png" alt="CSS Logo" width="60">

              <p class="pt-5 text-white text-sm">
                CSS
              </p>
            </div>

          </template>
        </Card>
        <Card class='!bg-black/50 border border-white'
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 spin-in-45 slide-in-from-t-12 animate-duration-1000' }">
          <template #content>
            <div class='flex flex-col items-center'>
              <img src="/icons/vue.png" alt="PrimeVue Logo" width="60">

              <p class="pt-5 text-white text-sm">
                VueJs
              </p>
            </div>

          </template>
        </Card>
        <Card class='!bg-black/50 border border-white'
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 spin-in-45 slide-in-from-t-12 animate-duration-1000' }">
          <template #content>
            <div class='flex flex-col items-center'>
              <img src="/icons/tailwind.png" alt="PrimeVue Logo" width="60">

              <p class="pt-8 text-white text-sm">
                Tailwind
              </p>
            </div>

          </template>
        </Card>
        <Card class='!bg-black/50 border border-white'
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 spin-in-45 slide-in-from-t-12 animate-duration-1000' }">
          <template #content>
            <div class='flex flex-col items-center'>
              <img src="/icons/python.png" alt="Python Logo" width="60">
              <p class="pt-5 text-white text-sm">
                Python
              </p>
            </div>

          </template>
        </Card>
        <Card class='!bg-black/50 border border-white'
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 spin-in-45 slide-in-from-t-12 animate-duration-1000' }">
          <template #content>
            <div class='flex flex-col items-center'>
              <img src="/icons/c.png" alt="C Logo" width="60">

              <p class="pt-5 text-white text-sm">
                C
              </p>
            </div>

          </template>
        </Card>
        <Card class='!bg-black/50 border border-white'
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 spin-in-45 slide-in-from-t-12 animate-duration-1000' }">
          <template #content>
            <div class='flex flex-col items-center'>
              <img src="/icons/c++.png" alt="C++ Logo" width="60">

              <p class="pt-5 text-white text-sm">
                C++
              </p>
            </div>

          </template>
        </Card>


        <Card class='!bg-black/50 border border-white'
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 spin-in-45 slide-in-from-t-12 animate-duration-1000' }">
          <template #content>
            <div class='flex flex-col items-center'>
              <img src="/icons/c_sharp.png" alt="C_Sharp Logo" width="60">

              <p class="pt-5 text-white text-sm">
                C#
              </p>
            </div>

          </template>
        </Card>

        <Card class='!bg-black/50 border border-white'
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 spin-in-45 slide-in-from-t-12 animate-duration-1000' }">
          <template #content>
            <div class='flex flex-col items-center'>
              <img src="/icons/flutter.png" alt="Flutter Logo" width="60">
              <p class="pt-7 text-white text-sm">
                Flutter / Dart
              </p>
            </div>

          </template>
        </Card>
        <Card class='!bg-black/50 border border-white'
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 spin-in-45 slide-in-from-t-12 animate-duration-1000' }">
          <template #content>
            <div class='flex flex-col items-center'>
              <img src="/icons/sql.png" alt="PrimeVue Logo" width="60">

              <p class="pt-4 text-white text-sm">
                SQL
              </p>
            </div>

          </template>
        </Card>
      </div>
    </section>
    <section id='contact' class='mt-30 flex-col justify-center'>
      <h1
        class='text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-center font-bold bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent'
        v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
        Contact</h1>
      <div class='flex flex-col mt-10 items-center gap-4'>
        <Card class='!bg-black/50 border border-white w-72'
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }">
          <template #content>
            <div class='flex flex-row items-center gap-2'>
              <i class="pr-4 pi pi-envelope text-white text-lg"></i>
              <p class="text-white text-sm">
                ahmedalamoudi19@gmail.com
              </p>
            </div>

          </template>
        </Card>
        <Card class='!bg-black/50 border border-white w-72'
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000' }">
          <template #content>
            <a href="https://www.linkedin.com/in/ahmed-alamoudi-75940a220/">
              <div class='flex flex-row items-center gap-2'>
                <i class="pr-4 pi pi-linkedin text-white text-lg"></i>
                <p class="text-white text-sm">
                  LinkedIn
                </p>
              </div>
            </a>
          </template>
        </Card>
        <Card class='!bg-black/50 border border-white w-72'
          v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000' }">
          <template #content>
            <div class='flex flex-row items-center gap-2'>
              <i class="pr-4 pi pi-map-marker text-white text-lg"></i>
              <p class="text-white text-sm">
                Deutschland, Freiburg
              </p>
            </div>

          </template>
        </Card>

      </div>

    </section>
    <h1
      class='mt-20 pb-60 text-2xl sm:text-2xl md:text-4xl lg:text-5xl text-center font-bold bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent'
      v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 animate-duration-1000', leaveClass: 'animate-leave fade-out-0' }">
      Vielen Dank !</h1>
  </div>
</template>

<style scoped>
:deep(.p-carousel .p-carousel-next-button) {
  color: white !important;
}

:deep(.p-carousel .p-carousel-prev-button) {
  color: white !important;
}

:deep(.p-carousel .p-carousel-next-button:hover) {
  background-color: #9333ea !important;
}

:deep(.p-carousel .p-carousel-prev-button:hover) {
  background-color: #9333ea !important;
}

.custom-carousel {
  --p-carousel-indicator-background: #9ca3af;
  --p-carousel-indicator-hover-background: #a855f7;
  --p-carousel-indicator-active-background: #a855f7;
  --p-carousel-indicator-width: 20px;
}
</style>
