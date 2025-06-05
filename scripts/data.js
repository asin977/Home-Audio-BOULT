document.addEventListener("DOMContentLoaded", function () {
    const faqTitles = document.querySelectorAll('.faq-title');
    faqTitles.forEach((title) => {
        title.addEventListener('click', function () {
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

document.addEventListener("DOMContentLoaded", function () {
    const selector = document.querySelector(".wizzy-common-select-selector");
    const dropdown = document.querySelector(".wizzy-common-select-options");
    const selectedItem = document.querySelector(".wizzy-common-select-selectedItem");
    selector.addEventListener("click", function (event) {
        const clickedX = event.offsetX;
        const selectorWidth = selector.offsetXWidth;

        if (clickedX > selectorWidth - 30) {
            dropdown.style.display = dropdown.style.display === 'block' ? "none" : "block";
        }
    });
});

const options = dropdown.querySelectorAll(".wizzy-common-select-option,.wizzy-common-select-optioned");
options.forEach(option => {
    option.addEventListener("click", function () {
        selectedItem.textContent = this.textContent.trim();

        options.forEach(opt => opt.classList.remove("selected"));
        this.classList.add("selected");

        dropdown.style.display = "none";
    });
});

document.addEventListener("click", function (event) {
    const isInside = selector.contains(event.target) ||
        dropdown.contains(event.target);
    if (!isInside) {
        dropdown.style.display = "none";
    };
});

document.addEventListener("DOMContentLoaded", function () {
    const facetBlocks = document.querySelectorAll(".facet-block-product-value");

    facetBlocks.forEach(block => {
        const plusIcon = block.querySelector(".facet-head-right");

        const facetBody = block.querySelector(".wizzy-facet-body");

        plusIcon.addEventListener("click", function (event) {
            event.stopPropagation();

            const isVisible = facetBody.style.display === "block";
            facetBody.style.display = isVisible ?
                "none" : "block";
        });
    });

    document.addEventListener("click",function (event) {
       document.querySelectorAll(".facet-block-product-value").forEach(block => {
            const plusIcon = block.querySelector(".facet-head-right");

            const facetBody = block.querySelector(".wizzy-facet-body");

            if (!block.contains(event.target)) {
                facetBody.style.display = "none";
            }
       });
    });
   

});

document.addEventListener("DOMContentLoaded",function(){
    const priceRange = document.querySelector(".wizzy-price-range");
    const priceInput = document.querySelector(".wizzy-price-input");
}) 

document.addEventListener("DOMContentLoaded", function () {
    const facetBlocks = document.querySelectorAll(".facet-block-product-value");

    facetBlocks.forEach(block => {
        const plusIcon = block.querySelector(".facet-head-right");
        const facetBody = block.querySelector(".wizzy-facet-body");

        plusIcon.addEventListener("click", function (event) {
            event.stopPropagation();

            const isVisible = facetBody.style.display === "block";
            facetBody.style.display = isVisible ? "none" : "block";

            
            if (isVisible) {
                plusIcon.classList.remove("minus-icon");
                plusIcon.classList.add("plus-icon");
            } else {
                plusIcon.classList.remove("plus-icon");
                plusIcon.classList.add("minus-icon");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".submenu-toggle");
  
    toggleButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const submenu = button.nextElementSibling;
  
        if (submenu) {
          const isActive = submenu.classList.contains("active");
  
          if (isActive) {
            submenu.classList.remove("active");
            submenu.style.display = 'none';
            button.setAttribute("aria-expanded", "false");
            button.textContent = "+";
          } else {
            submenu.classList.add("active");
            submenu.style.display = 'block';
            button.setAttribute("aria-expanded", "true");
            button.textContent = "−";
          }
        }
      });
    });
  });



document.addEventListener("DOMContentLoaded", () => {
    const lifestyleTrigger = Array.from(document.querySelectorAll('.dropDownActive')).find(el =>
      el.textContent.includes("Shop by lifestyle")
    );
  
    if (lifestyleTrigger) {
      lifestyleTrigger.addEventListener("click", (e) => {
        e.preventDefault();
        const parentLi = lifestyleTrigger.closest("li");
        const dropdownMenu = parentLi.querySelector(".mobile-dropdown-child");
        const arrowIcon = lifestyleTrigger.querySelector(".arrowDown");
  
        if (dropdownMenu.classList.contains("open")) {
          dropdownMenu.classList.remove("open");
          dropdownMenu.style.maxHeight = null;
          if (arrowIcon) arrowIcon.style.transform = "rotate(0deg)";
        } else {
          dropdownMenu.classList.add("open");
          dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
          if (arrowIcon) arrowIcon.style.transform = "rotate(180deg)";
        }
      });
    }
  });
  