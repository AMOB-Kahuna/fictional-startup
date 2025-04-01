import { banners } from "./banner.js";  // Importing the banners array from banner.js
import { features } from "./feature.js";  // Importing the features array from feature.js
import { products } from "./product.js";  // Importing the products array from product.js
import { testimonials } from "./testimonial.js";  // Importing the testimonials array from testimonial.js



function $(sel) {
    return document.querySelector(sel);
}
function $A(sels) {
    return document.querySelectorAll(sels);
}

banners.forEach((banner) => {
    $("#banners").innerHTML += `
        <div id="${banner.id}" class="banner">
            <div class="${banner.class}">
                ${banner.textHTML}
            </div>
        </div>`
})

features.forEach((feature) => {
    $("#features").innerHTML += `
        <div class="feature">
            <i class="fa fa-4x ${feature.icon} icon"></i>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        </div>`
})

testimonials.forEach((testimonial) => {
    $("#testimonials-container").innerHTML += `
    <div class="testimonial" id="${testimonial.id}">
        <div class="${testimonial.side}">
            <p>"${testimonial.text}"<span class="speaker">- ${testimonial.speaker}</span></p>
        </div>
        <div class="image"></div>
    </div>`
})

products.forEach((product) => {
    $("#products-inner").innerHTML += `
    <div class="product">
        <img src="./images/${product.image}">
        <h3 class="product_details">
            ${product.details}
        </h3>
    </div>`
})


$(".logo_text").addEventListener("click", () => {
    location.assign("#top");
})
$(".menu i").addEventListener("click", () => {
    if ($(".navbar").classList.contains("open")) {
        $(".navbar").classList.remove("open");
    } else {
        $(".navbar").classList.add("open");
    }
})
$A(".navbar a").forEach((link) => {
    link.addEventListener("click", () => {
        $(".navbar").classList.remove("open");
    })
})
$A(".banners .buttons .btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        $A(".banners .buttons .btn").forEach((btn) => {
            btn.classList.remove("active");
        });
        btn.classList.add("active");
        $A(".banner").forEach((banner) => {
            banner.style.display = "none";
        })
        $("#" + btn.getAttribute("data-for")).style.display = "block";
    })
})
$A(".testimonials .buttons .btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        $A(".testimonials .buttons .btn").forEach((btn) => {
            btn.classList.remove("active");
        });
        btn.classList.add("active");
        $A(".testimonial").forEach((testimonial) => {
            testimonial.style.display = "none";
        })
        $("#" + btn.getAttribute("data-for")).style.display = "flex";
    })
})
