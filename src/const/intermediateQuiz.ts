export const intermediateQuiz = [
  {
    id: "d335f476-5d75-4b99-8d94-1d4b0e6b6baf",
    question:
      "次のうち、JavaScriptのプロトタイプ継承を示す正しいコードはどれですか？",
    answers: [
      {
        id: "71c3e7b7-4139-4721-b512-4e3c3f1a5a56",
        answer: "Child.prototype = new Parent();",
        isCorrectAnswer: true,
      },
      {
        id: "ff6db24e-e5b7-4a1e-aa24-54c9b710b61b",
        answer: "Child.prototype = Parent.prototype;",
        isCorrectAnswer: false,
      },
      {
        id: "ab0de123-456b-42f9-8765-8a0b2c3d4e5f",
        answer: "Child.prototype == Parent;",
        isCorrectAnswer: false,
      },
      {
        id: "f45b6c7d-8e9f-1011-a123-456b7c8d9e0f",
        answer: "Child.prototype === Parent.prototype;",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    id: "13f45c76-75a4-4b39-8d94-2a3b4e5b6c7d",
    question:
      "次のうち、'this'キーワードがグローバルオブジェクトを参照するコンテキストはどれですか？",
    answers: [
      {
        id: "7a8b9c0d-1e2f-3g4h-567i-8j9k0l1m2n3o",
        answer: "イベントハンドラ内で",
        isCorrectAnswer: false,
      },
      {
        id: "4p5q6r7s-8t9u-0v1w-x2y3-z4a5b6c7d8e9",
        answer: "厳格モード('use strict')で",
        isCorrectAnswer: false,
      },
      {
        id: "f0g1h2i3-j4k5-l6m7-n8o9-p0q1r2s3t4u",
        answer: "直接呼び出された普通の関数内で",
        isCorrectAnswer: true,
      },
      {
        id: "v5w6x7y8-z9a0-b1c2-d3e4-f5g6h7i8j9k0",
        answer: "メソッド内で",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    id: "5c6d7e8f-90a1-b2c3-d4e5-f6g7h8i9j0k1",
    question: "JavaScriptにおいて「IIFE」とは何の略ですか？",
    answers: [
      {
        id: "l1m2n3o4-p5q6-r7s8-t9u0-v1w2x3y4z5",
        answer: "Immediately Invoked Function Expression",
        isCorrectAnswer: true,
      },
      {
        id: "6a7b8c9d-0e1f-2g3h-4i5j-6k7l8m9n0o1",
        answer: "Important Integral Function Execution",
        isCorrectAnswer: false,
      },
      {
        id: "2p3q4r5s-6t7u-8v9w-x0y1-z2a3b4c5d6e",
        answer: "Internal Interactive Function Element",
        isCorrectAnswer: false,
      },
      {
        id: "7f8g9h0i-1j2k-3l4m-5n6o-7p8q9r0s1t",
        answer: "Inline Immediate Function Encapsulation",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    id: "79c52a6d-fbde-4416-ba32-d5a7e8f9g0h1",
    question:
      "JavaScriptのコンストラクタ関数内で使用される 'new.target' の値は何を指しますか？",
    answers: [
      {
        id: "6d5f4e3d-2c1b-0a9e-8f7g-6h5i4j3k2l1",
        answer: "関数自体を指す",
        isCorrectAnswer: false,
      },
      {
        id: "9m8n7o6p-5q4r-3s2t-1u0v-w1x2y3z4a5",
        answer: "コンストラクタを呼び出したオブジェクト",
        isCorrectAnswer: false,
      },
      {
        id: "b6c7d8e9-f0g1-h2i3-j4k5-l6m7n8o9p0",
        answer: "new演算子によって生成される新しいインスタンス",
        isCorrectAnswer: true,
      },
      {
        id: "q2r3s4t5-u6v7-w8x9-y0z1-a2b3c4d5e6",
        answer: "undefined、new演算子なしでコンストラクタが呼ばれた場合",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    id: "1h2i3j4k-5l6m-7n8o-9p0q-r1s2t3u4v5",
    question: "JavaScriptで 'Symbol' タイプの主な用途は何ですか？",
    answers: [
      {
        id: "w6x7y8z9-0a1b-2c3d-4e5f-6g7h8i9j0",
        answer: "計算式を表す",
        isCorrectAnswer: false,
      },
      {
        id: "k1l2m3n4-o5p6-q7r8-s9t0-u1v2w3x4y",
        answer: "新しいプリミティブ型を生成する",
        isCorrectAnswer: false,
      },
      {
        id: "5z6a7b8c-9d0e-1f2g-3h4i-5j6k7l8m9",
        answer:
          "プロパティキーとして使用し、オブジェクトプロパティの衝突を避ける",
        isCorrectAnswer: true,
      },
      {
        id: "n0o1p2q3-r4s5-t6u7-v8w9-x0y1z2a3b",
        answer: "コードの最適化を行う",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    id: "4c5d6e7f-8g9h-0i1j-2k3l-4m5n6o7p8q",
    question: "JavaScriptで 'Map' オブジェクトの特徴は何ですか？",
    answers: [
      {
        id: "9r0s1t2u-3v4w-5x6y-7z8a-9b0c1d2e3",
        answer: "キーに文字列のみを使用できる",
        isCorrectAnswer: false,
      },
      {
        id: "f4g5h6i7-j8k9-l0m1-n2o3-p4q5r6s7t",
        answer: "値の挿入順序を記憶する",
        isCorrectAnswer: true,
      },
      {
        id: "8u9v0w1x-2y3z-4a5b-6c7d-8e9f0g1h2",
        answer: "プロトタイプチェーンを持たない",
        isCorrectAnswer: false,
      },
      {
        id: "i3j4k5l6-m7n8-o9p0-q1r2-s3t4u5v6w",
        answer: "すべてのキーと値は一意でなければならない",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    id: "9h0i1j2k-3l4m-5n6o-7p8q-9r0s1t2u3v",
    question:
      "次のコードスニペットが返すものは何ですか？ `['1', '7', '11'].map(parseInt)`",
    answers: [
      {
        id: "w4x5y6z7-8a9b-0c1d-2e3f-4g5h6i7j8",
        answer: "[1, 7, 11]",
        isCorrectAnswer: false,
      },
      {
        id: "k9l0m1n2-o3p4-q5r6-s7t8-u9v0w1x2y",
        answer: "[1, NaN, 3]",
        isCorrectAnswer: true,
      },
      {
        id: "3z4a5b6c-7d8e-9f0g-1h2i-3j4k5l6m7",
        answer: "['1', '7', '11']",
        isCorrectAnswer: false,
      },
      {
        id: "n8o9p0q1-r2s3-t4u5-v6w7-x8y9z0a1b",
        answer: "Errorが投げられる",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    id: "4c5d6e7f-8g9h-0i1j-2k3l-4m5n6o7p8q",
    question:
      "ES6クラス構文において、コンストラクタ以外のメソッドを何と呼びますか？",
    answers: [
      {
        id: "9r0s1t2u-3v4w-5x6y-7z8a-9b0c1d2e3",
        answer: "Staticメソッド",
        isCorrectAnswer: false,
      },
      {
        id: "f4g5h6i7-j8k9-l0m1-n2o3-p4q5r6s7t",
        answer: "Prototypeメソッド",
        isCorrectAnswer: false,
      },
      {
        id: "8u9v0w1x-2y3z-4a5b-6c7d-8e9f0g1h2",
        answer: "Instanceメソッド",
        isCorrectAnswer: true,
      },
      {
        id: "i3j4k5l6-m7n8-o9p0-q1r2-s3t4u5v6w",
        answer: "Virtualメソッド",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    id: "5h6i7j8k-9l0m-1n2o-3p4q-5r6s7t8u9v",
    question:
      "JavaScriptの 'Event Loop' についての説明として最も正しいのはどれですか？",
    answers: [
      {
        id: "w0x1y2z3-4a5b-6c7d-8e9f-0g1h2i3j4",
        answer: "同期的タスクのみを処理する",
        isCorrectAnswer: false,
      },
      {
        id: "k5l6m7n8-o9p0-q1r2-s3t4-u5v6w7x8y",
        answer: "非同期的タスクのみを処理する",
        isCorrectAnswer: false,
      },
      {
        id: "z5a6b7c8-d9e0-f1g2-h3i4-j5k6l7m8n",
        answer: "実行、イベントの処理、およびタスクのスケジューリングを行う",
        isCorrectAnswer: true,
      },
      {
        id: "o0p1q2r3-s4t5-u6v7-w8x9-y0z1a2b3c",
        answer: "マルチスレッド操作を可能にする",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    id: "6g7h8i9j-0k1l-2m3n-4o5p-6q7r8s9t0u",
    question:
      "JavaScriptで 'this' キーワードがグローバルスコープで使用された場合、何を参照しますか？",
    answers: [
      {
        id: "v4w5x6y7-z8a9-b0c1-d2e3-f4g5h6i7j",
        answer: "現在のファイル",
        isCorrectAnswer: false,
      },
      {
        id: "k8l9m0n1-o2p3-q4r5-s6t7-u8v9w0x1y",
        answer:
          "グローバルオブジェクト（ブラウザでは 'window'、Node.jsでは 'global'）",
        isCorrectAnswer: true,
      },
      {
        id: "2z3a4b5c-6d7e-8f9g-0h1i-2j3k4l5m6",
        answer: "undefined",
        isCorrectAnswer: false,
      },
      {
        id: "n7o8p9q0-r1s2-t3u4-v5w6-x7y8z9a0b",
        answer: "呼び出し元の関数",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    id: "5i6j7k8l-9m0n-1o2p-3q4r-5s6t7u8v9w",
    question: "JavaScriptにおける 'strict mode' の主な目的は何ですか？",
    answers: [
      {
        id: "x0y1z2a3-b4c5-d6e7-f8g9-h0i1j2k3l",
        answer: "パフォーマンスの向上を図る",
        isCorrectAnswer: false,
      },
      {
        id: "m4n5o6p7-q8r9-s0t1-u2v3-w4x5y6z7a",
        answer: "コードの実行をより速くする",
        isCorrectAnswer: false,
      },
      {
        id: "8b9c0d1e-2f3g-4h5i-6j7k-8l9m0n1o2",
        answer: "コーディングの誤りや潜在的な問題点を発見しやすくする",
        isCorrectAnswer: true,
      },
      {
        id: "p3q4r5s6-t7u8-v9w0-x1y2-z3a4b5c6d",
        answer: "新しいバージョンのJavaScriptに自動的に更新する",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    id: "7h8i9j0k-1l2m-3n4o-5p6q-7r8s9t0u1v",
    question: "プロミスが拒否されたとき、どのメソッドが実行されますか？",
    answers: [
      {
        id: "w5x6y7z8-9a0b-1c2d-3e4f-5g6h7i8j9",
        answer: "then",
        isCorrectAnswer: false,
      },
      {
        id: "k0l1m2n3-o4p5-q6r7-s8t9-u0v1w2x3y",
        answer: "catch",
        isCorrectAnswer: true,
      },
      {
        id: "4a5b6c7d-8e9f-0g1h-2i3j-4k5l6m7n8",
        answer: "finally",
        isCorrectAnswer: false,
      },
      {
        id: "o9p0q1r2-s3t4-u5v6-w7x8-y9z0a1b2c",
        answer: "resolve",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    id: "8j9k0l1m-2n3o-4p5q-6r7s-8t9u0v1w2",
    question:
      "JavaScriptの 'use strict'; 宣言がされたスクリプトで何が禁止されますか？",
    answers: [
      {
        id: "d3e4f5g6-h7i8-j9k0-l1m2-n3o4p5q6r",
        answer: "変数にvarを使用すること",
        isCorrectAnswer: false,
      },
      {
        id: "7s8t9u0v-w1x2-y3z4-a5b6-c7d8e9f0g",
        answer: "暗黙のグローバル変数の作成",
        isCorrectAnswer: true,
      },
      {
        id: "h1i2j3k4-l5m6-n7o8-p9q0-r1s2t3u4v",
        answer: "関数宣言の使用",
        isCorrectAnswer: false,
      },
      {
        id: "w5x6y7z8-9a0b-1c2d-3e4f-5g6h7i8j9",
        answer: "JSONデータの解析",
        isCorrectAnswer: false,
      },
    ],
  },
  {
    id: "6l7m8n9o-0p1q-2r3s-4t5u-6v7w8x9y0",
    question:
      "JavaScriptにおいて、'null' と 'undefined' の主な違いは何ですか？",
    answers: [
      {
        id: "z1a2b3c4-d5e6-f7g8-h9i0-j1k2l3m4n",
        answer: "nullはオブジェクト型、undefinedは未定義型",
        isCorrectAnswer: true,
      },
      {
        id: "o5p6q7r8-s9t0-u1v2-w3x4-y5z6a7b8c",
        answer: "nullは文字列型、undefinedは数値型",
        isCorrectAnswer: false,
      },
      {
        id: "d9e0f1g2-h3i4-j5k6-l7m8-n9o0p1q2r",
        answer: "両方とも同じ型である",
        isCorrectAnswer: false,
      },
      {
        id: "s3t4u5v6-w7x8-y9z0-a1b2-c3d4e5f6g",
        answer: "nullは未定義型、undefinedはオブジェクト型",
        isCorrectAnswer: false,
      },
    ],
  },
];
