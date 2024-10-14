"use strict";
// تعريف المتغيرات
const countItemCart = document.querySelector('.count_item_cart');
const priceCartTotal = document.querySelector('.pric_cart_total');
const itemsInCart = document.querySelector('.items_in_cart');
// دالة لتحديث عدد العناصر في السلة
function updateCartCount() {
    const itemCount = itemsInCart.children.length;
    countItemCart.textContent =`${itemCount} Item${itemCount !== 0? 's' : ''} in cart `;
}
// دالة لتحديث السعر الإجمالي
function updateCartTotal() {
    let total = 0;
    itemsInCart.querySelectorAll('.price_cart').forEach((priceElement) => {
        var _a;
        const price = parseFloat(((_a = priceElement.textContent) === null || _a === void 0 ? void 0 : _a.replace('$', '')) || '0');
        total += price;
    });
    priceCartTotal.textContent = ` $${total.toFixed(2)} `;
}

// دالة لإزالة عنصر من السلة
function removeItem(event) {
    const target = event.target;
    if (target.classList.contains('delete_item') || target.closest('.delete_item')) {
        const itemToRemove = target.closest('.items_cart');
        itemsInCart.removeChild(itemToRemove);
        updateCartCount();
        updateCartTotal();
    }
}
// إضافة مستمعات الأحداث
document.addEventListener('click', removeItem);
// تحديث السلة عند تحميل الصفحة
updateCartCount();
updateCartTotal();
//cart
// الحصول على زر الإغلاق باستخدام كلاس "close-cart"
// الحصول على العناصر
const closeCartButton = document.querySelector('.close_cart');
const openCartButton = document.querySelector('.open_cart');
const cartElmement = document.querySelector('.cart');
// التأكد من وجود العناصر قبل إضافة المستمعين للأحداث
if (closeCartButton) {
    closeCartButton.addEventListener('click', () => {
        if (cartElmement && cartElmement instanceof HTMLElement) {
            cartElmement.style.right = '-100%'; // إخفاء السلة
        }
        console.log('Cart closed');
    });
}
if (openCartButton) {
    openCartButton.addEventListener('click', () => {
        if (cartElmement && cartElmement instanceof HTMLElement) {
            cartElmement.style.right = '0px'; // إظهار السلة
        }
        console.log('Cart opened');
    });
}
//
//
let menu = document.querySelector(`#menu`);
function open_menu() {
    menu === null || menu === void 0 ? void 0 : menu.classList.add(`activ`);
}
function close_menu() {
    menu === null || menu === void 0 ? void 0 : menu.classList.remove(`activ`);
}
// اضافه لون للينك الصفحه المفتوحه
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const currentUrl = window.location.href;

    // إزالة الصنف "active" من جميع الروابط أولاً
    links.forEach(link => {
        link.classList.remove("active");
    });

    // إضافة الصنف "active" للرابط الذي يتطابق مع رابط الصفحة الحالية
    links.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add("active");
        }
    });
});


// slider product
class Sliders {
    constructor(sliderId, prevBtnId, nextBtnId) {
        this.autoplayDelay = 3000;
        this.sliderItems = document.querySelector(`#${sliderId}`);
        this.slides = Array.from(this.sliderItems.children);
        this.currentIndex = 0;
        document.getElementById(prevBtnId).addEventListener('click', () => this.prevSlide());
        document.getElementById(nextBtnId).addEventListener('click', () => this.nextSlide());
        this.startAutoplay();
    }
    showSlide(index) {
        const totalSlides = this.slides.length;
        if (index >= totalSlides) {
            this.currentIndex = 0;
        }
        else if (index < 0) {
            this.currentIndex = totalSlides - 1;
        }
        else {
            this.currentIndex = index;
        }
        const offset = -this.currentIndex * 15;
        this.sliderItems.style.transform = `translateX(${offset}%)`;
    }
    prevSlide() {
        this.showSlide(this.currentIndex - 1);
    }
    nextSlide() {
        this.showSlide(this.currentIndex + 1);
    }
    startAutoplay() {
        this.auoplntervalId = setInterval(() => {
            this.nextSlide();
        }, this.autoplayDelay);
    }
    stopAutoplay() {
        if (this.auoplntervalId) {
            clearInterval(this.auoplntervalId);
        }
    }
    resetAutoplay() {
        this.stopAutoplay();
        this.startAutoplay;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new Sliders('slider1', 'prevBtn1', 'nextBtn1');
    new Sliders('slider2', 'prevBtn2', 'nextBtn2');
});

//تغيير الخلفيه عشوائي
// مصفوفة الصور
const imgArray = [
    "bg-1.jpg", 
    "bg-2.jpeg", 
    "bg-3.jpeg", 
    "bg-4.jpeg", 
];
// اختيار العنصر الذي تريد تغيير خلفيته
const slider = document.querySelector(".slider");
let interval; // متغير لتخزين معرف التوقيت

// دالة لتغيير الخلفية بشكل عشوائي
function randomizeBackground(backOption) {
    if (backOption) {
        // إذا كان backOption صحيحًا، بدء تغيير الخلفية
        interval = setInterval(() => {
            let randIndex = Math.floor(Math.random() * imgArray.length);
            slider.style.backgroundImage = `url("./img/boy/${imgArray[randIndex]}")`;
        }, 1000);
    } else {
        // إذا كان backOption خاطئًا، قم بإيقاف تغيير الخلفية
        clearInterval(interval);
    }
}

// استدعاء الدالة مع تمرير true لتفعيل الخلفية العشوائية
randomizeBackground(true);




document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link"); // تحديد الروابط في التنقل

    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // منع الانتقال الفوري للصفحة

            // إضافة تأثير fade-out إلى body
            document.body.classList.add("fade-out");

            // الانتقال إلى الرابط بعد انتهاء التأثير
            setTimeout(() => {
                window.location.href = link.href;
            }, 200); // نفس مدة التأثير (0.5 ثانية)
        });
    });
});
