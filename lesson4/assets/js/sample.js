/**
 * Lesson4: 条件分岐 - 解答例ファイル
 */

// ===================================
// L4-S1:
// ===================================
function L4_S1() {
  console.log(3 >= 2);
  console.log(800 < 1000);
  console.log("active" !== "inactive");
}
L4_S1();

// ===================================
// L4-S2:
// ===================================
function L4_S2() {
  const inStock = true;
  const purchasable = false;
  console.log(inStock && purchasable);

  const onSale = true;
  const freeShipping = false;
  console.log(onSale || freeShipping);

  const outOfStock = true;
  console.log(!outOfStock);
}
L4_S2();

// ===================================
// L4-S3-1:
// ===================================
function L4_S3_1() {
  const q3 = document.querySelector("#q3");
  const input = q3.querySelector(".js-input-s3");
  const button = q3.querySelector(".js-btn-s3");

  input.addEventListener("blur", () => {
    if (input.value) {
      button.removeAttribute("disabled");
    }
  });
}
L4_S3_1();

// ===================================
// L4-S3-2:
// ===================================
function L4_S3_2() {
  const q3 = document.querySelector("#q3");
  const checkbox = q3.querySelector(".js-check-s3");
  const result = q3.querySelector(".js-checkResult-s3");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      result.textContent = "認証しました。";
    }
    if (!checkbox.checked) {
      result.textContent = "未承認です。";
    }
  });
}
L4_S3_2();

// ===================================
// L4-S4-1:
// ===================================
function L4_S4_1() {
  const q4 = document.querySelector("#q4");
  const area = q4.querySelector(".js-area-s4");
  const loginBtn = q4.querySelector(".js-loginBtn-s4");
  const logoutBtn = q4.querySelector(".js-logoutBtn-s4");

  area.addEventListener("click", (event) => {
    if (event.target === loginBtn) {
      loginBtn.disabled = true;
      logoutBtn.disabled = false;
    } else {
      logoutBtn.disabled = true;
      loginBtn.disabled = false;
    }
  });
}
L4_S4_1();

// ===================================
// L4-S4-2:
// ===================================
function L4_S4_2() {
  const q4 = document.querySelector("#q4");
  const statusBtn = q4.querySelector(".js-statusBtn-s4");
  const loginBtn = q4.querySelector(".js-loginBtn-s4");
  const statusText = q4.querySelector(".js-statusText-s4");

  statusBtn.addEventListener("click", () => {
    if (loginBtn.disabled) {
      statusText.textContent = "会員";
    } else {
      statusText.textContent = "ゲスト";
    }
  });
}
L4_S4_2();

// ===================================
// L4-S5-1:
// ===================================
function L4_S5_1() {
  const q5 = document.querySelector("#q5");
  const select = q5.querySelector(".js-size-s5");
  const alert = q5.querySelector(".js-cart-s5");
  select.addEventListener("change", () => {
    alert.classList.remove("is-red", "is-blue", "is-green");
    if (select.value === "Sサイズ") {
      alert.classList.add("is-red");
    } else if (select.value === "Mサイズ") {
      alert.classList.add("is-blue");
    } else {
      alert.classList.add("is-green");
    }
  });
}
L4_S5_1();

// ===================================
// L4-S5-2:
// ===================================
function L4_S5_2() {
  const q5 = document.querySelector("#q5");
  const select = q5.querySelector(".js-size-s5");
  const count = q5.querySelector(".js-option-s5");

  select.addEventListener("change", () => {
    if (select.value === "Sサイズ") {
      count.textContent = "在庫わずか";
    } else if (select.value === "Mサイズ") {
      count.textContent = "人気商品";
    } else {
      count.textContent = "送料無料対象";
    }
  });
}
L4_S5_2();

// ===================================
// L4-S6-1:
// ===================================
function L4_S6_1() {
  const q6 = document.querySelector("#q6");
  const submitBtn = q6.querySelector(".js-submitBtn-s6");
  const input = q6.querySelector(".js-input-s6");
  const result = q6.querySelector(".js-result-s6");

  submitBtn.addEventListener("click", () => {
    if (!input.value) return;
    result.textContent = input.value;
  });
}
L4_S6_1();

// ===================================
// L4-S6-2:
// ===================================
function L4_S6_2() {
  const q6 = document.querySelector("#q6");
  const checkBtn = q6.querySelector(".js-checkBtn-s6");
  const checkResult = q6.querySelector(".js-checkResult-s6");

  checkBtn.addEventListener("click", () => {
    const item = q6.querySelector(".js-item-s6");
    if (!item) {
      console.log("要素なし");
      return;
    }
    checkResult.textContent = "要素が見つかりました";
  });
}
L4_S6_2();

// ===================================
// L4-S7-1:
// ===================================
function L4_S7_1() {
  const q7 = document.querySelector("#q7");
  const select = q7.querySelector(".js-select-s7");
  const display = q7.querySelector(".js-display-s7");

  select.addEventListener("change", () => {
    switch (select.value) {
      case "home":
        display.textContent = "ホーム";
        break;
      case "about":
        display.textContent = "アバウト";
        break;
      case "contact":
        display.textContent = "お問い合わせ";
        break;
      default:
        display.textContent = "";
    }
  });
}
L4_S7_1();

