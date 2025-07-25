/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {



let list = {
  comma(string) {
    return list.split(string, [','], true)
  },

  space(string) {
    let spaces = [' ', '\n', '\t']
    return list.split(string, spaces)
  },

  split(string, separators, last) {
    let array = []
    let current = ''
    let split = false

    let func = 0
    let inQuote = false
    let prevQuote = ''
    let escape = false

    for (let letter of string) {
      if (escape) {
        escape = false
      } else if (letter === '\\') {
        escape = true
      } else if (inQuote) {
        if (letter === prevQuote) {
          inQuote = false
        }
      } else if (letter === '"' || letter === "'") {
        inQuote = true
        prevQuote = letter
      } else if (letter === '(') {
        func += 1
      } else if (letter === ')') {
        if (func > 0) func -= 1
      } else if (func === 0) {
        if (separators.includes(letter)) split = true
      }

      if (split) {
        if (current !== '') array.push(current.trim())
        current = ''
        split = false
      } else {
        current += letter
      }
    }

    if (last || current !== '') array.push(current.trim())
    return array
  }
}

module.exports = list
list.default = list


/***/ }),
/* 2 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
/* harmony export */ });
// проверка поддержки webp, добавление класса webp или no-webp
function isWebp() {
   //проверка поддержки webp
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   //добавление класса
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
}


/*------------------------------Burger menu---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const menuIcon = document.querySelector(".menu__icon");
   const menuBody = document.querySelector(".menu__body");
   const body = document.querySelector("body");
   const menuBodyClose = document.querySelector(".menu__body-close");
   const menuLinks = menuBody.querySelectorAll("a[href^='#']");

   if (menuIcon && menuBody) {
      menuIcon.addEventListener("click", function () {
         menuIcon.classList.toggle("active");
         menuBody.classList.toggle("active");
         body.classList.toggle("no-scroll");
      });

      menuBody.addEventListener("click", function (event) {
         if (event.target.tagName === "A" || event.target.closest("a")) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });

      if (menuBodyClose) {
         menuBodyClose.addEventListener("click", function () {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         });
      }

      document.addEventListener("click", function (event) {
         if (!menuBody.contains(event.target) && !menuIcon.contains(event.target)) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });

      menuLinks.forEach(link => {
         link.addEventListener("click", function () {
            menuLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
         });
      });

      const sectionElements = Array.from(menuLinks).map(link => {
         const id = link.getAttribute("href").slice(1);
         return document.getElementById(id);
      });

      function onScrollActiveLink() {
         const scrollPos = window.scrollY + window.innerHeight / 3;

         sectionElements.forEach((section, index) => {
            if (section) {
               const offsetTop = section.offsetTop;
               const offsetHeight = section.offsetHeight;

               if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
                  menuLinks.forEach(l => l.classList.remove("active"));
                  menuLinks[index].classList.add("active");
               }
            }
         });
      }

      window.addEventListener("scroll", onScrollActiveLink);
      window.addEventListener("load", onScrollActiveLink);
   }
});


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var postcss_lib_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);



_modules_functions_js__WEBPACK_IMPORTED_MODULE_1__.isWebp();

/*------------------------------ Hero graphic slider ---------------------------*/
const swiper = new Swiper('.hero__slider', {
   direction: 'vertical',
   loop: true,
   slidesPerView: 1,
   spaceBetween: 60,
   speed: 600,
   allowTouchMove: false,
   pagination: {
      el: '.hero__pagination',
      clickable: true,
      renderBullet: function (index, className) {
         return `<span class="${className}"><span class="progress"></span></span>`;
      },
   },
});

