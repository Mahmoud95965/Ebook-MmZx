/*=============== SEARCH ===============*/
const searchButton = document.getElementById("search-button"),
  searchClose = document.getElementById("search-close"),
  searchContent = document.getElementById("search-content");
/*====== MENU SHOW =======*/
if (searchButton) {
  searchButton.addEventListener("click", () => {
    searchContent.classList.add("show-search");
  });
}
/*====== MENU HIDE =======*/
if (searchClose) {
  searchClose.addEventListener("click", () => {
    searchContent.classList.remove("show-search");
  });
}

/*=============== LOGIN ===============*/
const userButton = document.getElementById("user-button"),
  loginClose = document.getElementById("login-close"),
  loginContent = document.getElementById("login-content");
/*====== LOGIN SHOW =======*/
if (userButton) {
  userButton.addEventListener("click", () => {
    loginContent.classList.add("show-login");
  });
}
/*====== LOGIN HIDE =======*/
if (loginClose) {
  loginClose.addEventListener("click", () => {
    loginContent.classList.remove("show-login");
  });
}

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  // When scroll is greater than 50 viewport height, add the scroll-header class to header tag.
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);
/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper(".home__swiper", {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    1220: {
      spaceBetween: -32,
    },
  },
});

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper(".featured__swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1150: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper(".new__swiper", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 3,
    },
  },
});
/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper(".testimonial__swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
});
/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When scroll is higher than 350 viewport height, add the show-scroll class to the a tag with scrollup class.
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        `.nav__menu a[href*= ${sectionId}]`
      );
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add("active_link");
    } else {
      sectionClass.classList.remove("active_link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-sun-line" : "ri-moon-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2500",
  delay: "400",
  reset: true,
});

sr.reveal(`.home__data, .featured__container, .new__container,
            .join__data, .testimonial__container, .footer`);
sr.reveal(`.home__images`, { delay: 600 });
sr.reveal(`.services__card`, { interval: 100 });
sr.reveal(`.discount__data`, { origin: "left" });
sr.reveal(`.discount__images`, { origin: "right" });

// إخفاء صفحة التحميل بعد 3 ثواني
window.addEventListener('load', function() {
  setTimeout(function() {
      document.querySelector('.loader').style.display = 'none';
  }, 3000);
});

  // ...existing code...
  
  function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("Message").value,
    };
    
    const serviceID = "service_2biuiqk";
    const templateID = "template_8n2mh02";
    
    emailjs.send(serviceID, templateID, params)
      .then(res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("Message").value = "";
        console.log(res);
        alert("Your message sent successfully!!");
  
        // إرسال رسالة ترحيبية تلقائية
        sendWelcomeEmail(params.email);
      })
      .catch(err => console.log(err));
  }
  
  function sendWelcomeEmail(userEmail) {
    var welcomeParams = {
      to_email: userEmail,
      subject: "Welcome to Our Website",
      message: "Thank you for contacting us! We are glad to have you."
    };
  
    const welcomeTemplateID = "template_welcome";
  
    emailjs.send(serviceID, welcomeTemplateID, welcomeParams)
      .then(res => {
        console.log("Welcome email sent successfully!");
      })
      .catch(err => console.log(err));
  }

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');

  loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
          const response = await fetch('/api/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ email, password })
          });

          const data = await response.json();
          if (response.ok) {
              alert('Login successful!');
              // Redirect to home page or another page
          } else {
              alert(data.message || 'Login failed');
          }
      } catch (error) {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
      }
  });

  registerForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      try {
          const response = await fetch('/api/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ username, email, password })
          });

          const data = await response.json();
          if (response.ok) {
              alert('Registration successful!');
              // Redirect to login page
          } else {
              alert(data.message || 'Registration failed');
          }
      } catch (error) {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');
      }
  });
});

function onGoogleSignIn(googleUser) {
  // الحصول على معلومات المستخدم
  var profile = googleUser.getBasicProfile();
  var id_token = googleUser.getAuthResponse().id_token;

  console.log('ID: ' + profile.getId());
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail());

  // إرسال Token إلى الخادم لحفظ البيانات
  fetch('/save-user-data', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          id_token: id_token,
          name: profile.getName(),
          email: profile.getEmail()
      })
  }).then(response => {
      if (response.ok) {
          console.log('Data saved successfully');
      } else {
          console.error('Failed to save data');
      }
  });
}

document.getElementById('signOutButton').addEventListener('click', function () {
  gapi.auth2.getAuthInstance().signOut().then(function () {
      console.log('User signed out.');
      //你可以 هنا إعادة توجيه المستخدم إلى صفحة أخرى
      window.location.href = '/logout';
  });
});




document.getElementById("login-close").addEventListener("click", function() {
  document.getElementById("myDropdown").classList.toggle("show");
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#login-close')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}