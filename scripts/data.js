document.addEventListener("DOMContentLoaded", function () {
      const faqTitles = document.querySelectorAll('.faq-title');
        faqTitles.forEach((title)=> {
            title.addEventListener('click',function() {
                this.classList.toggle("active");

                const answer = this.nextElementSibling;
                if (answer.style.display === "block") {
                    answer.style.display = "none";
                } else {
                    answer.style.display = "block";
                }
            });
        });
});   

document.addEventListener("DOMContentLoaded",function() {
    const selector = document.querySelector(".wizzy-common-select-selector");
    const dropdown = document.querySelector(".wizzy-common-select-options");
    const selectedItem = document.querySelector(".wizzy-common-select-selectedItem");
    selector.addEventListener("click",function(event) {
        const clickedX = event.offsetX;
        const selectorWidth = selector.offsetXWidth;
    })
})