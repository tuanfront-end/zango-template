window.addEventListener("load", function () {
  _toogleNightMode();
  _handleToggleDropdown();
  _handleToggletoolTip();
  _toggleModal();
  _toggleHiddenClass();
  _newGlideCarousel();
  _setBgColorForAvatar();
  //
});

const avatarColors = [
  "#ffdd00",
  "#fbb034",
  "#ff4c4c",
  "#c1d82f",
  "#f48924",
  "#7ac143",
  "#30c39e",
  "#06BCAE",
  "#0695BC",
  "#037ef3",
  "#146eb4",
  "#8e43e7",
  "#ea1d5d",
  "#fc636b",
  "#ff6319",
  "#e01f3d",
  "#a0ac48",
  "#00d1b2",
  "#472f92",
  "#388ed1",
  "#a6192e",
  "#4a8594",
  "#7B9FAB",
  "#1393BD",
  "#5E13BD",
  "#E208A7",
];

function _toogleNightMode() {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  const switchs = [...document.querySelectorAll("[data-switch-night-mode]")];
  const toDark = () => {
    document.querySelector("#root").classList.add("dark");
    localStorage.theme = "dark";
  };
  const toLight = () => {
    document.querySelector("#root").classList.remove("dark");
    localStorage.theme = "light";
  };

  //   Check nightMode from localStore
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    toDark();
  } else {
    toLight();
  }

  //   toogle nightMode from swicthNightMode
  switchs.forEach((element) => {
    element.addEventListener("click", function () {
      if (!document.querySelector("#root").classList.contains("dark")) {
        toDark();
      } else {
        toLight();
      }
    });
  });
}

function _toggleHiddenClass() {
  const btnToggle = [...document.querySelectorAll(`[data-ttnc-hidden-toggle]`)];
  if (!btnToggle || !btnToggle.length) return;
  btnToggle.forEach((element) => {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      const panelHiddenId = element.getAttribute("data-ttnc-hidden-toggle");
      if (!panelHiddenId) return;
      const panelElement = document.getElementById(panelHiddenId);
      if (!panelElement) return;
      panelElement.classList.toggle("hidden");
      panelElement.classList.toggle("block");
    });
  });
}
function _toggleModal() {
  const btnToggle = [...document.querySelectorAll(`[data-ttnc-modal-toggle]`)];
  if (!btnToggle || !btnToggle.length) return;
  btnToggle.forEach((element) => {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      const modalID = element.getAttribute("data-ttnc-modal-toggle");
      if (!modalID) return;
      const a = document.getElementById(modalID);
      const b = document.getElementById(modalID + "-backdrop");
      if (!a || !b) return;

      a.classList.toggle("hidden");
      b.classList.toggle("hidden");
      a.classList.toggle("flex");
      b.classList.toggle("flex");
    });
  });
}

function _handleToggleDropdown() {
  const btns = [...document.querySelectorAll(".ttnc-dropdown__btn")];
  const dropdowns = [...document.querySelectorAll(".ttnc-dropdown__panel")];
  if (!btns || !btns.length) return;
  btns.forEach((element, key, parent) => {
    const panel = element.nextElementSibling;
    const panelClass = panel.classList;
    if (!panel) return;
    element.addEventListener("click", (event) => {
      event.preventDefault();
      const placement = panel.getAttribute("data-popper-placement");

      var popper = new Popper(element, panel, {
        placement: placement || "bottom-start",
      });

      panelClass.toggle("hidden");
      panelClass.toggle("block");
    });
  });
}

function _handleToggletoolTip() {
  const btns = [...document.querySelectorAll(".ttnc-toolTip__btn")];
  const toolTips = [...document.querySelectorAll(".ttnc-toolTip__panel")];
  if (!btns || !btns.length) return;
  btns.forEach((element, key, parent) => {
    const panel = element.nextElementSibling;
    const panelClass = panel.classList;
    if (!panel) return;
    element.addEventListener("mouseenter", (event) => {
      event && event.preventDefault();
      const placement = panel.getAttribute("data-popper-placement");
      var popper = new Popper(element, panel, {
        placement: placement || "bottom-start",
      });
      panelClass.toggle("hidden");
      panelClass.toggle("block");
    });
    element.addEventListener("mouseleave", (event) => {
      event && event.preventDefault();
      const placement = panel.getAttribute("data-popper-placement");
      var popper = new Popper(element, panel, {
        placement: placement || "bottom-start",
      });
      panelClass.toggle("hidden");
      panelClass.toggle("block");
    });
  });
}

function _newGlideCarousel() {
  const _intantSlidePeek = (element) => {
    const glide = new Glide(element, {
      type: "carousel",
      // autoplay: true,
      hoverpause: true,
      gap: 40,
      perView: 3,
      peek: { before: 300, after: 150 },
      breakpoints: {
        1400: {
          perView: 2,
          peek: { before: 100, after: 50 },
          gap: 10,
        },
        800: {
          perView: 1,
          peek: 40,
          gap: 10,
        },
      },
    });
    glide.mount();
  };
  const _intantSlide = (element) => {
    const glide = new Glide(element, {
      rewind: true,
    });
    glide.mount();
  };
  const _intantSlideFade = (element) => {
    const glide = new Glide(element, {
      animationDuration: 1,
      rewindDuration: 1,
      throttle: 1,
      rewind: true,
      gap: 0,
    });
    glide.mount();
  };
  setTimeout(() => {
    const sliders = [...document.querySelectorAll(".glide")];
    const sliderFades = [...document.querySelectorAll(".glide-fade")];
    const sliderPeeks = [...document.querySelectorAll(".glide-peek")];
    if (sliders) {
      sliders.forEach(_intantSlide);
    }
    if (sliderFades) {
      sliderFades.forEach(_intantSlideFade);
    }
    if (sliderPeeks) {
      sliderPeeks.forEach(_intantSlidePeek);
    }
  }, 10);
}

function _setBgColorForAvatar() {
  const avatars = document.querySelectorAll(".wil-avatar-no-img");
  if (!avatars || !avatars.length) return;
  avatars.forEach((element, key, parent) => {
    const text = element.innerText;
    const backgroundIndex = Math.floor(
      text.charCodeAt(0) % avatarColors.length
    );
    const backgroundColor = avatarColors[backgroundIndex];
    //
    element.style.backgroundColor = backgroundColor;
  });
}

function myToolTipPopperJs() {
  const popcorns = [...document.querySelectorAll(".popcorn")];
  const tooltips = [...document.querySelectorAll(".tooltip")];

  popcorns.map((value) => {
    createPopper(popcorn, tooltip, {
      placement: "top",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 8],
          },
        },
      ],
    });
  });
}
