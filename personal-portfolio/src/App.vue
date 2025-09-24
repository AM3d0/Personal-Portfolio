<script setup>
import { ref, onMounted } from "vue";

const fullText = "Willkommen auf meiner Website!";
const displayedText = ref("");
const active = ref('home')

function scrollTo(id) {
  active.value = id
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

onMounted(() => {
  let index = 0;
  const interval = setInterval(() => {
    displayedText.value += fullText[index];
    index++;
    if (index === fullText.length) clearInterval(interval);
  }, 50);
});
</script>

<template>
  <div class='min-h-screen bg-gradient-to-br from-purple-900 to-black'>
    <div class="card">
      <Toolbar class='!bg-gray-900 !border-cyan-900 shadow-md shadow-purple-500' style="padding: 1rem 1rem 1rem 1.5rem">
        <template #start>
          <div class="flex items-center gap-4">
            <Avatar class="rounded-full" image='/images/pb.jpeg' style="width: 70px; height: 70px; border-radius:9999px; overflow:hidden;" />
            <h1 class='font-mono tracking-widest text-purple-500 text-3xl ml-4 drop-shadow-[0_0_10px_#a855f7]'>Ahmed
              Alamoudi</h1>
          </div>
        </template>
        <template #end>
          <div class="flex items-center gap-2">
            <Button label="Home" text plain @click="scrollTo('home')"
              :class="active === 'home' ? 'text-purple-400! font-bold! border-2! border-b-purple-400! bg-transparent!' : 'text-white! opacity-85! hover:text-purple-200! bg-transparent!'" />
            <Button label="About" text plain @click="scrollTo('about')"
              :class="active === 'about' ? 'text-purple-400! font-bold! border-2! border-b-purple-400! bg-transparent!' : 'text-white! opacity-85! hover:text-purple-200! bg-transparent!'" />
            <Button label="Projects" text plain @click="scrollTo('projects')"
              :class="active === 'projects' ? 'text-purple-400! font-bold! border-2! border-b-purple-400! bg-transparent!' : 'text-white! opacity-85! hover:text-purple-200! bg-transparent!'" />
            <Button label="Skills" text plain @click="scrollTo('skills')"
              :class="active === 'skills' ? 'text-purple-400! font-bold! border-2! border-b-purple-400! bg-transparent!' : 'text-white! opacity-85! hover:text-purple-200! bg-transparent!'" />
            <Button label="Contact" text plain @click="scrollTo('contact')"
              :class="active === 'contact' ? 'text-purple-400! font-bold! border-2! border-b-purple-400! bg-transparent!' : 'text-white! opacity-85! hover:text-purple-200! bg-transparent!'" />
          </div>
        </template>
      </Toolbar>
    </div>
    <section id='home' class='mt-20 flex-col justify-center'>
      <h1
        class='text-5xl text-center font-bold bg-gradient-to-r from-white via-purple-400 to-purple-600 bg-clip-text text-transparent'>
        {{ displayedText }}</h1>
      <h3 class='mt-8 text-xl text-center text-white'>Informatik Student an der Albert-Ludwigs-Universität</h3>
      <h3 class='mt-4 text-l text-center text-white'>Von spannenden Projekten bis zu praktischen Skills <br> – <br> Hier
        bekommst
        du einen Einblick in meine Arbeit als Informatik-Student</h3>
    </section>
  </div>
</template>

<style scoped></style>
