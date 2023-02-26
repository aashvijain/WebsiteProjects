

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 6000); // Change image every 2 seconds
}

var factList = [
  "In the past 15 years, clothing production has doubled while the average number of times an article of clothing is worn overall has decreased by 36%",
  "The fashion industry releases more carbon dioxide than shipping and aviation combined",
  "Wastage from garments produces around $500 billion dollars of waste every year",
  "The United States purchases the most fast fashion than another country in the world",
  "20% of global wastewater comes from textile dyeing",
  "We throw away 92 million tons of garment-related waste per year"
]

var fact = document.getElementById ("fact");
var myButton = document.getElementById ("myButton");
var count = 0;
myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList [count];
  count ++;
  if (count == factList.length())
  {
    count = 0;
  }
}
