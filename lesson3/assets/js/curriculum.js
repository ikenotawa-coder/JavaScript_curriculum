/**
 * Lesson3: イベントリスナー - 課題提出用ファイル
 */
// ===================================
// L3-S1-1:
// '.js-click-s1'要素にマウスがのったときに発火するイベントを追加する。
// マウスがのった時に'.js-display-s1'要素のテキストを「ファイルを選択しました。」に変更する。
//
// L3-S1-2:
// '.js-click-s1'要素にアロー関数を使用し、ダブルクリックイベントを追加する。
// ダブルクリック時に'.js-display-s1'要素のテキストを「ファイルを開きました。」に変更する。
// ===================================
function handleMouseEvents() {
    const click = document.querySelector(".js-click-s1");
    const display = document.querySelector(".js-display-s1");

    // L3-S1-1
    click.addEventListener("mouseenter", function () {
        display.textContent = "ファイルを選択しました。";
    });

    // L3-S1-2
    click.addEventListener("dblclick", () => {
        display.textContent = "ファイルを開きました。";
    });
}
handleMouseEvents();

// ===================================
// L3-S3-1:
// '.js-input-s3'要素に文字を入力したら、その内容を'.js-message-s3'要素のテキストにリアルタイムで反映する。
//
// L3-S3-2:
// '.js-input-s3'要素にマウスをのせたら'.js-status-s3'要素のテキストに「入力中...」、離れたときは「待機中」を表示する。
// ===================================
function handleInputAndMouseEvents() {
    const input = document.querySelector(".js-input-s3");
    const message = document.querySelector(".js-message-s3");
    const status = document.querySelector(".js-status-s3");

    // L3-S3-1 : 入力内容をリアルタイムに反映する
    input.addEventListener("input", () => {
        message.textContent = input.value;
    });

    // L3-S3-2 : マウスのオンオフでステータスを変更する
    // マウスを乗せたとき
    input.addEventListener("mouseenter", () => {
        status.textContent = "入力中...";
    });

    // マウスが離れたとき
    input.addEventListener("mouseleave", () => {
        status.textContent = "待機中";
    });
}
handleInputAndMouseEvents();

// ===================================
// L3-S4-1:
// '.js-event-s4'要素をクリック時に発生するイベントオブジェクトを使用し、クリックされたボタンに'.is-active'クラスを付与する。
// テキストを「電源ON状態」に変更する。（スタイルは実装済み。）
//
// L3-S4-2:
// .js-key-s4要素の上でキーボードのキーを押したとき、イベントオブジェクトを使用して押されたキー名を取得する。
// そのキー名を.js-key-s4要素自身のvalue属性に入れて表示する。
// ===================================
function handleClickAndKeyboardEvents() {
    const eventButton = document.querySelector(".js-event-s4");
    const keyInput = document.querySelector(".js-key-s4");

    // L3-S4-1 : クリック時にクラスを付与し、テキストを変更する
    eventButton.addEventListener("click", (event) => {
        event.currentTarget.classList.add("is-active");
        event.currentTarget.textContent = "電源ON状態";
    });

    // L3-S4-2 : キー押下時に押されたキー名を取得してvalue属性に設定する
    keyInput.addEventListener("keydown", (event) => {
        event.currentTarget.value = event.key;
    });
}
handleClickAndKeyboardEvents();

