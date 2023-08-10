// Lấy tất cả các thẻ div có class là phan_tu
var divs = document.querySelectorAll(".phan_tu");

// Thêm sự kiện click cho mỗi thẻ div
divs.forEach(function(div) {
    div.addEventListener("click", function(event) {
        // In ra thẻ div được click
        console.log(event.target);

        // đổi màu phần tử được click
        event.target.style.background = "rgb(0, 163, 108)";
    });
});