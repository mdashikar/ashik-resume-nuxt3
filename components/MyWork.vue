<template>
  <div id="works" class="container px-6 py-16 mx-auto">
    <div class="text-center">
      <h2 class="text-3xl font-bold text-gray-800 sm:text-4xl">Featured Projects</h2>
      <p class="max-w-2xl mx-auto mt-4 text-gray-600">
        Showcasing some of my recent work and side projects that demonstrate my expertise in full-stack development.
      </p>
    </div>

    <!-- Grid of project cards -->
    <div class="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
      <!-- Project 1: Dorik -->
      <div class="overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div class="relative h-48 bg-gradient-to-r from-indigo-600 to-blue-400 flex items-center justify-center">
          <div class="absolute inset-0 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-white opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white z-10">Dorik</h3>
          <div class="absolute bottom-2 right-2 px-4 py-1 text-sm text-white bg-black bg-opacity-50 rounded-full">
            Backend Engineering
          </div>
        </div>
        <div class="p-6">
          <p class="mt-2 text-gray-600">
            As Backend Lead at Dorik, I manage the team, conduct code reviews, deployments, and oversee the platform's product ecosystem and technical infrastructure.
          </p>
          <div class="flex flex-wrap gap-2 mt-4">
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Node.js</span>
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">MongoDB</span>
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">GraphQL</span>
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">AWS</span>
          </div>
        </div>
      </div>

      <!-- Project 2: V4krk -->
      <div class="overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div class="relative h-48 bg-gradient-to-r from-red-500 to-orange-400 flex items-center justify-center">
          <div class="absolute inset-0 flex items-center justify-center">
            <svg class="w-20 h-20 text-white opacity-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white z-10">V4krk</h3>
          <div class="absolute bottom-2 right-2 px-4 py-1 text-sm text-white bg-black bg-opacity-50 rounded-full">
            Full Stack Development
          </div>
        </div>
        <div class="p-6">
          <p class="mt-2 text-gray-600">
            Built a comprehensive web application with frontend and RESTful backend services, including an admin dashboard with advanced functionality.
          </p>
          <div class="flex flex-wrap gap-2 mt-4">
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Vue.js</span>
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Nuxt.js</span>
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Express</span>
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">MongoDB</span>
          </div>
        </div>
      </div>

      <!-- Project 3: Innovie -->
      <div class="overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div class="relative h-48 bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
          <div class="absolute inset-0 flex items-center justify-center">
            <svg class="w-20 h-20 text-white opacity-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M5 10h14M5 14h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white z-10">Innovie</h3>
          <div class="absolute bottom-2 right-2 px-4 py-1 text-sm text-white bg-black bg-opacity-50 rounded-full">
            Frontend Development
          </div>
        </div>
        <div class="p-6">
          <p class="mt-2 text-gray-600">
            Designed responsive UI components and integrated RESTful APIs, transforming wireframes into interactive user interfaces.
          </p>
          <div class="flex flex-wrap gap-2 mt-4">
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Vue.js</span>
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Tailwind CSS</span>
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Ant Design</span>
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">RESTful API</span>
          </div>
        </div>
      </div>

      <!-- Project 4: Relantin -->
      <div class="overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div class="relative h-48 bg-gradient-to-r from-purple-600 to-indigo-400 flex items-center justify-center">
          <div class="absolute inset-0 flex items-center justify-center">
            <svg class="w-20 h-20 text-white opacity-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white z-10">Relantin</h3>
          <div class="absolute bottom-2 right-2 px-4 py-1 text-sm text-white bg-black bg-opacity-50 rounded-full">
            Lead Frontend
          </div>
        </div>
        <div class="p-6">
          <p class="mt-2 text-gray-600">
            Led frontend architecture and state management implementation, managing a team of developers to deliver high-quality features.
          </p>
          <div class="flex flex-wrap gap-2 mt-4">
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">React</span>
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Next.js</span>
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">TypeScript</span>
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">SolidJS</span>
          </div>
        </div>
      </div>

      <!-- Project 5: FSI -->
      <div class="overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div class="relative h-48 bg-gradient-to-r from-green-500 to-teal-400 flex items-center justify-center">
          <div class="absolute inset-0 flex items-center justify-center">
            <svg class="w-20 h-20 text-white opacity-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white z-10">FSI</h3>
          <div class="absolute bottom-2 right-2 px-4 py-1 text-sm text-white bg-black bg-opacity-50 rounded-full">
            Driver Management System
          </div>
        </div>
        <div class="p-6">
          <p class="mt-2 text-gray-600">
            Developed comprehensive driver management system with real-time tracking, scheduling, and reporting capabilities.
          </p>
          <div class="flex flex-wrap gap-2 mt-4">
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Vue.js</span>
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Node.js</span>
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">MongoDB</span>
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Express.js</span>
          </div>
        </div>
      </div>

      <!-- Project 6: Rent Desh -->
      <div class="overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div class="relative h-48 bg-gradient-to-r from-gray-700 to-gray-500 flex items-center justify-center">
          <div class="absolute inset-0 flex items-center justify-center">
            <svg class="w-20 h-20 text-white opacity-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white z-10">Rent Desh</h3>
          <div class="absolute bottom-2 right-2 px-4 py-1 text-sm text-white bg-black bg-opacity-50 rounded-full">
            Property Platform
          </div>
        </div>
        <div class="p-6">
          <p class="mt-2 text-gray-600">
            Built next-generation property listing and rental platform with advanced search, booking, and payment capabilities.
          </p>
          <div class="flex flex-wrap gap-2 mt-4">
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">React</span>
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Node.js</span>
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">PostgreSQL</span>
            <span class="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">Google Maps API</span>
          </div>
        </div>
      </div>
    </div>

    <!-- GitHub link -->
    <div class="text-center mt-12">
      <a href="https://github.com/mdashikar" target="_blank" rel="noopener noreferrer" aria-label="View more projects on GitHub" class="inline-flex items-center px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        View More Projects on GitHub
      </a>
    </div>

    <!-- Companies section -->
    <section class="mt-16 pt-10 border-t border-gray-200">
      <h3 class="text-xl font-bold text-center text-gray-800 mb-8">
        Companies I've Worked With
      </h3>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        <!-- Company logos as text to avoid image dependencies -->
        <div class="flex items-center justify-center h-16 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <span class="font-bold text-gray-700">Dorik</span>
        </div>
        <div class="flex items-center justify-center h-16 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <span class="font-bold text-gray-700">Relantin</span>
        </div>
        <div class="flex items-center justify-center h-16 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <span class="font-bold text-gray-700">Rootsoft IT</span>
        </div>
        <div class="flex items-center justify-center h-16 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <span class="font-bold text-gray-700">Innovie</span>
        </div>
        <div class="flex items-center justify-center h-16 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <span class="font-bold text-gray-700">V4krk</span>
        </div>
        <div class="flex items-center justify-center h-16 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
          <span class="font-bold text-gray-700">Sidy</span>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Add optional hover effect on project cards */
.overflow-hidden {
  transition: transform 0.3s ease;
}

.overflow-hidden:hover {
  transform: translateY(-5px);
}
</style>
