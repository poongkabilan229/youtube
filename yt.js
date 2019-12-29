var pt = document.getElementById("pointtrend");
if (pt) {
  pt.addEventListener('click', () => {
    document.location.reload(true);
    window.scrollTo(0, 553);


  });
}
var ph = document.getElementById("hactive");
if (ph) {
  ph.addEventListener('click', () => {
    // document.getElementById("ad").style.display = "flex";
    // document.getElementById("startid").style.display="block";
    // document.getElementById("trendid").style.display="block";
    // document.getElementById("musicid").style.display="block";
    // document.getElementById("sportid").style.display="block";
    // document.getElementById("searchid").style.display="none";
    window.scrollTo(0, 0);


  });
}
function drop() {
  document.getElementById("myDropdown").classList.toggle("show");

}
window.onclick = function (event) {
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
  document.getElementById("myDropdown1").classList.toggle("show1");
}


window.onclick = function (event) {
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

function music() {
  document.getElementById("startid").style.display = "none";
  document.getElementById("sportsid").style.display = "none";
  document.getElementById("trendid").style.display = "none";
  document.getElementById("musicid").style.display = "block";
}
function game() {
  document.getElementById("startid").style.display = "none";
  document.getElementById("musicid").style.display = "none";
  document.getElementById("trendid").style.display = "none";
  document.getElementById("sportsid").style.display = "block";
}



function search() {
  document.getElementById("ad").style.display = "none";
  document.getElementById("startid").style.display = "block";
  document.getElementById("trendid").style.display = "block";
  document.getElementById("musicid").style.display = "block";
  document.getElementById("sportsid").style.display = "block";
  document.getElementById("searchid").style.display = "none";;
  var input = document.getElementById("input").value;
  var input1 = input.toUpperCase();
  // console.log(input1);
  var x;
  var p = [];
  start1.forEach((element, i) => {
    var element1 = element.toUpperCase();
    // console.log(element1);

    x = element1.search(input1);
    // alert(x);
    // console.log(input);
    if (x >= 0) {
      p.push(i);
    }

  });
  trend1.forEach((element, i) => {
    var element1 = element.toUpperCase();
    x = element1.search(input1);
    if (x >= 0) {
      p.push(i + start1.length);
    }
  });
  mus1.forEach((element, i) => {
    var element1 = element.toUpperCase();
    x = element1.search(input1);
    if (x >= 0) {
      p.push(i + trend1.length + start1.length);
    }
  });
  sports1.forEach((element, i) => {
    var element1 = element.toUpperCase();
    x = element1.search(input1);
    if (x >= 0) {
      p.push(i + mus1.length + trend1.length + start1.length);
    }
  });
  // console.log(p);
  // console.log(p.length);
  // p.forEach((element,i)=>{

  //   document.getElementById(element).style.border="1px solid blue";
  // });
  if (p.length == 0) {
    document.getElementById("no").innerHTML = "No Matches Found";
    document.getElementById("ad").style.display = "none";
    document.getElementById("startid").style.display = "none";
    document.getElementById("trendid").style.display = "none";
    document.getElementById("musicid").style.display = "none";
    document.getElementById("sportsid").style.display = "none";
    document.getElementById("searchid").style.display = "block";

  }
  else {
    for (var q = 0; q <= k; q++) {
      if (p.includes(q)) {
        document.getElementById(q).style.display = "grid";
        //  document.getElementById("searchid").appendChild(cln);
      }
      else {
        document.getElementById(q).style.display = "none";
      }
    }
  }

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
function menu() {
  var x = document.getElementById("para");
  var y = document.getElementById("cata");
  if ((x.style.display === "block") && (y.style.display === "block")) {
    document.getElementById("para").style.display = "none";
    document.getElementById("cata").style.display = "none";
    document.getElementById("sidediv").style.width = "4%";
    document.getElementById("sidediv").style.left = "-1%";
    document.getElementById("sidediv").style.overflow = "hidden";
    document.getElementById("content").style.marginLeft = "5%";
    document.getElementById("content").style.width = "100%";
  }
  else {
    document.getElementById("para").style.display = "block";
    document.getElementById("cata").style.display = "block";
    document.getElementById("sidediv").style.width = "16%";
    document.getElementById("sidediv").style.left = "0%";
    document.getElementById("sidediv").style.overflow = "scroll";
    document.getElementById("content").style.marginLeft = "18%";
    document.getElementById("content").style.width = "100%";
  }
}
// adding video
function addvideo() {
  document.getElementById("popup").style.display = "block";
}
function submit() {
  var addcat = document.getElementById("addcategory").value;
  var url = document.getElementById("addurl").value;
  var description = document.getElementById("addpara").value;

  // f1.innerText="new div created";
  var s1 = document.createElement("div");
  s1.className = "s1";
  s1.id = "" + k + "";
  k++;
  // s1.innerText="new div s1 created";
  var img1 = document.createElement("img");
  img1.src = url;
  var btn=document.createElement("button");
  btn.className="del";
  btn.innerHTML="x";
  s1.appendChild(img1);
  s1.appendChild(btn);
  var info = document.createElement("div");
  info.className = "info";
  s1.appendChild(info);
  // info.createElement("img");
  var img2 = document.createElement("img");
  var p1 = document.createElement("p");
  p1.innerText = description;
  img2.src = "images/tj.jpg";
  info.appendChild(img2);
  info.appendChild(p1);
  document.getElementById(addcat).appendChild(s1);
  // var addcat = document.getElementById("addcategory").value="";
  //   var url = document.getElementById("addurl").value="";
  // var description = document.getElementById("addpara").value = "";
  if (addcat === "music") {
    var d0 = JSON.parse(localStorage.getItem('imgmus'));
    d0.push(url);
    var d1 = JSON.parse(localStorage.getItem('mus'));
    d1.push(description);
    localStorage.setItem("mus", JSON.stringify(d1));
    localStorage.setItem("imgmus", JSON.stringify(d0));
  }
  if (addcat === "start") {
    var d0 = JSON.parse(localStorage.getItem('images'));
    d0.push(url);
    var d1 = JSON.parse(localStorage.getItem('start'));
    d1.push(description);
    localStorage.setItem("start", JSON.stringify(d1));
    localStorage.setItem("images", JSON.stringify(d0));
  }
  if (addcat === "trend") {
    var d0 = JSON.parse(localStorage.getItem('imgtrend'));
    d0.push(url);
    var d1 = JSON.parse(localStorage.getItem('trend'));
    d1.push(description);
    localStorage.setItem("trend", JSON.stringify(d1));
    localStorage.setItem("imgtrend", JSON.stringify(d0));
  }
  if (addcat === "sports") {
    var d0 = JSON.parse(localStorage.getItem('imgsports'));
    d0.push(url);
    var d1 = JSON.parse(localStorage.getItem('sports'));
    d1.push(description);
    localStorage.setItem("sports", JSON.stringify(d1));
    localStorage.setItem("imgsports", JSON.stringify(d0));
  }
  document.getElementById("popup").style.display = "none";
}
// looping divisions
if (!localStorage.getItem("mus")) {
  var mus = ["Bigil - Unakaga Official Lyric Video | Thalapathy Vijay, Nayanthara", "Kanaa - Othaiyadi Pathayila Video | Arunraja Kamaraj", "Comali - Hi Sonna Podhum Video | Jayam Ravi, Samyuktha Hegde", "Bigil - Singappenney Music Video (Tamil) | Thalapathy Vijay",
    "Bigil - Unakaga Official Lyric Video | Thalapathy Vijay, Nayanthara", "Kanaa - Othaiyadi Pathayila Video | Arunraja Kamaraj", "Comali - Hi Sonna Podhum Video | Jayam Ravi, Samyuktha Hegde", "Bigil - Singappenney Music Video (Tamil) | Thalapathy Vijay"];
  var start = ["Tom and Jerry, Little Quacker, Episode 47 part-2", "Mi Note 10: Unboxing", "Meri Baari Song: Millind Gaba | New Hindi Song 2019", "7 MOST EXTREME HELICOPTERS IN THE.."];
  var trend = ["Street Dancer 3D (Trailer) Varun D, Shraddha...", "TENET - Official Trailer",
    "Good Newwz - Trailer 2 | Batra v/s Batra | Akshay,...", "SNOW MAKING AT HOME EASY METHOD FOR ..."];
  var sports = ["LAKERS at BUCKS | FULL GAME HIGHLIGHTS",
    "Pakistan vs Sri Lanka 2019 | Short Highlights Day 1",
    "Blake Challenges Bolt In 2012 | I AM BOLT",
    "Back-2-Back UNREAL Comebacks For OKC ",
    "Blake Challenges Bolt In 2012 | I AM BOLT ",
    "LAKERS at BUCKS | FULL GAME HIGHLIGHTS",
    "Back-2-Back UNREAL Comebacks For OKC ",
    "Pakistan vs Sri Lanka 2019 | Short Highlights Day 1 "]
  var images = ["images/f10.webp", "images/f11.webp", "images/f12.webp", "images/f13.webp"];
  var imgtrend = ["images/f20.webp", "images/f21.webp", "images/f22.webp", "images/f23.webp"];
  var imgmus = ["images/m0.webp", "images/m1.webp", "images/m2.webp", "images/m3.webp", "images/m4.webp", "images/m5.webp", "images/m6.webp", "images/m7.webp"];
  var imgsports = ["images/s0.webp", "images/s1.webp", "images/s2.webp", "images/s3.webp", "images/s4.webp", "images/s5.webp", "images/s6.webp", "images/s7.webp"];

  // console.log(mus,start,trend,sports,images,imgtrend,imgmus,imgsports);
  localStorage.setItem("start", JSON.stringify(start));
  localStorage.setItem("trend", JSON.stringify(trend));
  localStorage.setItem("mus", JSON.stringify(mus));
  localStorage.setItem("sports", JSON.stringify(sports));
  localStorage.setItem("images", JSON.stringify(images));
  localStorage.setItem("imgmus", JSON.stringify(imgmus));
  localStorage.setItem("imgtrend", JSON.stringify(imgtrend));
  localStorage.setItem("imgsports", JSON.stringify(imgsports));
}
// console.log(mus,start,trend,sports,images,imgtrend,imgmus,imgsports);
// console.log(mus1,start1,trend1,sports1,images1,imgtrend1,imgmus1,imgsports1);
var mus1 = JSON.parse(localStorage.getItem("mus"));
var imgmus1 = JSON.parse(localStorage.getItem("imgmus"));
var start1 = JSON.parse(localStorage.getItem("start"));
var images1 = JSON.parse(localStorage.getItem("images"));
var trend1 = JSON.parse(localStorage.getItem("trend"));
var imgtrend1 = JSON.parse(localStorage.getItem("imgtrend"));
var sports1 = JSON.parse(localStorage.getItem("sports"));
var imgsports1 = JSON.parse(localStorage.getItem("imgsports"));
// console.log(mus,start,trend,sports,images,imgtrend,imgmus,imgsports);
// console.log(mus1,start1,trend1,sports1,images1,imgtrend1,imgmus1,imgsports1);

// document.getElementsByClassName("musical").appendChild(s1);
var k = 0;
var f1 = document.createElement("div");
f1.className = "f1";
f1.id = "start";
// f1.innerText="new div created";
start1.forEach((element, i) => {
  var s1 = document.createElement("div");
  s1.className = "s1";
  s1.id = "" + k + "";
  k++;
  // s1.innerText="new div s1 created";
  f1.appendChild(s1);
  var img1 = document.createElement("img");
  img1.id = "g1" + i + "";
  img1.src = images1[i];
  // var btn=document.createElement("button");
  // btn.className="del";
  // btn.innerHTML="x";
  s1.appendChild(img1);
  // s1.appendChild(btn);
  var info = document.createElement("div");
  info.className = "info";
  s1.appendChild(info);
  // info.createElement("img");
  var img2 = document.createElement("img");
  var p1 = document.createElement("p");
  p1.innerText = element;
  img2.src = "images/tj.jpg";
  info.appendChild(img2);
  info.appendChild(p1);
});
document.getElementById("startid").appendChild(f1);


var f1 = document.createElement("div");
f1.className = "f1";
f1.id = "trend";
// f1.innerText="new div created";
trend1.forEach((element, i) => {
  var s1 = document.createElement("div");
  s1.className = "s1";
  s1.id = "" + k + "";
  k++;
  // s1.innerText="new div s1 created";
  f1.appendChild(s1);
  var img1 = document.createElement("img");
  img1.id = "g2" + i + "";
  img1.src = imgtrend1[i];
  s1.appendChild(img1);
  var info = document.createElement("div");
  info.className = "info";
  s1.appendChild(info);
  // info.createElement("img");
  var img2 = document.createElement("img");
  var p1 = document.createElement("p");
  p1.innerText = element;
  img2.src = "images/tj.jpg";
  info.appendChild(img2);
  info.appendChild(p1);
});
document.getElementById("trendid").appendChild(f1);

var f1 = document.createElement("div");
f1.className = "f1";
f1.id = "music";

// f1.innerText="new div created";
mus1.forEach((element, i) => {
  var s1 = document.createElement("div");
  s1.className = "s1";
  s1.id = "" + k + "";
  k++;
  // s1.innerText="new div s1 created";
  f1.appendChild(s1);
  var img1 = document.createElement("img");
  img1.src = imgmus1[i];
  s1.appendChild(img1);
  var info = document.createElement("div");
  info.className = "info";
  s1.appendChild(info);
  // info.createElement("img");
  var img2 = document.createElement("img");
  var p1 = document.createElement("p");
  p1.innerText = element;
  img2.src = "images/tj.jpg";
  info.appendChild(img2);
  info.appendChild(p1);
  j = 1;
});

document.getElementById("musicid").appendChild(f1);

var f1 = document.createElement("div");
f1.className = "f1";
f1.id = "sports";
// f1.innerText="new div created";
sports1.forEach((element, i) => {
  var s1 = document.createElement("div");
  s1.className = "s1";
  s1.id = "" + k + "";
  k++;
  // s1.innerText="new div s1 created";
  f1.appendChild(s1);
  var img1 = document.createElement("img");
  img1.src = imgsports1[i];
  s1.appendChild(img1);
  var info = document.createElement("div");
  info.className = "info";
  s1.appendChild(info);
  // info.createElement("img");
  var img2 = document.createElement("img");
  var p1 = document.createElement("p");
  p1.innerText = element;
  img2.src = "images/tj.jpg";
  info.appendChild(img2);
  info.appendChild(p1);
});
document.getElementById("sportsid").appendChild(f1);
// localStorage.setItem("start", JSON.stringify(start));
// localStorage.setItem("trend", JSON.stringify(trend));
// localStorage.setItem("mus", JSON.stringify(mus));
// localStorage.setItem("sports", JSON.stringify(sports));
// localStorage.setItem("images", JSON.stringify(images));
// localStorage.setItem("imgmus", JSON.stringify(imgmus));
// localStorage.setItem("imgtrend", JSON.stringify(imgtrend));
// localStorage.setItem("imgsports", JSON.stringify(imgsports));
// var a = JSON.parse(localStorage.getItem('start'));