// ===================================
// L4-S7-2:
// ===================================
function L4_S7_2() {
  const q7 = document.querySelector("#q7");
  const tabArea = q7.querySelector(".js-tabArea-s7");
  const tabResult = q7.querySelector(".js-tabResult-s7");

  tabArea.addEventListener("click", (event) => {
    const page = event.target.dataset.page;
    switch (page) {
      case "home":
        tabResult.textContent = "ホーム";
        break;
      case "about":
        tabResult.textContent = "アバウト";
        break;
      case "contact":
        tabResult.textContent = "お問い合わせ";
        break;
      default:
        tabResult.textContent = "不明";
    }
  });
}
L4_S7_2();

// ===================================
// L4-S8-1:
// ===================================
function L4_S8_1() {
  const q8 = document.querySelector("#q8");
  const favoriteBtn = q8.querySelector(".js-favoriteBtn-s8");

  favoriteBtn.addEventListener("click", () => {
    const isLiked = favoriteBtn.textContent === "いいね";
    favoriteBtn.textContent = isLiked ? "いいね解除" : "いいね";
  });
}
L4_S8_1();

// ===================================
// L4-S8-2:
// ===================================
function L4_S8_2() {
  const q8 = document.querySelector("#q8");
  const favoriteBtn = q8.querySelector(".js-favoriteBtn-s8");
  const likeStatus = q8.querySelector(".js-likeStatus-s8");

  favoriteBtn.addEventListener("click", () => {
    const isLiked = favoriteBtn.textContent === "いいね";
    likeStatus.textContent = isLiked ? "いいね済み" : "未いいね";
  });
}
L4_S8_2();

// ===================================
// L4-S9-1:
// ===================================
function L4_S9_1() {
  const q9_1 = document.querySelector("#q9_1");
  const submitBtn = q9_1.querySelector(".js-submitBtn-s9");
  const input = q9_1.querySelector(".js-input-s9");
  const result = q9_1.querySelector(".js-result-s9");

  submitBtn.addEventListener("click", () => {
    if (input.value) {
      result.textContent = "OK：送信しました";
    } else {
      result.textContent = "エラー：入力してください";
    }
  });
}
L4_S9_1();

// ===================================
// L4-S9-2:
// ===================================
function L4_S9_2() {
  const q9_2 = document.querySelector("#q9_2");
  const loginToggle = q9_2.querySelector(".js-loginToggle-s9");
  const logoutMenu = q9_2.querySelector(".js-logoutMenu-s9");
  const loginMenu = q9_2.querySelector(".js-loginMenu-s9");
  const loginStatus = q9_2.querySelector(".js-loginStatus-s9");

  loginToggle.addEventListener("click", () => {
    if (logoutMenu.classList.contains("u-hide")) {
      logoutMenu.classList.remove("u-hide");
      loginMenu.classList.add("u-hide");
      loginStatus.textContent = "ログイン中";
    } else {
      logoutMenu.classList.add("u-hide");
      loginMenu.classList.remove("u-hide");
      loginStatus.textContent = "";
    }
  });
}
L4_S9_2();

// ===================================
// L4-S9-3:
// ===================================
function L4_S9_3() {
  const q9_3 = document.querySelector("#q9_3");
  const openModal = q9_3.querySelector(".js-openModal-s9");
  const modalOverlay = document.querySelector(".js-modalOverlay-s9");
  const modal = document.querySelector(".js-modal-s9");

  openModal.addEventListener("click", () => {
    modalOverlay.classList.remove("u-hide");
    modalOverlay.style.display = "flex";
  });

  modalOverlay.addEventListener("click", (event) => {
    if (!modal.contains(event.target)) {
      modalOverlay.classList.add("u-hide");
      modalOverlay.style.display = "";
    }
  });
}
L4_S9_3();

// ===================================
// L4-S9-4:
// ===================================
function L4_S9_4() {
  const q9_4 = document.querySelector("#q9_4");
  const btn = q9_4.querySelector(".js-accordionBtn-s9");

  btn.addEventListener("click", () => {
    const accordion = btn.closest(".js-accordion-s9");
    const content = accordion.querySelector(".js-accordionContent-s9");

    if (content.classList.contains("is-open")) {
      content.classList.add("is-close");
      content.classList.remove("is-open");
    } else if (content.classList.contains("is-close")) {
      content.classList.remove("is-close");
      content.classList.add("is-open");
    }
  });
}
L4_S9_4();

// ===================================
// L4-S9-5:
// ===================================
function L4_S9_5() {
  const q9_5 = document.querySelector("#q9_5");
  const tabBtns = q9_5.querySelectorAll(".js-tabBtn-s9");
  const tabContents = q9_5.querySelectorAll(".js-tabContent-s9");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.id;

      tabBtns.forEach((b) => {
        b.classList.remove("is-active");
      });
      btn.classList.add("is-active");

      tabContents.forEach((content) => {
        content.style.display = "none";
      });

      const targetContent = q9_5.querySelector(`.js-tabContent-s9[data-content="${targetId}"]`);
      if (targetContent) {
        targetContent.style.display = "block";
      }
    });
  });
}
L4_S9_5();
