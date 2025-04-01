function $(sel) {
    return document.querySelector(sel);
}
function $A(sels) {
    return document.querySelectorAll(sels);
}
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
