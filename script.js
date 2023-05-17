const currentHour = new Date().getHours();
let greeting = '';

if (currentHour >= 5 && currentHour < 12) {
  greeting = 'Good Morning';
} else if (currentHour >= 12 && currentHour < 18) {
  greeting = 'Good Afternoon';
} else {
  greeting = 'Good Evening';
}

const greetingBadge = document.querySelector('.github-greeting-badge');
greetingBadge.textContent = greeting;
