

// document.addEventListener("DOMContentLoaded", function () {
//     const menuToggle = document.getElementById('menu-toggle');
//     const dropdownContent = document.querySelector('.dropdown-content-hidden');
//     const menuIcon = document.getElementById('menu-icon'); 

//     menuToggle.addEventListener('click', function () {
//         dropdownContent.classList.toggle('show'); // `hiddenPart` yerine doğru sınıfı değiştiriyoruz

//         if (menuIcon.classList.contains('fa-bars')) {
//             menuIcon.classList.remove('fa-bars');
//             menuIcon.classList.add('fa-x'); // İkon değişimi burada gerçekleşiyor
//         } else {
//             menuIcon.classList.remove('fa-x');
//             menuIcon.classList.add('fa-bars');
//         }
//     });
// });







// Menü butonuna tıklama olayını dinle
document.getElementById('menu-toggle').addEventListener('click', function () {
    // Dropdown öğesini seç
    const dropdown = document.querySelector('.dropdown-content-hidden');
    
    // "show" sınıfı varsa kaldır, yoksa ekle
    dropdown.classList.toggle('show');
});