// ===================================
// L3-S5-1:
// '.js-outer-s5'要素と'.js-inner-s5'要素それぞれにクリックイベントを追加する。
// '.js-outer-s5'をクリックした場合：'.js-log-s5'要素内にpタグでテキスト"パネルをクリック"を追加する。
// '.js-inner-s5'をクリックした場合：'.js-log-s5'要素内にpタグでテキスト"オプションを選択"を追加する。
// （L3-S5-2で修正するため実装後は'.js-inner-s5'をクリックするとバブリングにより2つのログが表示されることを確認する。）
//
// L3-S5-2:
// '.js-inner-s5'要素をクリック時に、外側（パネル側）の処理が実行されないように修正する。
// ===================================
function handlePanelOptionClick() {
    const outer = document.querySelector(".js-outer-s5");
    const inner = document.querySelector(".js-inner-s5");
    const log = document.querySelector(".js-log-s5");

    // ログを1行追加する
    const addLog = (text) => {
        const p = document.createElement("p");
        p.textContent = text;
        log.appendChild(p);
    };

    // L3-S5-1 : 外側（パネル）のクリックイベント
    outer.addEventListener("click", () => {
        addLog("パネルをクリック");
    });

    // L3-S5-1 : 内側（オプション）のクリックイベント
    inner.addEventListener("click", (event) => {
        // L3-S5-2:バブリングを停止し、外側の処理を実行させない
        event.stopPropagation();
        addLog("オプションを選択");
    });
}
handlePanelOptionClick();

// ===================================
// L3-S6-1:
// '.js-form-s6'要素を押下(フォーム送信)時にpreventDefault()で送信を止める。
// その後'.js-message-s6'要素に「送信前チェック中…」と表示する。
//
// L3-S6-2:
// L3-S6-1でフォーム送信を止める。
// 3秒後に"送信完了"と表示してフォームを送信する。
// ===================================
function handleFormSubmission() {
    const form = document.querySelector(".js-form-s6");
    const message = document.querySelector(".js-message-s6");

    form.addEventListener("submit", (event) => {
        // L3-S6-1 : 送信を止めて、チェック中と表示する
        event.preventDefault();
        message.textContent = "送信前チェック中…";

        // L3-S6-2 : 3秒後に「送信完了」と表示して、フォームを送信する
        setTimeout(() => {
            message.textContent = "送信完了";
            form.submit();
        }, 3000);
    });
}
handleFormSubmission();

// ===================================
// L3-S8-1:
// '.js-menu-s8'要素にクリックイベントを委譲で設定する。
// クリックされた'.js-item-s8'要素に'.is-active'をトグルして切り替える。
// （今回はif文での対象判定は不要。）
//
// L3-S8-2:
// '.js-add-s8'要素にクリックイベントを設定する。
// その要素をクリック時に'.js-menu-s8'要素の中に'.js-newItem-s8'を持つ新しいli要素の「ジュース」を追加する。
// デザインは他のカードと統一する。
// ===================================
function handleMenuEvents() {
    const menu = document.querySelector(".js-menu-s8");
    const addButton = document.querySelector(".js-add-s8");

    // L3-S8-1 : 親要素にクリックイベントを委譲し、クリックされた要素のis-activeを切り替える
    menu.addEventListener("click", (event) => {
        event.target.classList.toggle("is-active");
    });

    // L3-S8-2 : クリック時に新しいli要素「ジュース」をメニューに追加する
    addButton.addEventListener("click", () => {
        const newItem = document.createElement("li");
        newItem.classList.add(
            "p-practice__card",
            "js-item-s8",
            "js-newItem-s8",
        );
        newItem.textContent = "ジュース";
        menu.appendChild(newItem);
    });
}
handleMenuEvents();

// ===================================
// L3-S9-1:
// ①.js-nameInput-s9要素のテキストに名前、.js-ageInput-s9要素のテキストに年齢を入力し.js-register-s9要素をクリックする。
// ②入力内容を.js-userResult-s9要素のテキストに「名前: [入力した名前], 年齢: [入力した年齢]歳」の形式で表示する。
// ===================================
function handleUserRegistration() {
    const nameInput = document.querySelector(".js-nameInput-s9");
    const ageInput = document.querySelector(".js-ageInput-s9");
    const registerButton = document.querySelector(".js-register-s9");
    const userResult = document.querySelector(".js-userResult-s9");

    registerButton.addEventListener("click", () => {
        const name = nameInput.value;
        const age = ageInput.value;
        const text = `名前: ${name}, 年齢: ${age}歳`;
        userResult.textContent = text;
    });
}
handleUserRegistration();