/*------------------------------Hero animations---------------------------*/
const timelines = [
   gsap.timeline({ paused: true })
      .add(() => {
         const el = document.querySelector('.card-balance__balance span');
         if (el) el.textContent = '0';
      })
      .add(animateCardHeader('.card-balance'))
      .to('.card-balance-cursor', { opacity: 1, y: 132, duration: 0.7, ease: 'power2.out' })
      .to('.card-balance-cursor', { y: 91, duration: 0.4 })
      .to('.card-balance-cursor', { scale: 0.8, duration: 0.2 })
      .to('.card-balance-cursor', { scale: 1, duration: 0.2 })
      .to('.card-balance__tel-sel', { background: 'rgba(168, 85, 247, 0.6)', duration: 0.1 }, "<")
      .to('.card-balance__screen-1', { opacity: 0, y: "-50%", duration: 0.4 })
      .to('.card-balance__screen-2', { opacity: 1, y: "0", duration: 1 })
      .to('.card-balance-cursor', { y: 58, x: -20, duration: 0.3 }, "-=0.3")
      .to('.card-balance-cursor', { scale: 0.8, duration: 0.2 })
      .to('.card-balance__tel-input', { borderColor: 'rgba(168, 85, 247, 0.5)', duration: 0.3 }, "<")
      .to('.card-balance-cursor', { scale: 1, duration: 0.3 })
      .to('.card-balance__tel-input i', { clipPath: 'inset(0 0% 0 0)', opacity: 1, duration: 0.5 })
      .to('.card-balance-cursor', { y: 116, x: 10, duration: 0.3 })
      .to('.card-balance-cursor', { scale: 0.8, duration: 0.2 })
      .to('.card-balance-cursor', { scale: 1, duration: 0.3 })
      .to('.card-balance__send', { background: 'rgba(168, 85, 247, 0.6)', duration: 0.1 }, "<")
      .to('.card-balance__push', { opacity: 1, x: 0, duration: 1 })
      .add(() => {
         const numberElement = document.querySelector('.card-summ span');
         const obj = { val: 0 };

         gsap.to(obj, {
            val: 30000,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
               numberElement.textContent = formatNumber(obj.val);
            }
         });
      })
      .to({}, { duration: 3 }),


   //2 card
   gsap.timeline({ paused: true })
      .add(() => {
         const balance2 = document.querySelector('.card-boost__balance span');
         if (balance2) balance2.textContent = '30.000';
      })
      .add(animateCardHeader('.card-boost'))
      .to('.card-boost__image svg', {
         clipPath: 'inset(0 0% 0 0)',
         duration: 3,
         ease: 'power2.out'
      })
      .add(() => {
         const numberElement = document.querySelector('.card-boost__balance span');
         const obj = { val: 30000 };

         gsap.to(obj, {
            val: 200000,
            duration: 3,
            ease: "power2.out",
            onUpdate: () => {
               numberElement.textContent = formatNumber(obj.val);
            }
         });
      }, "<")
      .add(() => animatePluses('.card-boost__graphic'), "<+0.3")
      .to({}, { duration: 0.8 }),


   //3 card
   gsap.timeline({ paused: true })
      .add(animateCardHeader('.card-win'))
      .fromTo('.card-win__push', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.5")
      .to('.card-win__balance', { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }, "-=0.5")

      .to({}, { duration: 10 }),

];

function animatePluses(containerSelector) {
   const container = document.querySelector(containerSelector);
   const pluses = container.querySelectorAll('.card-boost__graphic-plus');

   pluses.forEach((plus) => {
      // Рандомная позиция внутри блока (по X и Y)
      const x = Math.random() * container.clientWidth * 0.9;
      const y = Math.random() * container.clientHeight * 0.9;

      gsap.set(plus, {
         x: x,
         y: y,
         opacity: 0,
         scale: 0.5,
      });

      gsap.to(plus, {
         opacity: 1,
         scale: 1.5,
         duration: 0.6,
         ease: "power2.out",
         yoyo: true,
         repeat: 1,
         repeatDelay: 0.5,
         delay: Math.random() * 1.5, // чтобы всплывали не все сразу
         onComplete: () => {
            gsap.set(plus, { opacity: 0, scale: 0.5 });
         }
      });
   });
}


function formatNumber(num) {
   return Math.floor(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function animateCardHeader(cardSelector) {
   return gsap.timeline()

      .fromTo(`${cardSelector} .card-title`,
         {
            clipPath: 'inset(0 100% 0 0)',
            opacity: 0
         },
         {
            clipPath: 'inset(0 0% 0 0)',
            opacity: 1,
            delay: 1,
            duration: 1,
            ease: 'power2.out'
         },
         "-=0.3"
      );
}

function isInViewport(el) {
   const rect = el.getBoundingClientRect();
   return (
      rect.top < window.innerHeight &&
      rect.bottom > 0
   );
}

let activeTimeline = null;

const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         // Если slider попал в зону видимости — запускаем анимацию
         playSlideAnimation(swiper.activeIndex);
         observer.unobserve(entry.target); // убираем наблюдение
      }
   });
}, {
   threshold: 0.3 // когда хотя бы 30% slider в зоне видимости
});

const heroSlider = document.querySelector('.hero__slider');
if (heroSlider) {
   observer.observe(heroSlider);
}


function playSlideAnimation(swiperIndex) {
   const realIndex = swiper.slides[swiperIndex].getAttribute('data-swiper-slide-index');
   const tl = timelines[realIndex];

   const bullets = document.querySelectorAll('.swiper-pagination-bullet');
   const bullet = bullets[realIndex];
   const progress = bullet?.querySelector('.progress');

   // Сброс анимации предыдущего слайда
   if (activeTimeline && activeTimeline !== tl) {
      activeTimeline.pause(0);
   }

   // Сброс всех прогрессов
   document.querySelectorAll('.progress').forEach(p => {
      gsap.killTweensOf(p);
      gsap.set(p, { scaleY: 0 });
   });

   // Обновлённая анимация прогресс-бара
   gsap.set(progress, { scaleY: 0, transformOrigin: 'top' });
   gsap.to(progress, {
      scaleY: 1,
      duration: tl.duration(),
      ease: "none"
   });

   // Активация текущей анимации
   activeTimeline = tl;
   tl.pause(0).restart();

   // Переход на следующий слайд
   tl.eventCallback('onComplete', () => {
      swiper.slideNext();
   });
}

