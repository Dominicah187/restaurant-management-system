// Select elements for mobile menu toggle
const mobile = document.querySelector('.menu-toggle');
const mobilelink = document.querySelector('.sidebar');

// Toggle menu visibility
mobile.addEventListener('click', function () {
    mobile.classList.toggle('is-active');
    mobilelink.classList.toggle('active');
});

// Close menu when clicking outside or on a specific element
document.addEventListener('click', function (e) {
    if (
        window.innerWidth <= 768 &&
        !mobile.contains(e.target) && 
        !mobilelink.contains(e.target)
    ) {
        mobile.classList.remove('is-active');
        mobilelink.classList.remove('active');
    }
});

// Move the menu to the right and left when clicking back and next buttons
var step = 100;
var stepFilter = 60;

$(".back").on("click", function(e) {
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
});

$(".next").on("click", function(e) {
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + step + "px"
    });
});

// When click back and next menu filter
$(".back-menus").on("click", function(e) {
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "-=" + stepFilter + "px"
    });
});

$(".next-menus").on("click", function(e) {
    e.preventDefault();
    $(".filter-wrapper").animate({
        scrollLeft: "+=" + stepFilter + "px"
    });
});
