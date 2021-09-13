

// id's
var text = document.getElementById("text");
var d = new Date();
var dnum = d.getDate();
var day = d.getDay();
var m = d.getMonth();
console.log(m);
// for day
switch (day) {
    case 0: day = "Sunday";
        break;
    case 1: day = "Monday";
        break;
    case 2: day = "Tuesday";
        break;
    case 3: day = "Wednsday";
        break;
    case 4: day = "Thursday";
        break;
    case 5: day = "Friday";
        break;
    case 6: day = "Saturday";
        break;
}

//for months

switch (m) {
    case 0: m = "Jan";
        break;
    case 1: m = "Feb";
        break;
    case 2: m = "Mar";
        break;
    case 3: m = "Apr";
        break;
    case 4: m = "May";
        break;
    case 5: m = "June";
        break;
    case 6: m = "July";
        break;

    case 7: m = "Aug";
        break;
    case 8: m = "Sept";
        break;
    case 9: m = "Oct";
        break;
    case 10: m = "Nov";
        break;

    case 11: m = "Dec";
        break;

}

text.innerHTML = day + ',' + dnum + " " + m;




//1. adding elements
var submit = document.getElementById("submit-but");
submit.addEventListener("click", run)
// add function
function run(e) {
    e.preventDefault();
    var input = document.getElementById("item");
    var x = input.value;
    if (x != "") {
        // list created
        var ele = document.createElement("li");
        // adding class
        ele.className = "list-group-item mt-2";
        ele.innerText = x;
        ele.style.background = "transparent";
        ele.style.fontWeight = "bold";
        ele.style.fontFamily = "Dosis, sans-serif"
        // creating button
        var btn = document.createElement("button");
        btn.type = "buttton";
        btn.className = "btn btn-dark btn-sm float-right delete bg-danger";
        //creating button2
        var btn2 = document.createElement("button");
        btn2.type = "buttton";
        btn2.className = "btn btn-dark btn-sm float-right  mr-2 check  bg-success";

        //creating check button
        var check = document.createElement("i");
        check.className = "fas  fa-check-square";

        // creating delete button
        var del = document.createElement("i");
        del.className = "fas fa-trash";


        // adding button to li
        btn.appendChild(del);
        ele.append(btn);

        btn2.appendChild(check);
        ele.append(btn2);
        // input

        var ul = document.getElementById("list-items");
        console.log(ele);
        ul.appendChild(ele);
        x = "";
        input.value = "";
    } else {
        alert("plz enter something");
    }

}

//2. for removing elements
var bt = document.getElementById("list-items");
bt.addEventListener("click", removeitem);
var flag = false;

// remove function
function removeitem(e) {

    if (e.target.classList.contains("delete")) {
        if (confirm("Are you sure you wanna delete???")) {
            var z = e.target.parentElement; //button ka parent wo pura li hai to us li ko remove kero 

            if (flag) {
                var f = e.target.parentElement;
                var par = f.parentElement;
                bt.removeChild(par);
            } else {
                bt.removeChild(z);
            }
        }
    }
    else {
        if (e.target.classList.contains("check")) {
            if (confirm("Have you completed the work")) {
                var result = e.target.parentElement.innerText;
                e.target.parentElement.innerHTML = "<S>" + e.target.parentElement.innerHTML + "</S>";
                flag = true;
            }
        }

    }

}

//3.For refreash
var r = document.getElementById("refresh-1");
r.addEventListener("click", refresh);
// refresh function
function refresh() {
    if (confirm("List will be empty on refreshing , Do you still wanna continue"));
    {
        var b = document.getElementById("list-items");
        b.innerHTML = ""
    }
}

//4. search button
var s = document.getElementById("sea");
s.addEventListener("click", show);
s.addEventListener("dblclick", noshow)
function show() {

    $(".search-here").addClass("search-here-2");
}

function noshow() {
    var c = document.getElementById("sear-box");
    c.value = "";
    $(".search-here").removeClass("search-here-2");
}
// 5.for filtering
var t = document.getElementById("sear-box");
t.addEventListener("keyup", filteritem);
// filtering
function filteritem(e) {
    var lower = e.target.value.toLowerCase();
    console.log(lower);
    var list = bt.getElementsByTagName("li");
    console.log(list);
    Array.from(list).forEach(function (abc) {
        var itemName = abc.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(lower) != -1) {
            abc.style.display = "block";
        } else {
            abc.style.display = "none";
        }
    })
}
