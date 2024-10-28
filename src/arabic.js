var counter2 = 0; 
function toArabicNumerals(num) {
    return num.toString().replace(/\d/g, function(digit) {
        return '٠١٢٣٤٥٦٧٨٩'[digit];
    });
}
 document.getElementById("incrementIconArabic").addEventListener("click", function() {
    counter2++;  
    document.getElementById("outPutArabic").value = toArabicNumerals(counter2);  
});
 document.getElementById("resetIconArabic").addEventListener("click", function() {
    counter2 = 0; 
    document.getElementById("outPutArabic").value = toArabicNumerals(counter2);  
});
function  myMode() {
    var element = document.body;
    element.classList.toggle("darkMode");
    var x = document.getElementById("myMode");
    if (x.innerHTML === "Light") {
      x.innerHTML = "Dark";
    } else {
      x.innerHTML = "Light";
    }
 }
 document.getElementById("myButton").addEventListener("click", function() {
    window.location.href = "./index.html";
 });