export const advancedQuiz = [
  {
    id: "01d45e6b-789b-12d3-4567-e89b12d3e456",
    question: "JavaScriptの'=='と'==='の違いは何ですか？",
    answers: [
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123456",
        answer: "'=='は値の比較のみを行い、'==='は値と型の比較を行う。",
        isCorrectAnswer: true,
      },
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123457",
        answer: "'=='は型の比較のみを行い、'==='は値の比較を行う。",
        isCorrectAnswer: false,
      },
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123458",
        answer: "両方とも厳密な比較を行う。",
        isCorrectAnswer: false,
      },
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123459",
        answer: "違いはなく、どちらも同じ動作をする。",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    id: "23f4567b-89cd-12e3-4567-f89d12e3f456",
    question: "JavaScriptで'let', 'var', 'const'の違いは何ですか？",
    answers: [
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123467",
        answer: "'let'と'const'はブロックスコープ、'var'は関数スコープ。",
        isCorrectAnswer: true,
      },
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123468",
        answer: "'let'は再代入可能、'const'と'var'は再代入不可。",
        isCorrectAnswer: false,
      },
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123469",
        answer:
          "'var'と'let'は同じスコープを持つが、'const'はグローバルスコープを持つ。",
        isCorrectAnswer: false,
      },
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123470",
        answer: "'const'と'var'は再宣言可能、'let'は再宣言不可。",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    id: "34g5678c-9def-12g3-4567-g9ef12g3g456",
    question:
      "JavaScriptのイベントループにおいて、マクロタスクとミクロタスクの違いは何ですか？",
    answers: [
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123478",
        answer:
          "マクロタスクはイベントループの各サイクルで一つ実行され、ミクロタスクは同じサイクル内で全て実行される。",
        isCorrectAnswer: true,
      },
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123479",
        answer:
          "ミクロタスクは非同期コールバック専用、マクロタスクは同期操作専用。",
        isCorrectAnswer: false,
      },
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123480",
        answer: "マクロタスクはミクロタスクよりも優先順位が高い。",
        isCorrectAnswer: false,
      },
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123481",
        answer:
          "ミクロタスクはDOMの更新後に実行されるが、マクロタスクは更新前に実行される。",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    id: "45h6789d-0fgh-12h3-4567-h0gh12h3h456",
    question: "JavaScriptにおいてクロージャーとは何ですか？",
    answers: [
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123491",
        answer: "関数とその関数が宣言されたレキシカル環境の組み合わせ。",
        isCorrectAnswer: true,
      },
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123492",
        answer: "同じスコープ内で定義された複数の関数の集まり。",
        isCorrectAnswer: false,
      },
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123493",
        answer: "外部関数の変数を参照しない内部関数。",
        isCorrectAnswer: false,
      },
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123494",
        answer: "プログラムの実行を一時停止して再開する機能。",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    id: "56i7890e-1ijk-12i3-4567-i1jk12i3i456",
    question: "JavaScriptでプロミスを使用する利点は何ですか？",
    answers: [
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123501",
        answer: "非同期処理の成功と失敗をより簡潔に扱える。",
        isCorrectAnswer: true,
      },
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123502",
        answer: "プログラムの実行速度を向上させる。",
        isCorrectAnswer: false,
      },
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123503",
        answer: "コールバック地獄を完全に解消する。",
        isCorrectAnswer: false,
      },
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123504",
        answer: "非同期処理を同期処理に変換する。",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    id: "67j8901f-2klm-12j3-4567-j2lm12j3j456",
    question:
      "JavaScriptで'async'と'await'の使用により実現できることは何ですか？",
    answers: [
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123511",
        answer: "非同期関数の中でプロミスの結果を同期的に扱うことができる。",
        isCorrectAnswer: true,
      },
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123512",
        answer: "すべての非同期処理を並列実行できる。",
        isCorrectAnswer: false,
      },
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123513",
        answer: "非同期処理を使用せずにプログラムを書くことができる。",
        isCorrectAnswer: false,
      },
      {
        id: "abcdef12-ab12-cd34-ef56-abcdef123514",
        answer:
          "関数の実行を任意のタイミングで一時停止し、再開することができる。",
        isCorrectAnswer: false,
      },
    ],
  },
];
