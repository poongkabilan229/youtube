function drop() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.oppost')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function drop1() {
    document.getElementById("myDropdown1").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.opapps')) {
      var dropdowns1 = document.getElementsByClassName("dropdown-content1");
      var i;
      for (i = 0; i < dropdowns1.length; i++) {
        var openDropdown1 = dropdowns1[i];
        if (openDropdown1.classList.contains('show')) {
          openDropdown1.classList.remove('show');
        }
      }
    }
  }
function music(){
    document.getElementById("startid").style.display="none";
    document.getElementById("sportsid").style.display="none";
    document.getElementById("musicid").style.display="block";
}
function sports(){
    document.getElementById("startid").style.display="none";
    document.getElementById("musicid").style.display="none";
    document.getElementById("sportsid").style.display="block";
}
// function menu(){
//     document.getElementById("span").style.display="none";
// }
// function search(){
//     var x=document.getElementById("search").value;
//     var y='hello';
//     if(x==y)
//     {
//         alert('correct');
//         document.getElementById("1").style.display="none"
//     }
//     x=document.getElementById("search").value="";
// }
// function myfunction() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("search");
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName("li");
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";

//         }
//     }
// }
// var str = "Visit W3Schools!";
// var n = str.search("W3Schools");

