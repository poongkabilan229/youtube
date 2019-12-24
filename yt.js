function drop() {
    document.getElementById("myDropdown").classList.toggle("show");
    
  }
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
  // Close the dropdown if the user clicks outside of it
 

  function drop1() {
    document.getElementById("myDropdown1").classList.toggle("show1");
    window.onclick = function(event) {
      if (!event.target.matches('.opapps')) {
        var dropdowns1 = document.getElementsByClassName("dropdown-content1");
        var i;
        for (i = 0; i < dropdowns1.length; i++) {
          var openDropdown1 = dropdowns1[i];
          if (openDropdown1.classList.contains('show1')) {
            openDropdown1.classList.remove('show1');
          }
        }
      }
    }
  }
  
  // Close the dropdown if the user clicks outside of it
  
 
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
// function menu(){
//   var click=document.getElementById("sidediv");
//   if(click.left="0%")
//   {
//   document.getElementById("sidediv").style.left="-17%";
//   document.getElementById("content").style.marginLeft="5%";
//   document.getElementById("content").style.width="100%";
//   }
//   else 
//   {
//     document.getElementById("sidediv").style.left="0%";
//     document.getElementById("content").style.marginLeft="18%";
//     document.getElementById("content").style.width="100%";
//   }
// }
function menu(){
  var x=document.getElementById("para");
  var y=document.getElementById("cata");
  if((x.style.display==="block")&&(y.style.display==="block")){
  document.getElementById("para").style.display="none";
  document.getElementById("cata").style.display="none";
  document.getElementById("sidediv").style.width="4%";
  document.getElementById("sidediv").style.overflow="hidden";
  document.getElementById("content").style.marginLeft="5%";
  document.getElementById("content").style.width="100%";
  }
  else
  {
    document.getElementById("para").style.display="block";
  document.getElementById("cata").style.display="block";
  document.getElementById("sidediv").style.width="16%";
  document.getElementById("sidediv").style.overflow="scroll";
  document.getElementById("content").style.marginLeft="18%";
    document.getElementById("content").style.width="100%";
  }
}