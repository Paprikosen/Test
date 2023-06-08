import { posts } from '/content.js';

// Toggle elements

const coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    var arrow = this.querySelector(".arrow");
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
  if (active) {
    toggleButton.innerHTML = "Toggle Language Switcher (ON)";
  } else {
    toggleButton.innerHTML = "Toggle Language Switcher (OFF)";
  }
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
  if (!text.classList.contains("ukrainianMain")) {
  text.addEventListener("click", function() {
    if (active) {
      
      const textId = Number(text.getAttribute('Layer1'))
      // works for the first layer
      if (!text.classList.contains('padding')) {
        if (text.classList.contains('ukrainian')) {
          addGermanClass(text)
          const titlesTranslation = `<span>${posts[textId].topicGerman}</span><br><br>`
          text.innerHTML = titlesTranslation + posts[textId].textGerman
        } else {
          text.innerHTML = posts[textId].textUkrainian;
          addUkrainianClass(text)
        }
      }
      // works for the second Layer
      if (text.classList.contains('secondLayer')) {
        if (text.classList.contains('ukrainian')) {
          const textIdSub = Number(text.getAttribute('layer2'))
          addGermanClass(text)
          const titlesTranslation = `<span>${posts[textId].topicGerman} -> ${posts[textId].subtopics[textIdSub].topicGerman}</span><br><br>`
          text.innerHTML = titlesTranslation + posts[textId].subtopics[textIdSub].textGerman
        } else {
          const textIdSub = Number(text.getAttribute('layer2'))
          text.innerHTML = posts[Number(textId)].subtopics[Number(textIdSub)].textUkrainian;
          addUkrainianClass(text)
        }
       //  works for the third layer
    } if (text.classList.contains('thirdLayer')) {
        if (text.classList.contains('ukrainian')) {
          const textIdSub = Number(text.getAttribute('layer2'))
          const textIdSubSub = Number(text.getAttribute('layer3'))
          addGermanClass(text)
          const titlesTranslation = `<span>${posts[textId].topicGerman} -> ${posts[textId].subtopics[textIdSub].topicGerman} -> ${posts[textId].subtopics[textIdSub].subtopics[textIdSubSub].topicGerman}</span><br><br>`
          text.innerHTML = titlesTranslation + posts[textId].subtopics[textIdSub].subtopics[textIdSubSub].textGerman
        } else {
          const textIdSub = Number(text.getAttribute('layer2'))
          const textIdSubSub = Number(text.getAttribute('layer3'))
          text.innerHTML = posts[textId].subtopics[textIdSub].subtopics[textIdSubSub].textUkrainian;
          addUkrainianClass(text)
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



