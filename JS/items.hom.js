"use strict";
const products_home = [
    {
        id: 0,
        img: "../img/kids/kids-1.jpeg",
        name: "A chandelier and a baby bed",
        price: 35,
        old_price: 50,
        product_name: "kids"
    },
    {
        id: 1,
        img: "../img/kids/kids-2.jpeg",
        name: "A chandelier and a baby bed",
        price: 33.0,
        old_price: 45.0,
        product_name: "kids"
    },
    {
        id: 2,
        img: "../img/kids/kids-3.jpeg",
        name: "A chandelier and a baby bed",
        price: 30.0,
        old_price: 40.0,
        product_name: "kids"
    },
    {
        id: 3,
        img: "../img/kids/kids-4.jpeg",
        name: "A chandelier and a baby bed",
        price: 28.0,
        old_price: 35.0,
        product_name: "kids"
    },
    {
        id: 4,
        img: "../img/kids/kids-5.jpeg",
        name: "A chandelier and a baby bed",
        price: 28.0,
        product_name: "kids"
    },
    {
        id: 5,
        img: "../img/kids/kids-6.jpeg",
        name: "A chandelier and a baby bed",
        price: 28.0,
        product_name: "kids"
    },
    {
        id: 6,
        img: "../img/kids/kids-7.jpeg",
        name: "A chandelier and a baby bed",
        price: 28.0,
        product_name: "kids"
    },
    {
        id: 7,
        img: "../img/kids/kids-8.jpeg",
        name: "A chandelier and a baby bed",
        price: 28.0,
        product_name: "kids"
    },
    {
        id: 8,
        img: "../img/kids/kids-9.jpeg",
        name: "A chandelier and a baby bed",
        price: 28.0,
        product_name: "kids",
        old_price: 30,
    },
    {
        id: 9,
        img: "../img/kids/kids-11.jpeg",
        name: "A chandelier and a baby bed",
        price: 25.0,
        product_name: "kids",
        old_price: 30,
    },
    {
        id: 10,
        img: "../img/kids/kids-12.jpeg",
        name: "A chandelier and a baby bed",
        price: 28.0,
        product_name: "kids"
    },
    {
        id: 11,
        img: "../img/kids/kids-13.jpeg",
        name: "A chandelier and a baby bed",
        price: 28.0,
        product_name: "kids"
    },
    {
        id: 12,
        img: "../img/kids/kids-14.jpeg",
        name: "A chandelier and a baby bed",
        price: 28.0,
        product_name: "kids"
    },
    {
        id: 13,
        img: "../img/kids/kids-15.jpeg",
        name: "A chandelier and a baby bed",
        price: 30.0,
        product_name: "kids",
        old_price: 36,
    },
    {
        id: 14,
        img: "../img/kids/kids-16.jpeg",
        name: "A chandelier and a baby bed",
        price: 28.0,
        product_name: "kids"
    },
    {
        id: 15,
        img: "../img/kids/kids-17.jpeg",
        name: "A chandelier and a baby bed",
        price: 28.0,
        product_name: "kids"
    },
    {
        id: 16,
        img: "./img/new-collection/new-collection-1.jpeg",
        name: "the-new-collection",
        price: 40.0,
        product_name: "new-collection"
    },
    {
        id: 17,
        img: "./img/new-collection/new-collection-2.jpeg",
        name: "the-new-collection",
        price: 50.0,
        old_price: 55.00,
        product_name: "new-collection"
    },
    {
        id: 18,
        img: "./img/new-collection/new-collection-3.jpeg",
        name: "the-new-collection",
        price: 30.0,
        product_name: "new-collection"
    },
    {
        id: 19,
        img: "./img/new-collection/new-collection-4.jpeg",
        name: "the-new-collection",
        price: 33.0,
        product_name: "new-collection"
    },
    {
        id: 20,
        img: "./img/new-collection/new-collection-5.jpeg",
        name: "the-new-collection",
        price: 22.0,
        product_name: "new-collection"
    },
    {
        id: 21,
        img: "./img/new-collection/new-collection-6.jpeg",
        name: "the-new-collection",
        price: 52.0,
        product_name: "new-collection"
    },
    {
        id: 22,
        img: "./img/new-collection/new-collection-7.jpeg",
        name: "the-new-collection",
        price: 46.0,
        old_price: 60.00,
        product_name: "new-collection"
    },
    {
        id: 23,
        img: "./img/new-collection/new-collection-8.jpeg",
        name: "the-new-collection",
        price: 19.0,
        product_name: "new-collection"
    },
    {
        id: 24,
        img: "./img/new-collection/new-collection-9.jpeg",
        name: "the-new-collection",
        price: 25.0,
        old_price: 40.00,
        product_name: "new-collection"
    },
    {
        id: 25,
        img: "./img/new-collection/new-collection-10.jpeg",
        name: "the-new-collection",
        price: 40.0,
        product_name: "new-collection"
    },
    {
        id: 26,
        img: "./img/new-collection/new-collection-11.jpeg",
        name: "the-new-collection",
        price: 30.0,
        product_name: "new-collection"
    },
    {
        id: 27,
        img: "./img/new-collection/new-collection-12.jpeg",
        name: "the-new-collection",
        price: 29.0,
        old_price: 50.00,
        product_name: "new-collection"
    },
    {
        id: 28,
        img: "../img/girls/girl-1.jpeg",
        name: "the product for girl",
        price: 30.0,
        old_price: 60.00,
        product_name: "girl"
    },
    {
        id: 29,
        img: "../img/girls/girl-2.jpeg",
        name: "the product for girl",
        price: 25.0,
        product_name: "girl"
    },
    {
        id: 30,
        img: "../img/girls/girl-3.jpeg",
        name: "the product for girl",
        price: 33.0,
        product_name: "girl"
    },
    {
        id: 31,
        img: "../img/girls/girl-4.jpeg",
        name: "the product for girl",
        price: 30.0,
        product_name: "girl"
    },
    {
        id: 32,
        img: "../img/girls/girl-5.jpeg",
        name: "the product for girl",
        price: 30.0,
        old_price: 60.00,
        product_name: "girl"
    },
    {
        id: 33,
        img: "../img/girls/girl-6.jpeg",
        name: "the product for girl",
        price: 20.00,
        product_name: "girl"
    },
    {
        id: 34,
        img: "../img/girls/girl-7.jpeg",
        name: "the product for girl",
        price: 30.0,
        old_price: 50.00,
        product_name: "girl"
    },
    {
        id: 35,
        img: "../img/girls/girl-8.jpeg",
        name: "the product for girl",
        price: 30.0,
        product_name: "girl"
    },
    {
        id: 36,
        img: "../img/boy/boy-1.jpeg",
        name: "the product for boy",
        price: 30.0,
        old_price: 50.00,
        product_name: "boy"
    },
    {
        id: 37,
        img: "../img/boy/boy-2.jpeg",
        name: "the product for boy",
        price: 35.0,
        old_price: 50.00,
        product_name: "boy"
    },
    {
        id: 38,
        img: "../img/boy/boy-3.jpeg",
        name: "the product for boy",
        price: 27.00,
        product_name: "boy"
    },
    
    {
        id: 36,
        img: "../img/boy/boy-1.jpeg",
        name: "the product for boy",
        price: 30.0,
        old_price: 50.00,
        product_name: "boy"
    },
    {
        id: 39,
        img: "../img/boy/boy-4.jpeg",
        name: "the product for boy",
        price: 30.0,
        product_name: "boy"
    },
    {
        id: 40,
        img: "../img/boy/boy-5.jpeg",
        name: "the product for boy",
        price: 30.0,
        old_price: 60.00,
        product_name: "boy"
    },
    {
        id: 36,
        img: "../img/boy/boy-1.jpeg",
        name: "the product for boy",
        price: 30.0,
        old_price: 50.00,
        product_name: "boy"
    },

    {
        id: 41,
        img: "../img/boy/boy-6.jpeg",
        name: "the product for boy",
        price: 30.0,
        product_name: "boy"
    },


    {
        id: 100,
        img: "../img/kids/kids-7.jpeg",
        name: "A chandelier and a baby bed",
        price: 28.0,
        product_name: "sale"
    },
    {
        id: 101,
        img: "../img/kids/kids-8.jpeg",
        name: "A chandelier and a baby bed",
        price: 28.0,
        product_name: "sale"
    },
    {
        id: 102,
        img: "../img/kids/kids-9.jpeg",
        name: "A chandelier and a baby bed",
        price: 28.0,
        product_name: "sale",
        old_price: 30,
    },  
    {
        id: 165461,
        img: "../img/kids/kids-1.jpeg",
        name: "A chandelier and a baby bed",
        price: 35,
        old_price: 50,
        product_name: "sale"
    },
];


