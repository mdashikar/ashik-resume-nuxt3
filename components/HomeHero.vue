<template>
  <div>
    <!-- Section 1 -->
    <section class="w-full px-6 pb-12 antialiased bg-white" id="home">
      <div class="mx-auto max-w-7xl">
        <nav
          class="relative z-50 h-24 select-none"
        >
          <div
            class="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2 lg:px-0"
          >
            <div class="flex items-center justify-start w-1/4 h-full pr-4">
              <a href="#_" class="inline-block py-4 md:py-0">
                <span class="p-1 text-xl font-black leading-none text-gray-900"
                  >ashik</span
                >
              </a>
            </div>
            <div
              class="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex"
              :class="{ 'flex fixed': showMenu, hidden: !showMenu }"
            >
              <div
                class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row"
              >
                <a
                  href="#_"
                  class="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden"
                  >ashik<span class="text-indigo-600">.</span></a
                >
                <div
                  class="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center"
                ></div>
                <div
                  class="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0"
                >
                  <a
                    href="#home"
                    class="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-indigo-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center nav-link"
                    @click="closeMenu"
                    >Home</a
                  >
                  <a
                    href="#about-me"
                    class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center nav-link"
                    @click="closeMenu"
                    >About me</a
                  >
                  <a
                    href="#works"
                    class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center nav-link"
                    @click="closeMenu"
                    >Works</a
                  >
                  <a
                    href="#contact"
                    class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center nav-link"
                    @click="closeMenu"
                    >Contact</a
                  >
                </div>
              </div>
            </div>
            <div
              @click="toggleMenu"
              class="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100"
            >
              <svg
                class="w-6 h-6 text-gray-700"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                v-if="!showMenu"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg
                class="w-6 h-6 text-gray-700"
                x-show="showMenu"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                v-else
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
          </div>
        </nav>

        <!-- Main Hero Content -->
        <section class="py-20">
          <div class="container items-center mx-auto">
            <div class="flex flex-wrap items-center -mx-3">
              <div class="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                <div class="w-full lg:max-w-md">
                  <h2
                    class="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading"
                  >
                    Senior Software Engineer Crafting Exceptional Web Experiences
                  </h2>
                  <p
                    class="mb-4 font-medium tracking-tight text-gray-600 xl:mb-6"
                  >
                    With 5+ years of experience in full-stack JavaScript development, I build scalable, 
                    performant web applications that solve real business problems.
                    <br />
                    <br />
                    Currently leading at Dorik, where I design and implement robust backend systems.
                  </p>
                  <ul>
                    <li class="flex items-center py-2 space-x-4 xl:py-3">
                      <svg
                        class="w-8 h-8 text-indigo-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        ></path>
                      </svg>
                      <span class="font-medium text-gray-700"
                        >Architecture design with a focus on scalability and performance</span
                      >
                    </li>
                    <li class="flex items-center py-2 space-x-4 xl:py-3">
                      <svg
                        class="w-8 h-8 text-indigo-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        ></path>
                      </svg>
                      <span class="font-medium text-gray-700"
                        >Modern stacks: Vue/React, Node, MongoDB, GraphQL, TypeScript</span
                      >
                    </li>
                    <li class="flex items-center py-2 space-x-4 xl:py-3">
                      <svg
                        class="w-8 h-8 text-indigo-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                      <span class="font-medium text-gray-700"
                        >Team leadership with a mentorship-focused approach
                      </span>
                    </li>
                  </ul>
                  <div class="relative mt-6 flex flex-col sm:flex-row sm:space-x-4">
                    <NuxtLink to="/resume" class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg transition duration-300 flex items-center justify-center">
                      View Resume
                    </NuxtLink>
                    <a
                      href="mailto:md.ashik.ar@gmail.com"
                      class="flex items-center px-6 py-3 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition duration-300 mt-4 sm:mt-0"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"
              >
                <img
                  class="mx-auto sm:max-w-sm lg:max-w-full rounded-lg shadow-sm"
                  src="/images/feature-graphic.png"
                  alt="Md. Ashiqur Rahman - Full Stack JavaScript Developer"
                />
              </div>
            </div>
          </div>
        </section>

        <!-- End Main Hero Content -->
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";

const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
  
  // When menu is open, prevent body scrolling
  if (showMenu.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMenu = () => {
  showMenu.value = false;
  document.body.style.overflow = '';
};

// Close menu on window resize (typically when switching to desktop view)
if (process.client) {
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && showMenu.value) {
      closeMenu();
    }
  });
}
</script>

<style scoped>
.nav-link {
  transition: color 0.3s ease;
  position: relative;
}

/* Add active state for nav links with underline effect */
.nav-link.active,
.nav-link:hover {
  color: #4f46e5; /* Indigo-600 */
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  background-color: #4f46e5;
  transition: width 0.3s ease, left 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
  left: 0;
}

@media (max-width: 767px) {
  .flex.fixed {
    z-index: 50;
    height: 100vh;
    width: 100vw;
  }
  
  /* Improve mobile menu contrast */
  .flex.fixed .bg-white {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  }
}
</style>
