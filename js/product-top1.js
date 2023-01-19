function changePage(n) {
  let titarr = document.querySelectorAll(".pagetit");
  for (let i = 0; i < 3; i++) {
    titarr[i].classList.remove("now");
    document.querySelector(".page" + (i + 1)).style.display = "none";
  }
  titarr[n].classList.add("now");
  document.querySelector(".page" + (n + 1)).style.display = "block";
}

function pageOpenClose() {
  //
  if (document.querySelector(".btn-bottom-open1").style.display !== "none") {
    document.querySelector(".btn-bottom-open1").style.display = "none";
    document.querySelector(".btn-bottom-open2").style.display = "none";
    document.querySelector(".btn-bottom-close1").style.display = "block";
    document.querySelector(".btn-bottom-close2").style.display = "block";
    document.querySelector("#overflow").classList.remove("overflow");
  } else {
    document.querySelector(".btn-bottom-open1").style.display = "block";
    document.querySelector(".btn-bottom-open2").style.display = "block";
    document.querySelector(".btn-bottom-close1").style.display = "none";
    document.querySelector(".btn-bottom-close2").style.display = "none";
    document.querySelector("#overflow").classList.add("overflow");
  }
}
function orderInfo(n) {
  if (document.querySelector(".order-hd-open-" + n).style.display !== "none") {
    document.querySelector(".span" + n).style.display = "none";
    document.querySelector(".order-hd-open-" + n).style.display = "none";
    document.querySelector(".order-hd-close-" + n).style.display = "block";
    document.querySelector(".order" + n).style.display = "block";
  } else {
    document.querySelector(".span" + n).style.display = "block";
    document.querySelector(".order-hd-open-" + n).style.display = "block";
    document.querySelector(".order-hd-close-" + n).style.display = "none";
    document.querySelector(".order" + n).style.display = "none";
  }
}

function onclickCbx() {
  if (document.querySelector("#userJoinFormDiv").style.display !== "block") {
    document.querySelector("#userJoinFormDiv").style.display = "block";
  } else {
    document.querySelector("#userJoinFormDiv").style.display = "none";
  }
}

function onclickAgree() {
  if (agreeAllBtn.checked === true) {
    for (let tag of agree) {
      tag.checked = true;
    }
  } else {
    for (let tag of agree) {
      tag.checked = false;
    }
  }
}
function selecpay() {
  let pay = document.querySelector("#pay2");
  if (pay.checked === true) {
    document.querySelector("#pay1text").style.display = "none";
    document.querySelector("#pay1color").style.color = "rgb(136, 136, 136)";
    document.querySelector("#pay2color").style.color = "black";
    document.querySelector("#pay2text").style.display = "block";
  } else {
    document.querySelector("#pay1color").style.color = "black";
    document.querySelector("#pay1text").style.display = "block";
    document.querySelector("#pay2text").style.display = "none";
    document.querySelector("#pay2color").style.color = "rgb(136, 136, 136)";
  }
}

function sum() {
  totalPrice += price;
  // 가격 형변환 후 쉼표추가 함수
  let a = String(totalPrice);
  var output = [a.slice(0, position), b, a.slice(position)].join("");
  document.querySelector("#price").innerHTML = output + "원";
  //갯수
  amount++;
  document.querySelector(".MSH-sto-stock").value = amount;
}
function sub() {
  if (amount > 1) {
    totalPrice -= price;
    // 가격 형변환 후 쉼표추가 함수
    let a = String(totalPrice);
    var output = [a.slice(0, position), b, a.slice(position)].join("");
    document.querySelector("#price").innerHTML = output + "원";
    //갯수
    amount--;
    document.querySelector(".MSH-sto-stock").value = amount;
  } else {
    document.querySelector(".MSH-sto-stock").value = amount;
    document.querySelector("#price").innerHTML = str;
  }
}
