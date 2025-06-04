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

        if (clickedX > selectorWidth - 30) {
            dropdown.style.display = dropdown.style.display === 'block' ? "none" : "block";
        }
    });
});

const options = dropdown.querySelectorAll(".wizzy-common-select-option,.wizzy-common-select-optioned");
    options.forEach(option => {
        option.addEventListener("click",function() {
            selectedItem.textContent = this.textContent.trim();

            options.forEach(opt => opt.classList.remove("selected"));
            this.classList.add("selected");

            dropdown.style.display = "none";
        });
    });

    document.addEventListener("click",function(event) {
        const isInside = selector.contains(event.target) 
    })