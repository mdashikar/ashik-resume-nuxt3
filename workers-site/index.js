/**
 * Simple static file server for Cloudflare Pages
 */

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  let path = url.pathname
  
  // Handle root path
  if (path === '/') {
    path = '/index.html'
  }
  
  // Handle paths without file extensions (assume they're routes)
  if (!path.includes('.')) {
    path = `${path}/index.html`
  }

  try {
    // Try to serve the requested file from KV
    return await fetch(new Request(url.origin + path, request))
  } catch (e) {
    // If the file doesn't exist, try to serve index.html for SPA routing
    try {
      return await fetch(new Request(url.origin + '/index.html', request))
    } catch (e) {
      return new Response('Not Found', { status: 404 })
    }
  }
}