// ===================================
// L3-S9-2:
// ①.js-numLeft-s9、.js-numRight-s9要素に数値を入力する。
// ②.js-addBtn-s9、.js-subtractBtn-s9、.js-multiplyBtn-s9、.js-divideBtn-s9要素をクリックで各計算を実行する。
// ③結果を.js-calcResult-s9要素のテキストに計算結果を表示する。
// ===================================
function handleCalculation() {
    const numLeft = document.querySelector(".js-numLeft-s9");
    const numRight = document.querySelector(".js-numRight-s9");
    const addBtn = document.querySelector(".js-addBtn-s9");
    const subtractBtn = document.querySelector(".js-subtractBtn-s9");
    const multiplyBtn = document.querySelector(".js-multiplyBtn-s9");
    const divideBtn = document.querySelector(".js-divideBtn-s9");
    const calcResult = document.querySelector(".js-calcResult-s9");

    // 入力値を数値に変換して取得する
    const getNumbers = () => {
        return {
            left: Number(numLeft.value),
            right: Number(numRight.value),
        };
    };

    // 足し算
    addBtn.addEventListener("click", () => {
        const { left, right } = getNumbers();
        calcResult.textContent = left + right;
    });

    // 引き算
    subtractBtn.addEventListener("click", () => {
        const { left, right } = getNumbers();
        calcResult.textContent = left - right;
    });

    // 掛け算
    multiplyBtn.addEventListener("click", () => {
        const { left, right } = getNumbers();
        calcResult.textContent = left * right;
    });

    // 割り算
    divideBtn.addEventListener("click", () => {
        const { left, right } = getNumbers();
        calcResult.textContent = left / right;
    });
}
handleCalculation();

// ===================================
// L3-S9-3:
// ①.js-colorInput-s9の値が変更されたとき、.js-targetBox-s9の背景色をインラインスタイルを使用して選択した色に変更する。
// ②背景色を変更したとき、.js-currentColor-s9に現在の色のHEXコードを表示する。
// ③.js-resetBtn-s9をクリックしたとき、背景色を初期状態（#ffffff）に戻す。
// ④リセット時は.js-colorInput-s9 の値、.js-targetBox-s9の背景色、.js-currentColor-s9の表示をすべて初期状態にする。
// ===================================
function handleColorChange() {
    const colorInput = document.querySelector(".js-colorInput-s9");
    const targetBox = document.querySelector(".js-targetBox-s9");
    const currentColor = document.querySelector(".js-currentColor-s9");
    const resetBtn = document.querySelector(".js-resetBtn-s9");

    // 初期状態の色
    const defaultColor = "#ffffff";

    // L3-S9-3-①② : 色が変更されたら背景色とHEXコードを更新する
    colorInput.addEventListener("input", () => {
        targetBox.style.backgroundColor = colorInput.value;
        currentColor.textContent = colorInput.value;
    });

    // L3-S9-3-③④ : リセットで入力欄・背景色・表示をすべて初期状態に戻す
    resetBtn.addEventListener("click", () => {
        colorInput.value = defaultColor;
        targetBox.style.backgroundColor = defaultColor;
        currentColor.textContent = defaultColor;
    });
}
handleColorChange();

// ===================================
// L3-S9-4:
// ①.js-textInput-s9要素にテキストを入力のたびに.js-charCount-s9要素のテキストに文字数を表示する。
// ②.js-clearBtn-s9要素をクリックでテキストエリアを空にし、.js-charCount-s9要素のテキストを「0」に更新する。
// ===================================
function handleTextCount() {
    const textInput = document.querySelector(".js-textInput-s9");
    const charCount = document.querySelector(".js-charCount-s9");
    const clearBtn = document.querySelector(".js-clearBtn-s9");

    // L3-S9-4-① : 入力のたびに文字数を表示する
    textInput.addEventListener("input", () => {
        charCount.textContent = textInput.value.length;
    });

    // L3-S9-4-② : クリアで入力欄を空にし、文字数を0にする
    clearBtn.addEventListener("click", () => {
        textInput.value = "";
        charCount.textContent = 0;
    });
}
handleTextCount();
