let popUp = document.querySelector(".popup");
let closeBtn = document.querySelector(".close-popup");
let moreToggler = document.querySelector("#moreToggler");
let toggledCards = document.querySelectorAll(".toggled-card");
let styleElem = document.head.appendChild(document.createElement("style"));

popUp.addEventListener("click", (e) => {
  if (e.target === closeBtn) {
    popUp.classList.remove("show");
  } else {
    popUp.classList.add("show");
  }
});

moreToggler.addEventListener("click", () => {
  toggledCards.forEach((card) => {
    if (card.classList.contains("hidden")) {
      styleElem.innerHTML = "#accordionExample::after {box-shadow: none;}";
      moreToggler.innerHTML = "Mai Putin";
    } else if (!card.classList.contains("hidden")) {
      moreToggler.innerHTML = "Mai Mult";
      styleElem.innerHTML =
        "#accordionExample::after {box-shadow: inset 0px -170px 60px -100px rgba($color: $body-bg, $alpha: 1);}";
    }
    card.classList.toggle("hidden");
  });
});

$(document).ready(() => {
  $("#slideshow .slick").slick({
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 3,
    prevArrow: '<button class="slide-arrow prev-arrow"><</button>',
    nextArrow: '<button class="slide-arrow next-arrow">></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(function () {
    $.getJSON("./data.json", function (data) {
      $("#all").html(`(${data.channels.all.length} canale)`);
      data.channels.all.forEach((channel) => {
        $("#jsonAll").slick(
          "slickAdd",
          `<div><div><div class="slick-card"><img src=${channel} alt="Rock TV"><p class="text-center">721. Rock TV</p></div></div></div>`
        );
      });
    });
  });

  $(function () {
    $.getJSON("./data.json", function (data) {
      $("#news").html(`(${data.channels.news.length} canale)`);
      data.channels.news.forEach((channel) => {
        $("#jsonNews").slick(
          "slickAdd",
          `<div><div><div class="slick-card"><img src=${channel} alt="Rock TV"><p class="text-center">721. Rock TV</p></div></div></div>`
        );
      });
    });
  });

  $(function () {
    $.getJSON("./data.json", function (data) {
      $("#hdLen").html(`(${data.channels.hd.length} canale)`);
      data.channels.hd.forEach((channel) => {
        $("#jsonHD").slick(
          "slickAdd",
          `<div><div><div class="slick-card"><img src=${channel} alt="Rock TV"><p class="text-center">721. Rock TV</p></div></div></div>`
        );
      });
    });
  });
});

$(document).ready(() => {
  $("#slideshow-2 .slick-2").slick({
    infinite: true,
    dots: true,
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
  $(function () {
    $.getJSON("./data.json", function (data) {
      data.offers.forEach((offer) => {
        $(".slick-2").slick(
          "slickAdd",
          `<div><div><div class="card px-4 bg-transparent border-0">
          <img style="width: 100%" src="./assets/images/bani-negri.png" class="card-img-top rounded-lg mb-3" alt="Bani Negri">
          <div class="card-body p-0">
            <div class="row px-3 mb-3 justify-content-between align-items-center">
                <h4 class="card-title m-0 font-weight-bold">
                  ${offer.name}
                </h4>
                <button class="btn btn-dark rounded-0 btn-sm">Extraoptiune</button>
            </div>
              <p>${offer.description}<br>
                <a href="#" class="font-weight-bold">Vezi mai mult</a></p>
              <p class="h3 font-weight-bold">${offer.price}€/luna</p>
              <button type="btn" class="btn font-weight-bold btn-outline-dark ">
                Activeaza
              </button>
          </div>
        </div></div></div>`
        );
      });
    });
  });
});

$(document).ready(() => {
  $("#slideshow-3 .slick-3").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(function () {
    $.getJSON("./data.json", function (data) {
      data.tvBox.forEach((tvBox) => {
        $(".slick-3").slick(
          "slickAdd",
          `<div><div><div class="card border-0 bg-transparent">
          <img src="./assets/images/card-tv.png" class="card-img-top" alt="Card-tv">
          <div class="card-body">
            <h5 class="card-title h4 font-weight-bold">${tvBox.title}</h5>
            <p class="card-text">${tvBox.text}</p>
          </div>
        </div></div></div>`
        );
      });
    });
  });
});

function showMe(val) {
  if (val.value === "hd") {
    document.getElementById("hd").style.display = "block";
    document.getElementById("toate").style.display = "none";
    document.getElementById("stiri").style.display = "none";
    $("#slideshow .slick").slick("setPosition");
  }
  if (val.value === "toate") {
    document.getElementById("toate").style.display = "block";
    document.getElementById("hd").style.display = "none";
    document.getElementById("stiri").style.display = "none";
    $("#slideshow .slick").slick("setPosition");
  }
  if (val.value === "stiri") {
    document.getElementById("hd").style.display = "none";
    document.getElementById("toate").style.display = "none";
    document.getElementById("stiri").style.display = "block";
    $("#slideshow .slick").slick("setPosition");
  }
}
