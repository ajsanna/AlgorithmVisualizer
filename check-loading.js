// This script will help diagnose loading issues
console.log('Check loading script is running');

// Check if the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded');
  
  // Check if React is loaded
  if (window.React) {
    console.log('React is loaded');
  } else {
    console.log('React is NOT loaded');
  }
  
  // Check if Next.js is loaded
  if (window.__NEXT_DATA__) {
    console.log('Next.js is loaded');
  } else {
    console.log('Next.js is NOT loaded');
  }
  
  // Add a visible indicator to the page
  const indicator = document.createElement('div');
  indicator.style.position = 'fixed';
  indicator.style.top = '10px';
  indicator.style.right = '10px';
  indicator.style.padding = '10px';
  indicator.style.backgroundColor = 'green';
  indicator.style.color = 'white';
  indicator.style.zIndex = '9999';
  indicator.textContent = 'JavaScript is running';
  document.body.appendChild(indicator);
}); 