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

   if (menuIcon && menuBody) {
      // Открытие/закрытие меню по иконке
      menuIcon.addEventListener("click", function () {
         menuIcon.classList.toggle("active");
         menuBody.classList.toggle("active");
         body.classList.toggle("no-scroll");
      });

      // Закрытие меню при клике на ссылку внутри меню
      menuBody.addEventListener("click", function (event) {
         if (event.target.tagName === "A" || event.target.closest("a")) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });

      // Закрытие меню при клике на кнопку закрытия
      if (menuBodyClose) {
         menuBodyClose.addEventListener("click", function () {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         });
      }

      // Закрытие меню при клике вне области меню
      document.addEventListener("click", function (event) {
         if (!menuBody.contains(event.target) && !menuIcon.contains(event.target)) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });
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
      .to('.card-balance-cursor', { opacity: 1, y: 132, duration: 1, ease: 'power2.out' })
      .to('.card-balance-cursor', { y: 91, duration: 0.5 })
      .to('.card-balance-cursor', { scale: 0.8, duration: 0.2 })
      .to('.card-balance-cursor', { scale: 1, duration: 0.3 })
      .to('.card-balance__tel-sel', { background: 'rgba(168, 85, 247, 0.6)', duration: 0.1 }, "<")
      .to('.card-balance__screen-1', { opacity: 0, y: "-50%", duration: 1 })
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
         duration: 5,
         ease: 'power2.out'
      })
      .add(() => {
         const numberElement = document.querySelector('.card-boost__balance span');
         const obj = { val: 30000 };

         gsap.to(obj, {
            val: 200000,
            duration: 4,
            ease: "power2.out",
            onUpdate: () => {
               numberElement.textContent = formatNumber(obj.val);
            }
         });
      }, "<")
      .add(() => animatePluses('.card-boost__graphic'), "<+0.3")
      .to({}, { duration: 0.5 }),


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
            duration: 2,
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

})();

/******/ })()
;