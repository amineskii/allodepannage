document.addEventListener("DOMContentLoaded", function() {
    const sendLocationBtn = document.getElementById("send-location");

    // إرسال الموقع عبر واتساب
    sendLocationBtn.addEventListener("click", function(event) {
        event.preventDefault();
        
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const whatsappLink = `https://wa.me/213000000000?text=📍 موقعي الحالي: https://www.google.com/maps?q=${latitude},${longitude}`;
                window.open(whatsappLink, "_blank");
            }, function(error) {
                alert("⚠️ لم يتمكن المتصفح من الوصول إلى الموقع، الرجاء تمكين خدمة الموقع.");
            });
        } else {
            alert("⚠️ المتصفح لا يدعم خاصية تحديد الموقع.");
        }
    });
});
