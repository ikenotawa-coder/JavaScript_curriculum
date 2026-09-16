/**
 * Lesson2: DOM操作 - 課題提出用ファイル
 */
// ===================================
// L2-S1-1:
// '#q1'要素を取得し、コンソールに表示する。
//
// L2-S1-2:
// '#q1'要素の中の'.js-item-s1'要素を取得し、コンソールに表示する。
//
// L2-S1-3:
// '.js-container-s1'の中にある'.js-button-s1'をNodeListとしてすべて取得し、コンソールに表示する。
//
// L2-S1-4:
// L2-S1-3で取得した要素のうち2つ目の要素をNodeListのインデックス[]を使って指定し、コンソールに表示する。
// ===================================
function L2_S1() {
    // L2-S1-1:
    const textElement = document.querySelector("#q1");
    console.log(textElement);

    // L2-S1-2:
    const itemElement = textElement.querySelector(".js-item-s1");
    console.log(itemElement);

    // L2-S1-3:
    const buttonList = document.querySelectorAll(
        ".js-container-s1 .js-button-s1",
    );
    console.log(buttonList);

    // L2-S1-4:
    const secondButton = buttonList[1];
    console.log(secondButton);
}
L2_S1();

// ===================================
// L2-S2-1:
// '.js-header-s2'要素を取得し、要素のテキストを"明日の予定"という文字列に変更する。
//
// L2-S2-2:
// '.js-status-s2'要素を取得し、既存のテキストの末尾に"準備完了"という文字列を追加する。
// ===================================
function L2_S2() {
    // L2-S2-1:
    const headerElement = document.querySelector(".js-header-s2");
    headerElement.textContent = "明日の予定";
    console.log(headerElement);

    // L2-S2-2:
    const statusElement = document.querySelector(".js-status-s2");
    statusElement.textContent += "準備完了";
    console.log(statusElement);
}
L2_S2();

// ===================================
// L2-S3-1:
// '.js-submitBtn-old-s3'要素を取得し、class属性の値を'c-button-practice js-submitBtn-s3'に変更する。
//
// L2-S3-2:
// '.js-cancelBtn-s3'要素を取得し、disabled属性を追加して無効化する。（disabled属性には事前にスタイルを実装済み。）
// ===================================
function L2_S3() {
    // L2-S3-1:
    const submitBtnOld = document.querySelector(".js-submitBtn-old-s3");
    submitBtnOld.className = "c-button-practice js-submitBtn-s3";
    console.log(submitBtnOld);

    // L2-S3-2:
    const cancelBtn = document.querySelector(".js-cancelBtn-s3");
    cancelBtn.setAttribute("disabled", true);
    console.log(cancelBtn);
}
L2_S3();

// ===================================
// L2-S4-1:
// '.js-loginForm-s4'要素を取得して'.is-hidden'を削除しフォームを表示する。
//
// L2-S4-2:
// '.js-loginForm-s4'要素の中の'.js-loginBtn-s4'要素を取得して、'.is-active'を追加し色を変更する。
// ===================================
function L2_S4() {
    // L2-S4-1:
    const loginForm = document.querySelector(".js-loginForm-s4");
    loginForm.classList.remove("is-hidden");
    console.log(loginForm);

    // L2-S4-2:
    const loginBtn = loginForm.querySelector(".js-loginBtn-s4");
    loginBtn.classList.add("is-active");
    console.log(loginBtn);
}
L2_S4();

// ===================================
// L2-S5-1:
// 新しいタスク"メール返信"を作成し、末尾に追加。スタイルは既存のタスクと統一する。
//
// L2-S5-2:
// '.js-taskForm-s5'内のすべてのli要素を取得する。
// 取得したli要素のうち打ち合わせタスクのみをインデックスを使って削除する。
// ===================================
function L2_S5() {
    // L2-S5-1:
    const newTask = document.createElement("li");
    newTask.textContent = "メール返信";
    newTask.className = "p-practice__card";
    const taskForm = document.querySelector(".js-taskForm-s5");
    taskForm.appendChild(newTask);
    console.log(newTask);

    // L2-S5-2:
    const taskFormList = taskForm.querySelectorAll("li");
    const meetingTask = taskFormList[1];
    taskForm.removeChild(meetingTask); // もしくは meetingTask.remove(); meetingTaskという要素自体を削除
    console.log(meetingTask);
}
L2_S5();

// ===================================
// L2-S6-1:
// '.js-email-s6'要素の値を取得してコンソールに出力し、その後入力欄を空にする。
//
// L2-S6-2:
// '.js-agree-s6'要素を初期状態でチェック済みにし、チェック状態をコンソールに出力する。
// ===================================
function L2_S6() {
    // L2-S6-1:
    const elementEmail = document.querySelector(".js-email-s6");
    console.log(elementEmail.value);
    elementEmail.value = "";

    // L2-S6-2:
    const elementAgree = document.querySelector(".js-agree-s6");
    elementAgree.checked = true;
    console.log(elementAgree.checked);
}
L2_S6();

