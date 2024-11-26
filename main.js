

// Got slider items | Array.from

var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));

// console.table(sliderImages);

// Get number of slide
var slidesCount = sliderImages.length;

// console.log(slidesCount);

// first slide 

var currentSlide = 1;

// slide number string element

var slideNumberElement = document.getElementById("slider-number");

// preveies and next buttom

var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

// Handle on Previous And Next Buttom

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// create ul element

var paginationElement = document.createElement("ul");

// set id on created ul element

paginationElement.setAttribute("id", "pagination-ul");

// create list Items Based all on slide count

for(var i = 1; i <= slidesCount; i++) {
    // crate set the li
    var paginationItem= document.createElement("li");

    paginationItem.setAttribute("date-index", i);

    // set item content
    paginationItem.appendChild(document.createTextNode(i));

    // appned items two the main Ul list

    paginationElement.appendChild(paginationItem);

}


// add THe Created Ul Element TO the page

document.getElementById("indicators").appendChild(paginationElement);

// Get the new Created ul 
var paginationCreateUl = document.getElementById("pagination-ul");


// Get padgtionItem  | Array.from

var paginationsBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

// loop padintions throurgh
for(var i =0; i<paginationsBullets.length; i++) {
    paginationsBullets[i].onclick = function () {
        currentSlide =parseInt(this.getAttribute("date-index"));
        thechecker();
    }
}


// Trigger thechecker function
thechecker();

// function next slide

function nextSlide() {
 
    if(nextButton.classList.contains("disabled")) {
    // stop  
    return false;
    }else {
        currentSlide++;
        thechecker();
    }
}

function prevSlide() {
    if(prevButton.classList.contains("disabled")) {
        // stop  
        return false;
        }else {
            currentSlide--;
            thechecker();
        }
}

// create THe checker function

function thechecker() {
    // set the Slide Number
    slideNumberElement.textContent = "Slide #"  +  (currentSlide)  + " of "  +(slidesCount);
    // remove All Active Classes 
    removeAllactive();
    // Set active Class On Current Slide 
    sliderImages[currentSlide - 1].classList.add("active");

     // Set active Class On Current pagination Items
    paginationCreateUl.children[currentSlide - 1].classList.add("active");
    // console.log(paginationCreateUl.children)
    // check If current slide is the first 
    if (currentSlide == 1) {
    // Add Desibald Class On previous Butten
    prevButton.classList.add("disabled");

    }else {
         // Remve Desibald Class From previous Butten
    prevButton.classList.remove("disabled");
    }

    // check If current slide is the Last
    if (currentSlide == slidesCount) {
        // Add Desibald Class On Next Butten
        nextButton.classList.add("disabled");
    
        }else {
             // Remve Desibald Class From Next Butten
        nextButton.classList.remove("disabled");
        }
}

// remove All Active Classes From Images Bullets 

function removeAllactive() {
    // loop Through Images 
    sliderImages.forEach(function(img){
    img.classList.remove("active");
    });

    // loop through pagination
    paginationsBullets.forEach(function(Bullet){
    Bullet.classList.remove("active");
    });
}