swiper.on('slideChange', () => {
   const index = swiper.activeIndex;
   playSlideAnimation(index);
});


/*------------------------------Other---------------------------*/
window.addEventListener("scroll", function () {
   const header = document.querySelector("header");

   if (window.scrollY > 50) {
      header.classList.add("bg");
   } else {
      header.classList.remove("bg");
   }
});


/*------------------------------Service anim---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const section = document.querySelector(".service");
   const bgLine = document.querySelector(".service__map-road-bg");

   const setBackgroundColorClass = (progress) => {
      section.classList.remove("-bg-purple", "-bg-yellow", "-bg-green");

      if (progress >= 0.75) {
         section.classList.add("-bg-green");
      } else if (progress >= 0.5) {
         section.classList.add("-bg-yellow");
      } else if (progress >= 0.25) {
         section.classList.add("-bg-purple");
      }
   };

   const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      const viewportCenter = windowHeight / 2;
      const distanceToCenter = viewportCenter - rect.top;
      const progress = Math.min(Math.max(distanceToCenter / sectionHeight, 0), 1);

      if (bgLine) {
         bgLine.style.height = `${progress * 100}%`;
      }

      setBackgroundColorClass(progress);
   };

   window.addEventListener("scroll", updateProgress);
   window.addEventListener("resize", updateProgress);
   updateProgress();
   document.querySelector('.preloader').style.display = 'none';
   runAllGSAPAnimations();
});


/*------------------------------
Faq
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const faqItems = document.querySelectorAll(".faq__item");

   if (faqItems.length === 0) return;

   faqItems.forEach((item) => {
      const question = item.querySelector(".faq__question");
      const icon = item.querySelector(".faq__item-icon");
      const answer = item.querySelector(".faq__answer");

      if (!question || !icon || !answer) return;

      const toggleFaqItem = () => {
         const isActive = item.classList.contains("active");

         faqItems.forEach((el) => {
            const elAnswer = el.querySelector(".faq__answer");
            if (elAnswer) {
               el.classList.remove("active");
               elAnswer.style.maxHeight = null;
            }
         });

         if (!isActive) {
            item.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + 40 + "px";
         }
      };

      question.addEventListener("click", toggleFaqItem);
      icon.addEventListener("click", toggleFaqItem);
   });
});


/*------------------------------Слайдер галерея---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const gallerySliderElement = document.querySelector('.testimonials__slider');
   let gallerySlider;

   function initSlider() {
      if (!gallerySlider) {
         gallerySlider = new Swiper(gallerySliderElement, {
            loop: true,
            freeMode: false,
            slidesPerView: 'auto',
            watchOverflow: true,
            grabCursor: true,
            breakpoints: {
               320: {
                  spaceBetween: 10,
               },
               767: {
                  spaceBetween: 19,
               },
               1000: {
                  spaceBetween: 30,
               },
               1920: {
                  spaceBetween: 38,
               },
            },
         });
      }
   }

   initSlider();
});

const screenGroups = document.querySelectorAll(".testimonials__slide-screens");

screenGroups.forEach(group => {
   const imgs = group.querySelectorAll("img");

   imgs.forEach((img, index) => {
      img.addEventListener("click", (e) => {
         e.stopPropagation();

         const dynamicEl = [...imgs].map(el => ({
            src: el.src,
            thumb: el.src,
            subHtml: '',
         }));

         // создаём временный элемент для инициализации
         const tempContainer = document.createElement("div");
         document.body.appendChild(tempContainer);

         const popup = lightGallery(tempContainer, {
            dynamic: true,
            download: false,
            dynamicEl,
            mobileSettings: {
               showCloseIcon: true,
            },
         });

         popup.openGallery(index);

         // Удаляем контейнер после закрытия галереи
         popup.on('lgAfterClose', () => {
            popup.destroy();
            tempContainer.remove();
         });
      });
   });
});

/*------------------------------Calc range---------------------------*/
const sliderContainer = document.querySelector('.slider-container');
const minValue = parseInt(sliderContainer.getAttribute('data-min'));
const maxValue = parseInt(sliderContainer.getAttribute('data-max'));
const step = 100;
const slider = document.querySelector('.range-slider');
const thumb = document.querySelector('.range-slider__thumb');
const tooltip = document.querySelector('.range-slider__tooltip');
const resultValue = document.querySelector('.calculator__result-value');
let isDragging = false;