// ===================================
// L2-S7-1:
// '.js-target-s7'要素の親要素の、最初の子要素のテキストをコンソールに表示する。
//
// L2-S7-2:
// '.js-target-s7'要素の、次の兄弟要素のテキストを"ニュース"へ変更する。
// ===================================
function L2_S7() {
    // L2-S7-1:
    const target = document.querySelector(".js-target-s7");
    const parent = target.parentElement;
    const firstChild = parent.firstElementChild;
    console.log(firstChild.textContent);

    // L2-S7-2:
    const next = target.nextElementSibling;
    next.textContent = "ニュース";
    console.log(next.textContent);
}
L2_S7();

// ===================================
// L2-S8-1:
// '.js-user-s8'のdata-user-idの値を取得し、コンソールに表示する。

// L2-S8-2:
// L2-S8-1で取得したdata-user-idの値と同一のid属性の値を持つ要素を取得し、data-nameを"田中茉莉"へ変更する。
// ===================================
function L2_S8() {
    // L2-S8-1:
    const user = document.querySelector(".js-user-s8");
    const userId = user.dataset.userId;
    console.log(userId);

    // L2-S8-2:
    const targetElement = document.getElementById(userId);
    targetElement.dataset.name = "田中茉莉";
    console.log(targetElement.dataset.name);
}
L2_S8();

// ===================================
// L2-S9-1:
// 新しくDocumentFragmentを作成し、'.p-practice__card'をもつli要素を1つ作成する。（テキストは"HOME"）
// 作成したli要素をDocumentFragmentに追加する。

// L2-S9-2:
// L2-S9-1で作成したDocumentFragmentを、'.js-template-s9'要素の中身（content）に追加する。

// L2-S9-3:
// '.js-template-s9'要素の中身を複製し、'.js-navList-s9'要素の配下に追加する。
// ===================================
function L2_S9() {
    // L2-S9-1:
    const fragment = document.createDocumentFragment();
    const liElement = document.createElement("li");
    liElement.textContent = "HOME";
    liElement.classList.add("p-practice__card");
    fragment.appendChild(liElement);
    console.log(fragment);

    // L2-S9-2:
    const template = document.querySelector(".js-template-s9");
    template.content.appendChild(fragment);
    console.log(template.content);

    // L2-S9-3:
    const clone = document.importNode(template.content, true);
    const navList = document.querySelector(".js-navList-s9");
    navList.appendChild(clone);
    console.log(navList);
}
L2_S9();

// ===================================
// L2-S10-1:
// ① '.js-name-s10'要素のテキストを"田中祐美"に変更する。
// ② '.js-status-s10'要素のテキストを"承認済み"へ変更する。
// ③ ②で変更した'.js-status-s10'要素の親要素のdata-role属性値を"member"へ変更し、'.is-active'を追加する。
// ===================================
function L2_S10_1() {
    // L2-S10-1-①
    const name = document.querySelector(".js-name-s10");
    name.textContent = "田中祐美";
    console.log(name);

    // L2-S10-1-②
    const status = document.querySelector(".js-status-s10");
    status.textContent = "承認済み";
    console.log(status);

    // L2-S10-1-③
    const parent = status.parentElement;
    parent.dataset.role = "member";
    parent.classList.add("is-active");
    console.log(parent);
}
L2_S10_1();

// ===================================
// L2-S10-2:
// ① '.js-link-s10'要素のhref属性の値を"https://www.google.com/"に変更する。
// ② 属性にtarget="_blank"を追加し別タブで開くように設定する。
// ③ '.-disabled'を削除しボタンを有効化する。
// ④ '.js-link-s10'要素から最も近い親要素'.p-practice__card'要素を取得し、その親要素内の最後の子要素を削除する。
// ===================================
function L2_S10_2() {
    // L2-S10-2-①
    const link = document.querySelector(".js-link-s10");
    link.setAttribute("href", "https://www.google.com/");
    console.log(link);

    // L2-S10-2-②
    link.setAttribute("target", "_blank");
    console.log(link);

    // L2-S10-2-③
    link.classList.remove("-disabled");
    console.log(link);

    // L2-S10-2-④
    const card = link.closest(".p-practice__card");
    const lastChild = card.lastElementChild;
    card.removeChild(lastChild);
    console.log(card);
}
L2_S10_2();

// ===================================
// L2-S10-3:
// ① 初期表示時に、data-icon="javascript"を持つラジオボタンを選択状態にする。
// ② '.js-container-s10'の子要素から、現在チェックされている入力要素を取得する。
// ③ その選択された要素の値（value）を'.js-result-s10'要素に表示する。
// ===================================
function L2_S10_3() {
    // L2-S10-3-①
    const jsRadio = document.querySelector('input[data-icon="javascript"]');
    jsRadio.checked = true;
    console.log(jsRadio);

    // L2-S10-3-②
    const container = document.querySelector(".js-container-s10");
    const checkedInput = container.querySelector("input:checked");
    console.log(checkedInput);

    // L2-S10-3-③
    const result = document.querySelector(".js-result-s10");
    result.textContent = checkedInput.value;
    console.log(result);
}
L2_S10_3();
