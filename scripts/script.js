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
  
  
    selector.addEventListener("click", function (event) {
      const clickedX = event.offsetX;
      const selectorWidth = selector.offsetWidth;
  
      
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
      const minusIcon = block.querySelector(".facet-head-left");
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
  
  
  
  document.querySelectorAll("#product-grid li.swiper-slide").forEach(li => {
    
    const priceText = li.querySelector(".new-price")?.textContent || "₹0";
    const price = parseInt(priceText.replace(/[^\d]/g, ""), 10) || 0;
    li.setAttribute("data-price", price);
  
    
    const title = li.querySelector(".fc-title h2")?.textContent || "";
    const activity = title.toLowerCase().includes("retroamp") ? "Audiophile" : "Other";
    li.setAttribute("data-activity", activity);
  });


async function fetchProducts() {
  try {
    const response = await fetch('products.json'); 
    if (!response.ok) throw new Error('Network response was not ok');
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}


const sortFunctions = {
  
  'Recommended': (a, b) => a.bestSellingRank - b.bestSellingRank,

  'Best selling': (a, b) => a.bestSellingRank - b.bestSellingRank,

  'Price, Low to High': (a, b) => a.priceNew - b.priceNew,

  'Price, High to Low': (a, b) => b.priceNew - a.priceNew,

  'Date, New to Old': (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded),

  'Date, Old to New': (a, b) => new Date(a.dateAdded) - new Date(b.dateAdded)
};

async function getSortedProducts(criteria) {
  const products = await fetchProducts();

  if (!sortFunctions[criteria]) {
    console.warn('Unknown sort criteria, returning unsorted list');
    return products;
  }

  return products.sort(sortFunctions[criteria]);
}


getSortedProducts('Price, Low to High').then(sortedProducts => {
  console.log('Sorted products:', sortedProducts);

});


document.addEventListener("DOMContentLoaded", () => {
  // Get all price facet headers
  const priceHeaders = document.querySelectorAll(".wizzy-facet-head");

  priceHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const facetBlock = header.closest(".wizzy-filters-facet-block");
      const facetList = facetBlock.querySelector(".wizzy-facet-list");

      if (facetList.style.display === "none" || !facetList.style.display) {
        facetList.style.display = "block";
      } else {
        facetList.style.display = "none";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  
  const dropDownLink = document.querySelector(".dropDownActive");

  if (dropDownLink) {
    dropDownLink.addEventListener("click", (event) => {
      event.preventDefault(); 

      const dropdown = dropDownLink.closest("li").querySelector(".mobile-dropdown-child");

      if (dropdown.style.display === "none" || !dropdown.style.display) {
        dropdown.style.display = "block";
        dropDownLink.querySelector(".arrowDown").style.transform = "rotate(180deg)";
      } else {
        dropdown.style.display = "none";
        dropDownLink.querySelector(".arrowDown").style.transform = "rotate(0deg)";
      }
    });
  }
});



  document.addEventListener("DOMContentLoaded", () => {
    const dropdownToggles = document.querySelectorAll(".dropDownActive");

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();

        const parentLi = toggle.closest(".mobile-menu-link");
        const dropdown = parentLi.querySelector(".mobile-dropdown-child");

        if (dropdown) {
          parentLi.classList.toggle("open");
          dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        }
      });
    });
  });


//   const lifestyleToggle = Array.from(document.querySelectorAll('.dropDownActive')).find(el =>
//     el.textContent.includes("Shop by lifestyle")
//   );

//   if (lifestyleToggle) {
//     lifestyleToggle.addEventListener("click", function (e) {
//       e.preventDefault();

//       const dropdownItems = lifestyleToggle
//         .closest("li")
//         .querySelectorAll(".childDropDownA1, .childDropDownA2, .childDropDownA3, .childDropDownA4");

//       const arrow = lifestyleToggle.querySelector(".arrowDown");

//       dropdownItems.forEach(item => {
//         if (item.style.maxHeight) {
//           item.style.maxHeight = null;
//           item.style.opacity = 0;
//         } else {
//           item.style.maxHeight = item.scrollHeight + "px";
//           item.style.opacity = 1;
//         }
//       });

//       if (arrow) {
//         arrow.style.transform = arrow.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
//       }
//     });
//   }
// });



  document.addEventListener("DOMContentLoaded", () => {
    const dropdownToggles = document.querySelectorAll(".dropDownActive");

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();

        const parentLi = toggle.closest(".mobile-menu-link");
        const dropdownMenu = parentLi.querySelector(".mobile-dropdown-child");
        const arrowIcon = toggle.querySelector(".arrowDown");

        if (dropdownMenu) {
          const isVisible = dropdownMenu.style.display === "block";
          dropdownMenu.style.display = isVisible ? "none" : "block";

          // Optional: rotate arrow
          arrowIcon.style.transform = isVisible ? "rotate(0deg)" : "rotate(180deg)";
          arrowIcon.style.transition = "transform 0.3s ease";
        }
      });
    });
  });




  const menuIcon = document.getElementById('menu-icon');
  const mobileNav = document.getElementById('WI-mobile-nav-body');

  menuIcon.addEventListener('click', () => {
    if (mobileNav.style.display === 'block') {
      mobileNav.style.display = 'none';
    } else {
      mobileNav.style.display = 'block';
    }
  });




  document.addEventListener("DOMContentLoaded", () => {
    const copyButtons = document.querySelectorAll(".copy-btn");

    copyButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const code = button.getAttribute("data-copy");

      
        navigator.clipboard.writeText(code).then(() => {
        
          const originalText = button.textContent;
          button.textContent = "Copied✅";
          button.disabled = true;
          setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
          }, 2000);
        }).catch((err) => {
          console.error("Failed to copy:", err);
        });
      });
    });
  });
 
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const dropdownToggles = document.querySelectorAll(".dropDownActive");

    dropdownToggles.forEach(toggle => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();

        const parentLi = toggle.closest(".mobile-menu-link");
        const dropdown = parentLi.querySelector(".mobile-dropdown-child");

        if (dropdown) {
          parentLi.classList.toggle("open");
          dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        }
      });
    });
  });




  
  