function updateSlider(position) {
   const sliderRect = slider.getBoundingClientRect();
   let percentage = (position - sliderRect.left) / sliderRect.width;
   percentage = Math.min(Math.max(percentage, 0), 1);
   let value = minValue + percentage * (maxValue - minValue);
   value = Math.round(value / step) * step;
   value = Math.min(Math.max(value, minValue), maxValue);
   thumb.style.left = `${percentage * 100}%`;
   let tooltipLeft = percentage * 100;
   tooltipLeft = Math.min(tooltipLeft, 80);
   tooltip.style.left = `${tooltipLeft}%`;
   tooltip.innerText = `${value.toLocaleString()} руб`;

   // 💰 Выигрыш = (ставка * 6) * 0.7
   const winnings = Math.round((value * 9 - value) * 0.7);
   resultValue.innerText = `${winnings.toLocaleString()} руб.`;
}


function onMove(e) {
   if (isDragging) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      updateSlider(clientX);
   }
}

function startDragging(e) {
   isDragging = true;
   document.body.style.cursor = 'grabbing';
   e.preventDefault();
}

function stopDragging() {
   isDragging = false;
   document.body.style.cursor = 'default';
}

thumb.addEventListener('mousedown', startDragging);
document.addEventListener('mousemove', onMove);
document.addEventListener('mouseup', stopDragging);
thumb.addEventListener('touchstart', startDragging);
document.addEventListener('touchmove', onMove);
document.addEventListener('touchend', stopDragging);
updateSlider(slider.getBoundingClientRect().left + (30000 - minValue) / (maxValue - minValue) * slider.clientWidth);


/*------------------------------Other animations---------------------------*/
gsap.registerPlugin(ScrollTrigger);

function runAllGSAPAnimations() {

   gsap.from('.hero__text, .hero__cards', {
      opacity: 0,
      duration: 1,
      ease: "power1.out",
   });

   gsap.fromTo('.hero__title', {
      clipPath: 'inset(0 100% 0 0)',
      opacity: 0
   },
      {
         clipPath: 'inset(0 0% 0 0)',
         opacity: 1,
         duration: 1,
         ease: 'power2.out'
      },);

   gsap.fromTo('.hero__subtitle', {
      clipPath: 'inset(0 100% 0 0)',
      opacity: 0
   },
      {
         clipPath: 'inset(0 0% 0 0)',
         opacity: 1,
         delay: 0.2,
         duration: 1,
         ease: 'power2.out'
      },);

   gsap.from('.hero__buttons', {
      opacity: 0,
      y: 20,
      delay: 0.4,
   });

   const wrappers = document.querySelectorAll('.service__map-item-wrapper');
   const isMobile = window.innerWidth < 768;

   wrappers.forEach((wrapper, index) => {
      const item = wrapper.querySelector('.service__map-item');
      if (!item) return;

      const directionX = isMobile
         ? -50
         : (index % 2 === 0 ? -50 : 50);

      gsap.from(item, {
         x: directionX,
         opacity: 0,
         duration: 1,
         ease: "power2.out",
         scrollTrigger: {
            trigger: wrapper,
            start: "top 85%",
            toggleActions: "play none none none"
         }
      });
   });

   const counter = document.querySelector('.count');

   if (!counter) return;

   const obj = { val: 30000 };

   gsap.to(obj, {
      val: 200000,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
         counter.textContent = formatWithDots(Math.floor(obj.val));
      },
      scrollTrigger: {
         trigger: counter,
         start: "top 90%",
         toggleActions: "play none none none"
      }
   });

   function formatWithDots(value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
   }


   function animateHeadings() {
      // Анимация .section-label
      document.querySelectorAll('.section-label').forEach((el) => {
         gsap.from(el, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
               trigger: el,
               start: "top 90%",
               toggleActions: "play none none none"
            }
         });
      });

      // Анимация .title
      document.querySelectorAll('.title').forEach((el) => {
         gsap.from(el, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
               trigger: el,
               start: "top 85%",
               toggleActions: "play none none none"
            }
         });
      });

      // Анимация .subtitle
      document.querySelectorAll('.subtitle').forEach((el) => {
         gsap.from(el, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.1,
            ease: "power2.out",
            scrollTrigger: {
               trigger: el,
               start: "top 90%",
               toggleActions: "play none none none"
            }
         });
      });
   }

   animateHeadings();

   const cards = document.querySelectorAll('.how__card');

   gsap.from(cards, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "bounce.out",
      stagger: 0.15,
      scrollTrigger: {
         trigger: ".how__cards",
         start: "top 85%",
         toggleActions: "play none none none"
      }
   });

}
})();

/******/ })()
;