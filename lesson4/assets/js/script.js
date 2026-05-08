/**
 * ===================================
 * JavaScript Script lesson4
 * ===================================
 */

/**
 * 設定データ - 出力予想問題の正解
 * @type {Object.<string, string>}
 */
window.QUIZ_ANSWERS = {
  q1_1: "b",
  q1_2: "b",
  q2_1: "a",
  q2_2: "a",
  q3_1: "b",
  q3_2: "c",
  q4_1: "b",
  q4_2: "c",
  q5_1: "b",
  q5_2: "b",
  q6_1: "b",
  q6_2: "d",
  q7_1: "b",
  q7_2: "b",
  q8_1: "c",
  q8_2: "b",
};

/**
 * 設定データ - コード補完問題の正解
 * @type {Object.<string, {inputs: string[], answers: string[], validation: string}>}
 */
window.BLANK_ANSWERS = {
  11: {
    inputs: [".js-blank--11-1"],
    answers: ["!==", "!="],
    validation: "multiple_valid",
  },
  12: {
    inputs: [".js-blank--12-1", ".js-blank--12-2"],
    answers: ["!", "==="],
    validation: "default",
  },
  21: {
    inputs: [".js-blank--21-1"],
    answers: ["&&"],
    validation: "default",
  },
  22: {
    inputs: [".js-blank--22-1"],
    answers: ["||"],
    validation: "default",
  },
  31: {
    inputs: [".js-blank--31-1", ".js-blank--31-2"],
    answers: ["length", "5"],
    validation: "default",
  },
  32: {
    inputs: [".js-blank--32-1"],
    answers: ["!==", "!="],
    validation: "multiple_valid",
  },
  41: {
    inputs: [".js-blank--41-1", ".js-blank--41-2"],
    answers: ["toggleSwitch", "checked"],
    validation: "default",
  },
  42: {
    inputs: [".js-blank--42-1"],
    answers: ["contains"],
    validation: "default",
  },
  51: {
    inputs: [".js-blank--51-1"],
    answers: ["===", "=="],
    validation: "multiple_valid",
  },
  52: {
    inputs: [".js-blank--52-1", ".js-blank--52-2"],
    answers: ["<", "<"],
    validation: "default",
  },
  61: {
    inputs: [".js-blank--61-1", ".js-blank--61-2"],
    answers: ["!", "btn"],
    validation: "default",
  },
  62: {
    inputs: [".js-blank--62-1"],
    answers: ["closest"],
    validation: "default",
  },
  71: {
    inputs: [".js-blank--71-1", ".js-blank--71-2"],
    answers: ["color", "case"],
    validation: "default",
  },
  72: {
    inputs: [".js-blank--72-1", ".js-blank--72-2"],
    answers: ["default", "break"],
    validation: "default",
  },
  81: {
    inputs: [".js-blank--81-1", ".js-blank--81-2"],
    answers: ["?", ":"],
    validation: "default",
  },
  82: {
    inputs: [".js-blank--82-1", ".js-blank--82-2"],
    answers: ["?", ":"],
    validation: "default",
  },
};
