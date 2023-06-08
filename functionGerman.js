import { posts } from '/content.js';

// Toggle elements

const coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    let arrow = this.querySelector(".arrow");
    if (content.style.display === "block") {
    content.style.display = "none";
    arrow.classList.remove("down");
    arrow.classList.add("right");
    } else {
    content.style.display = "block";
    arrow.classList.remove("right");
    arrow.classList.add("down");
    }
});
}

//open and close impressum

const impressumOpen = document.getElementById('impressum-open')
const impressumOpen2 = document.getElementById('impressum-open2')
const impressum = document.getElementById('impressum')
const closeBtn = document.getElementById('close-btn')

impressumOpen.addEventListener('click', function() {
  console.log(impressum.style)
  impressum.style.display = 'block'
})

impressumOpen2.addEventListener('click', function() {
  console.log(impressum.style)
  impressum.style.display = 'block'
})

closeBtn.addEventListener('click', function() {
  impressum.style.display = 'none'
})




// Translate texts on click

const texts = document.querySelectorAll(".text");
const toggleButton = document.getElementById("toggleButton");
let active = true;

toggleButton.addEventListener("click", function() {
  active = !active;
});

texts.forEach(text => {
  text.addEventListener("click", function() {
    if (active) {
      if (text.classList.contains('germanMain')) {
        text.classList.remove('germanMain')
        text.classList.add('ukrainianMain')
        text.innerHTML = this.dataset.ukrainian;
      } else {
        text.innerHTML = this.dataset.german;
        text.classList.add('germanMain')
        text.classList.remove('ukrainianMain')
      }
    }
  });
});

texts.forEach(text => {
  if (!text.classList.contains("germanMain")) {
  text.addEventListener("click", function() {
    if (active) {
      
      const textId = Number(text.getAttribute('Layer1'))
      // works for the first layer
      if (!text.classList.contains('padding')) {
        if (text.classList.contains('german')) {
          addUkrainianClass(text)
          const titlesTranslation = `<span>${posts[textId].topicUkrainian}</span><br><br>`
          text.innerHTML = titlesTranslation + posts[textId].textUkrainian
        } else {
          text.innerHTML = posts[textId].textGerman;
          addGermanClass(text)
        }
      }
      // works for the second Layer
      if (text.classList.contains('secondLayer')) {
        if (text.classList.contains('german')) {
          const textIdSub = Number(text.getAttribute('layer2'))
          addUkrainianClass(text)
          const titlesTranslation = `<span>${posts[textId].topicUkrainian} -> ${posts[textId].subtopics[textIdSub].topicUkrainian}</span><br><br>`
          text.innerHTML = titlesTranslation + posts[textId].subtopics[textIdSub].textUkrainian
        } else {
          const textIdSub = Number(text.getAttribute('layer2'))
          text.innerHTML = posts[Number(textId)].subtopics[Number(textIdSub)].textGerman;
          addGermanClass(text)
        }
       //  works for the third layer
    } if (text.classList.contains('thirdLayer')) {
        if (text.classList.contains('german')) {
          const textIdSub = Number(text.getAttribute('layer2'))
          const textIdSubSub = Number(text.getAttribute('layer3'))
          addUkrainianClass(text)
          const titlesTranslation = `<span>${posts[textId].topicUkrainian} -> ${posts[textId].subtopics[textIdSub].topicUkrainian} -> ${posts[textId].subtopics[textIdSub].subtopics[textIdSubSub].topicUkrainian}</span><br><br>`
          text.innerHTML = titlesTranslation + posts[textId].subtopics[textIdSub].subtopics[textIdSubSub].textUkrainian
        } else {
          const textIdSub = Number(text.getAttribute('layer2'))
          const textIdSubSub = Number(text.getAttribute('layer3'))
          text.innerHTML = posts[textId].subtopics[textIdSub].subtopics[textIdSubSub].textGerman;
          addGermanClass(text)
        }
        
  }
  
}});
}});

function addGermanClass(text) {
  text.classList.add('german')
  text.classList.remove('ukrainian')
}

function addUkrainianClass(text) {
  text.classList.remove('german')
  text.classList.add('ukrainian')
}



