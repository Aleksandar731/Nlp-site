

let currentIndex = 0;
let currentText = texts[currentIndex];
let isDeleting = false;
let index = 0;
let speed = 200; // Brzina pisanja/brisanja u milisekundama

function typeWriter() {
    const textElement = document.getElementById('text');
    textElement.style.display = "inline-block"; // Postavljamo prikaz teksta na "inline-block" kako bi bio vidljiv

    if (isDeleting) {
        // Brisanje teksta
        textElement.textContent = currentText.substring(0, index - 1);
        index--;

        // Pauza prije sledećeg brisanja
        speed = 50;
    } else {
        // Pisanje teksta
        textElement.textContent = currentText.substring(0, index + 1);
        index++;

        // Pauza prije sledećeg pisanja
        speed = 200;
    }

    // Kada se završi pisanje/brisanje
    if (!isDeleting && index === currentText.length + 1) {
        isDeleting = true;
        speed = 500; // Pauza pre brisanja
    } else if (isDeleting && index === 0) {
        // Kada se završi brisanje
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        currentText = texts[currentIndex];
    }

    setTimeout(typeWriter, speed);
}

// Pokretanje funkcije
typeWriter();

  // Pokretanje funkcije
  const targets = [
    { label: "Materijali", count: 40 },
    { label: "Predavači", count: 5 },
    { label: "Sati", count: 30 }
  ];
  
  document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count');
    const speed = 200; // Brzina u milisekundama
  
    counters.forEach((counter, index) => {
      const updateCount = () => {
        const target = targets[index].count;
        const count = +counter.innerText; // "+" pretvara string u broj
        const inc = target / speed;
  
        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCount();
    });
  });
  $("#contact").validate({
    rules: {
      website: {
        required: true,
        url: true
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
   });