"use strict";



"use strict";

// دالة لإنشاء بطاقة منتج
function createProductCard(product) {
    return `
        <div class="box bg-white" id="${product.id}">                     
            <img src="${product.img}" alt="img">
            <p class="fs-13">${product.name}</p>
            <span>$${product.price} <del>${product.old_price || ""}</del></span>
            <div class="stars">
                <div class="icons">
                    <div class="star">
                        <i class="fa-solid fa-star c-yellow"></i>
                        <i class="fa-solid fa-star c-yellow"></i>
                        <i class="fa-solid fa-star c-yellow"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <div class="add">
                        <button onclick="addToCart(${product.id})" class="add-To-Cart">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// دالة لعرض المنتجات حسب الفئة
function displayProductsByCategory(category) {
    return products_home.filter(product => product.product_name === category).map(createProductCard).join("");
}

// دالة لعرض المنتجات في قسم محدد
function renderProducts(category, containerSelector) {
    const container = document.querySelector(containerSelector);
    if (container) {
        container.innerHTML = displayProductsByCategory(category);
        console.log(`Products for ${category} have been inserted into the container.`);
    }
}

// عرض المنتجات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    renderProducts("kids", ".products_container_kids");
    renderProducts("new-collection", ".products_container_botom");
    renderProducts("girl", ".products_container_girls");
    renderProducts("boy", ".products_container_boy");
    renderProducts("sale", ".products_container_sale");
});

// إدارة عربة التسوق
let cart = [];

// إضافة منتج إلى العربة
function addToCart(productId) {
    const product = products_home.find(p => p.id === productId);
    if (product && !cart.some(p => p.id === productId)) {
        cart.push(product);
        renderCart();
    }
}

// تحديث عرض العربة
function renderCart() {
    const cartContainer = document.querySelector('.items_in_cart');
    cartContainer.innerHTML = '';
    cart.forEach(product => {
        cartContainer.innerHTML += `
            <div class="items_cart">
                <img src="${product.img}" alt="">
                <div class="content">
                    <h4>${product.name}</h4>
                    <p class="price_cart">$${product.price || 0}</p>
                </div>
                <button class="delete_item" data-id="${product.id}">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;
    });

    // حساب وإظهار الإجمالي
    const total = cart.reduce((acc, product) => acc + (product.price || 0), 0);
    document.querySelector('.pric_cart_total').textContent = `$${total}`;
}

// حذف منتج من العربة
document.querySelector('.items_in_cart').addEventListener('click', (event) => {
    if (event.target.classList.contains('delete_item')) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        cart = cart.filter(product => product.id !== productId);
        renderCart();
    }
});
