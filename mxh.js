let mang = [];
let mangtimkiem = [];
window.onload = function () {
  load();
  timkiem();
};
function bam() {
  check();
  chay();
}
function check() {
  var tenmuc = $(".input").val();
  if (tenmuc == "") {
    return "a";
  } else if (localStorage.getItem("mang") === null) {
    return "c";
  } else {
    let mang = localStorage.getItem("mang");
    mang = JSON.parse(mang);

    mang = mang || [];
    for (element of mang) {
      if (tenmuc == element.tenmuc) {
        return "d";
      }
    }

    return "e";
  }
}

function chay() {
  let tenmuc = $(".input").val();

  if (check() == "a") {
    alert("Bạn chưa nhập tên mục");
  } else if (check() == "d") {
    alert("Trùng tên mục");
  } else if (check() == "c") {
    var key = Date.now();
    const html = `
        <div class="congcu" data-key="${key}"> 
        <div class="khungnho " >
        <h2 class="tm">${tenmuc}</h2>
        <div>
        <button class="nutbam5 w3-hover-yellow" onclick="xoa()">Xóa</button>
        </div>

        </div>
        <br><br>
        </div>
        `;
    const muc = {
      id: Date.now(),
      tenmuc: tenmuc,
      muccon: [],
    };
    let mang = localStorage.getItem("mang");
    mang = JSON.parse(mang);
    mang = mang || [];
    mang.push(muc);
    localStorage.removeItem("mang");
    localStorage.setItem("mang", JSON.stringify(mang));
    const timkiem = `<option class="d" value="${tenmuc}">`;
    $(".khung3").append(html);
    $("#tencacmuc").append(timkiem);
  } else if (check() == "e") {
    var key = Date.now();
    const html = `
    <div class="congcu" data-key="${key}"> 
    <div class="khungnho " >
    <h2 class="tm">${tenmuc}</h2>
    <div class="khungdung">
    
    <button class="nutbam5 w3-hover-yellow" onclick="xoa()">Xóa</button>
    </div>

    </div>
    <br><br>
    </div>
    `;
    const muc = {
      id: Date.now(),
      tenmuc: tenmuc,
      muccon: [],
    };
    let mang = localStorage.getItem("mang");
    mang = JSON.parse(mang);
    mang.push(muc);
    localStorage.removeItem("mang");
    localStorage.setItem("mang", JSON.stringify(mang));
    const timkiem = `<option class="d" value="${tenmuc}">`;
    $(".khung3").append(html);

    $("#tencacmuc").append(timkiem);
  }
}

//Cho nay day a //////////////////////////////////////

function load() {
  let mang = localStorage.getItem("mang");
  mang = JSON.parse(mang);
  let cacmuc = "";
  for (e of mang) {
    cacmuc += `<div class="congcu" data-key:"${e.id}"> 
    <div class="khungnho " >
    <h2 class="tm">${e.tenmuc}</h2>
    <div class="khungdung">
    
    <button class="nutbam5 w3-hover-yellow" onclick="xoa()">Xóa</button>
    </div>

    </div>
    <br><br>
    </div>`;
  }
  document.querySelector(".khung3").innerHTML = cacmuc;
}
function xoa() {
  $(".congcu").click(function () {
    let mang = localStorage.getItem("mang");
    mang = JSON.parse(mang);
    del($(this).attr("data-key"));
  });
}

////////////////////////////////////////////

function bam1() {
  let mang = localStorage.getItem("mang");
  mang = JSON.parse(mang);
  var dulieu = $(".input3").val();
  var input1 = $("input1").val();
  var input2 = $("input2").val();
  const h = `<a href="${input2}"><h2>${input1}</h2> </a> `;
}
function timkiem() {
  let mang = localStorage.getItem("mang");
  mang = JSON.parse(mang);
  let cacmuctk = "";
  for (e of mang) {
    cacmuctk += `<option class="d" value="${e.tenmuc}">`;
  }
  $("#tencacmuc").append(cacmuctk);
}

function loadptnho() {
  let mang = localStorage.getItem("mang");
  mang = JSON.parse(mang);
}
function del(id) {
  let mang = localStorage.getItem("mang");
  mang = JSON.parse(mang);
  mang = mang.filter(function (e) {
    return e.id != id;
  });
  localStorage.removeItem("mang");
  localStorage.setItem("mang", JSON.stringify(mang));
}
