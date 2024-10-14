
// تعريف المتغيرات
const countItemCart = document.querySelector('.count_item_cart') as HTMLSpanElement;
const priceCartTotal = document.querySelector('.pric_cart_total') as HTMLParagraphElement;
const itemsInCart = document.querySelector('.items_in_cart') as HTMLDivElement;

// دالة لتحديث عدد العناصر في السلة
function updateCartCount() {
  const itemCount = itemsInCart.children.length;
  countItemCart.textContent = ` ${itemCount} Item${itemCount !== 1 ? 's' : ''} in cart `;
}

// دالة لتحديث السعر الإجمالي
function updateCartTotal() {
  let total = 0;
  itemsInCart.querySelectorAll('.price_cart').forEach((priceElement) => {
    const price = parseFloat(priceElement.textContent?.replace('$', '') || '0');
    total += price;
  });
  priceCartTotal.textContent = ` $${total.toFixed(2)} `;
}

// دالة لإزالة عنصر من السلة
function removeItem(event: Event) {
  const target = event.target as HTMLElement;
  if (target.classList.contains('delete_item') || target.closest('.delete_item')) {
    const itemToRemove = target.closest('.items_cart') as HTMLDivElement;
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

let menu = document.querySelector(`#menu`) as HTMLUListElement

function open_menu() {
    menu?.classList.add(`activ`)
}

function close_menu() {
    menu?.classList.remove(`activ`)
}

//


  // slider product
class Sliders {
  private slides: HTMLElement[];
  private currentIndex: number;
  private sliderItems: HTMLElement;
  private auoplntervalId: number |undefined;
  private readonly autoplayDelay: number = 3000;

  constructor(sliderId:string, prevBtnId: string, nextBtnId: string) {
      this.sliderItems = document.querySelector(`#${sliderId}`) as HTMLElement;
      this.slides = Array.from(this.sliderItems.children) as HTMLElement[];
      this.currentIndex = 0;

      document.getElementById(prevBtnId)!.addEventListener('click', () => this.prevSlide());
      document.getElementById(nextBtnId)!.addEventListener('click', () => this.nextSlide());

      this.startAutoplay();
  }



  private showSlide(index: number): void {
      const totalSlides = this.slides.length;
      if (index >= totalSlides) {
          this.currentIndex = 0;
      } else if (index < 0) {
          this.currentIndex = totalSlides - 1;
      } else {
          this.currentIndex = index;
      }
      const offset = -this.currentIndex * 15;
      this.sliderItems.style.transform = `translateX(${offset}%)`;
  }

  private prevSlide(): void {
      this.showSlide(this.currentIndex - 1);
  }

  private nextSlide(): void {
      this.showSlide(this.currentIndex + 1);
  }

  private startAutoplay(): void{
    this.auoplntervalId = setInterval( () => {
    this.nextSlide();
    },this.autoplayDelay);
  }

  private stopAutoplay(): void{
    if(this.auoplntervalId) {
      clearInterval(this.auoplntervalId);
    }
  }

  private resetAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay
  }

}

  

document.addEventListener('DOMContentLoaded', () => {
  new Sliders('slider1', 'prevBtn1', 'nextBtn1');
  new Sliders('slider2', 'prevBtn2', 'nextBtn2');
});


