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

  
 
