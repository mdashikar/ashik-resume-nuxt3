<template>
  <div class="bg-gray-50">
    <Head>
      <Title>Md. Ashiqur Rahman - Senior Full Stack JavaScript Developer | Vue.js Expert</Title>
      <Meta
        name="description"
        content="Md. Ashiqur Rahman is a Senior Full Stack JavaScript Developer with 5+ years experience specializing in Vue.js, Node.js, React, and modern web technologies."
      />
      <Meta
        name="keywords"
        content="Md. Ashiqur Rahman, Senior Software Engineer, Full Stack Developer, JavaScript Developer, Vue.js Developer, React Developer, Node.js Developer, Nuxt.js, Next.js, TypeScript, Express.js, MongoDB, GraphQL, Firebase, Remote Developer, Sylhet Bangladesh, Frontend Engineer, Backend Engineer"
      />
      <Meta name="author" content="Md. Ashiqur Rahman" />
      <Meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <Meta name="revisit-after" content="7 days" />
      <Meta name="language" content="English" />
      <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Meta name="theme-color" content="#4f46e5" />
      <Meta name="msapplication-navbutton-color" content="#4f46e5" />
      <Meta name="apple-mobile-web-app-status-bar-style" content="#4f46e5" />
      <Meta name="apple-mobile-web-app-capable" content="yes" />
      <Meta name="apple-mobile-web-app-title" content="Md. Ashiqur Rahman - Developer Portfolio" />
      <Meta name="application-name" content="Md. Ashiqur Rahman" />
      <Meta property="og:title" content="Md. Ashiqur Rahman - Senior Full Stack JavaScript Developer" />
      <Meta property="og:description" content="Senior Software Engineer with expertise in Vue.js, React, Node.js and modern web development. View my portfolio and projects." />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://ashik.dev" />
      <Meta property="og:image" content="https://ashik.dev/images/ashik.jpg" />
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="630" />
      <Meta property="og:image:type" content="image/jpeg" />
      <Meta property="og:image:alt" content="Md. Ashiqur Rahman - Senior Full Stack Developer" />
      <Meta property="og:site_name" content="Md. Ashiqur Rahman" />
      <Meta property="og:locale" content="en_US" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="Md. Ashiqur Rahman - Senior Full Stack JavaScript Developer" />
      <Meta name="twitter:description" content="Senior Software Engineer with expertise in Vue.js, React, Node.js and modern web development. View my portfolio and projects." />
      <Meta name="twitter:image" content="https://ashik.dev/images/ashik.jpg" />
      <Meta name="format-detection" content="telephone=no" />
      <Link rel="canonical" href="https://ashik.dev" />
    </Head>

    <!-- Hero section -->
    <HomeHero />

    <!-- Main content with smooth scroll transitions -->
    <div class="relative">
      <!-- About section -->
      <div id="about-me" class="relative py-12 bg-white scroll-mt-24">
        <AboutMe />
      </div>

      <!-- Work section -->
      <div id="works" class="relative py-12 bg-gray-50 scroll-mt-24">
        <MyWork />
      </div>

      <!-- Testimonials section -->
      <div id="testimonials" class="relative py-12 bg-white scroll-mt-24">
        <Testimonial />
      </div>

      <!-- Contact section -->
      <div id="contact" class="relative py-12 bg-gray-50 scroll-mt-24">
        <Contact />
      </div>
    </div>

    <!-- Footer -->
    <Footer />

    <!-- Floating action button for quick navigation to top - improved visibility -->
    <button 
      @click="scrollToTop" 
      class="fixed right-6 bottom-6 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-all duration-300 z-50"
      :class="{ 'translate-y-20 opacity-0 pointer-events-none': !showScrollButton, 'translate-y-0 opacity-100': showScrollButton }"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showScrollButton = ref(false);
const scrollThreshold = 500;
let lastScrollPosition = 0;
let ticking = false;

const handleScroll = () => {
  lastScrollPosition = window.scrollY;
  
  if (!ticking) {
    window.requestAnimationFrame(() => {
      showScrollButton.value = lastScrollPosition > scrollThreshold;
      ticking = false;
    });
    
    ticking = true;
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Handle anchor link scrolling
const handleAnchorClick = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleAnchorClick();
  
  // Initialize scroll position check
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style>
.scroll-mt-24 {
  scroll-margin-top: 6rem;
}

/* Add smooth scrolling to the entire page */
html {
  scroll-behavior: smooth;
}

/* Add a subtle section separator instead of translucent overlays */
#about-me, #works, #testimonials, #contact {
  position: relative;
}

#about-me::after, 
#testimonials::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent, rgba(209, 213, 219, 0.5), transparent);
}
</style>
