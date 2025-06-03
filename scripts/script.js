 document.addEventListener("DOMContentLoaded", function() {
    const faqTitles = document.querySelectorAll('.faq-title');

    faqTitles.forEach((title) => {
      title.addEventListener('click', function() {
        this.classList.toggle('active');

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
  
    // Find the plus sign icon (inserted via ::after or :after pseudo-element)
    // So instead, we attach click to the entire selector and check if it's the icon area
    selector.addEventListener("click", function (event) {
      const clickedX = event.offsetX;
      const selectorWidth = selector.offsetWidth;
  
      // Assume last 30px of selector is the "plus" area (you can fine-tune this)
      if (clickedX > selectorWidth - 30) {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
      }
    });
  
    
    const options = dropdown.querySelectorAll(".wizzy-common-select-option, .wizzy-common-select-optioned");
  
    options.forEach(option => {
      option.addEventListener("click", function () {
        selectedItem.textContent = this.textContent.trim();
  
        options.forEach(opt => opt.classList.remove("selected"));
        this.classList.add("selected");
  
        dropdown.style.display = "none";
      });
    });
  
    
    document.addEventListener("click", function (event) {
      const isInside = selector.contains(event.target) || dropdown.contains(event.target);
      if (!isInside) {
        dropdown.style.display = "none";
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const facetBlocks = document.querySelectorAll(".facet-block-product-value");
  
    facetBlocks.forEach(block => {
      const plusIcon = block.querySelector(".facet-head-right");
      const facetBody = block.querySelector(".wizzy-facet-body");
  
      plusIcon.addEventListener("click", function (event) {
        
        event.stopPropagation();
  
  
        const isVisible = facetBody.style.display === "block";
        facetBody.style.display = isVisible ? "none" : "block";
      });
    });
  
    
    document.addEventListener("click", function (event) {
      document.querySelectorAll(".facet-block-product-value").forEach(block => {
        const plusIcon = block.querySelector(".facet-head-right");
        const facetBody = block.querySelector(".wizzy-facet-body");
  
        if (!block.contains(event.target)) {
          facetBody.style.display = "none";
        }
      });
    });
  });
  
  
 
