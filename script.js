document.addEventListener("DOMContentLoaded", function() {
    const servicesPopup = document.getElementById("services-popup");
    const exploreServicesBtn = document.getElementById("explore-services");
    const closeBtn = document.querySelector(".close-btn");

    // عرض النافذة المنبثقة عند الضغط على "استكشاف الخدمات"
    exploreServicesBtn.addEventListener("click", function(event) {
        event.preventDefault();
        servicesPopup.style.display = "flex";
    });

    // إغلاق النافذة عند الضغط على زر الإغلاق
    closeBtn.addEventListener("click", function() {
        servicesPopup.style.display = "none";
    });

    // إغلاق النافذة عند الضغط خارجها
    window.addEventListener("click", function(event) {
        if (event.target === servicesPopup) {
            servicesPopup.style.display = "none";
        }
    });
});
