!function(){!function(){var e={openMobileMenuBtn:document.querySelector("[data-mobile-menu-open]"),closeMobileMenuBtn:document.querySelector("[data-mobile-menu-close]"),mobileMenu:document.querySelector("[data-mobile-menu]")};function o(){e.mobileMenu.classList.toggle("is-hidden")}e.openMobileMenuBtn.addEventListener("click",o),e.closeMobileMenuBtn.addEventListener("click",o)}(),$(".slider").slick({arrows:!1,dots:!0,adaptiveHeight:!0,speed:750,easing:"cubic-bezier(0.4, 0, 0.2, 1)",infinite:!0,autoplay:!0,autoplaySpeed:5e3,pauseOnDotsHover:!0,pauseOnHover:!0,touchThreshold:15,waitForAnimate:!1,asNavFor:".slider-image"}),$(".slider-image").slick({arrows:!1,speed:750,easing:"cubic-bezier(0.4, 0, 0.2, 1)",infinite:!0,autoplay:!1,autoplaySpeed:5e3,pauseOnDotsHover:!0,pauseOnHover:!0,touchTreshold:15,waitForAnimate:!1,fade:!0}),function(){var e={openModalBtn:document.querySelector("[data-modal-question-open]"),closeModalBtn:document.querySelector("[data-modal-question-close]"),modal:document.querySelector("[data-modal-question]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),console.log("Hello, World!");var e=document.querySelector(".totop"),o=document.querySelector(".totop__svg-path"),t=o.getTotalLength();o.style.strokeDasharray="".concat(t," ").concat(t),o.style.transition="stroke-dashoffset 20ms";var n=function(){return window.pageYOffset||document.documentElement.scrollTop};window.addEventListener("scroll",(function(){var a,d;a=document.documentElement.scrollHeight-window.innerHeight,d=t-n()*t/a,o.style.strokeDashoffset=d,n()>100?e.classList.add("totop--active"):e.classList.remove("totop--active")})),e.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),$(document).ready((function(){$("a").on("click",(function(e){if(""!==this.hash){e.preventDefault();var o=this.hash;$("html, body").animate({scrollTop:$(o).offset().top},800,(function(){window.location.hash=o}))}}))})),function(){var e={openModalBtn:document.querySelector("[data-modal-buy-open]"),closeModalBtn:document.querySelector("[data-modal-buy-close]"),modal:document.querySelector("[data-modal-buy]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-about-open]"),closeModalBtn:document.querySelector("[data-modal-about-close]"),modal:document.querySelector("[data-modal-about]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-location-open]"),closeModalBtn:document.querySelector("[data-modal-location-close]"),modal:document.querySelector("[data-modal-location]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-mobile-buy-open]"),closeModalBtn:document.querySelector("[data-modal-mobile-buy-close]"),modal:document.querySelector("[data-modal-mobile-buy]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-open-third]"),closeModalBtn:document.querySelector("[data-modal-close-third]"),modal:document.querySelector("[data-modal-third]")};function o(){e.modal.classList.toggle("is-hidden-third")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-open-secondary]"),closeModalBtn:document.querySelector("[data-modal-close-secondary]"),modal:document.querySelector("[data-modal-secondary]")};function o(){e.modal.classList.toggle("is-hidden-secondary")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-open-primary]"),closeModalBtn:document.querySelector("[data-modal-close-primary]"),modal:document.querySelector("[data-modal-primary]")};function o(){e.modal.classList.toggle("is-hidden-primary")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-franchisel-open]"),closeModalBtn:document.querySelector("[data-modal-franchisel-close]"),modal:document.querySelector("[data-modal-franchisel]")};function o(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}()}();
//# sourceMappingURL=index.f3e38985.js.map