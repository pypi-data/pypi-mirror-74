//  --                                                          ; {{{1
//
//  File        : static/script.js
//  Maintainer  : Felix C. Stegerman <flx@obfusk.net>
//  Date        : 2020-07-14
//
//  Copyright   : Copyright (C) 2020  Felix C. Stegerman
//  Version     : v0.1.1
//  License     : AGPLv3+
//
//  --                                                          ; }}}1

"use strict";
$(document).ready(() => {

const convertKana = t =>
  ([...t].findIndex(c => HIRAGANA.indexOf(c) != -1) != -1 ?
    hiraganaToKatakana : katakanaToHiragana)(t)

const hiraganaToKatakana = t => {
  let col = null
  return [...t].map(c => {
    const i = HIRAGANA.indexOf(c)
    const o = col === 4 && i === 2
    const k = i === col || o ? "ー" : KATAKANA[i] || c
    if (!o) col = i === -1 ? null : i % 5
    return k
  }).join("")
}

const katakanaToHiragana = t => {
  return [...t].map(c => HIRAGANA[KATAKANA.indexOf(c)] || c).join("")
}

// TODO: n(n), ヴャ, punctuation?!
const romajiToHiragana = t => {                               //  {{{1
  const r = [], rx = RegExp(RORX, "uy")
  let m
  while (m = rx.exec(t)) {
    if (m[1] || m[5]) {
      r.push(m[5] || ROSP[m[1] == "n" ? "nn" : m[1]])
    } else {
      let s = "", x = m[2] ? ROMP[m[2]] : m[0]
      if (x.length == 1) {
        s = HIRAGANA[ROWS.indexOf(x)]
      } else if (x.length == 3 && x.slice(-2, -1) == "y") {
        s = HIRAGANA[5*COLS.indexOf(x[0])+1] +
            HIRAGANA[5*(COLS.indexOf("y")+1)+ROWS.indexOf(x[2])]
      } else {
        if (x.length == 3 && x[0] == x[1]) {
          s = "っ"; x = x.slice(1)
        }
        if (x.length == 2) {
          s += HIRAGANA[5*COLS.indexOf(x[0])+ROWS.indexOf(x[1])]
        } else {
          s = "〇"
        }
      }
      r.push(s.includes("〇") ? m[0] : s)                     //  TODO
    }
  }
  return r.join("")
}                                                             //  }}}1

const romajiToKatakana = t => hiraganaToKatakana(romajiToHiragana(t))

// KANA TABLES                                                //  {{{1
const HIRAGANA = `
  あ   い う   え   お
  ぁ   ぃ ぅ   ぇ   ぉ
ゔぁ ゔぃ ゔ ゔぇ ゔぉ
  か   き く   け   こ
  が   ぎ ぐ   げ   ご
  さ   し す   せ   そ
  ざ   じ ず   ぜ   ぞ
  た   ち つ   て   と
  だ   ぢ づ   で   ど
  〇   〇 っ   〇   〇
  な   に ぬ   ね   の
  は   ひ ふ   へ   ほ
  ば   び ぶ   べ   ぼ
  ぱ   ぴ ぷ   ぺ   ぽ
ふぁ ふぃ ふ ふぇ ふぉ
  ま   み む   め   も
  や   〇 ゆ   〇   よ
  ゃ   〇 ゅ   〇   ょ
  ら   り る   れ   ろ
  わ   ゐ 〇   ゑ   を
  ゎ   〇 〇   〇   〇
  ん   〇 〇   〇   〇
  ゝ   ゞ 〇   〇   〇
`.split(/\s+/).filter(x => x)

const KATAKANA = `
  ア   イ ウ   エ   オ
  ァ   ィ ゥ   ェ   ォ
ヴァ ヴィ ヴ ヴェ ヴォ
  カ   キ ク   ケ   コ
  ガ   ギ グ   ゲ   ゴ
  サ   シ ス   セ   ソ
  ザ   ジ ズ   ゼ   ゾ
  タ   チ ツ   テ   ト
  ダ   ヂ ヅ   デ   ド
  〇   〇 ッ   〇   〇
  ナ   ニ ヌ   ネ   ノ
  ハ   ヒ フ   ヘ   ホ
  バ   ビ ブ   ベ   ボ
  パ   ピ プ   ペ   ポ
ファ フィ フ フェ フォ
  マ   ミ ム   メ   モ
  ヤ   〇 ユ   〇   ヨ
  ャ   〇 ュ   〇   ョ
  ラ   リ ル   レ   ロ
  ワ   ヰ 〇   ヱ   ヲ
  ヮ   〇 〇   〇   〇
  ン   〇 〇   〇   〇
  ヽ   ヾ 〇   〇   〇
`.split(/\s+/).filter(x => x)
                                                              //  }}}1

const esc   = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const ROWS  = "aiueo", COLS = "-xvkgsztd-nhbpfmy-rw"
const ROMP  = {
  shi:  "si",  ji:  "zi", chi:  "ti", tsu: "tu",
  sha: "sya", sho: "syo", shu: "syu",
  cha: "tya", cho: "tyo", chu: "tyu",
   ja: "zya",  jo: "zyo",  ju: "zyu",
}
const ROSP  = { nn:"ん", "-":"ー", "~":"〜", ",":"、", ".":"。",
                "?":"？", "!":"！", "(":"（", ")":"）" }      //  TODO
const RORX  = "(" + Object.keys(ROSP).map(esc).join("|") + "|n\\b)|" +
              "(" + Object.keys(ROMP).join("|") + ")|" +
              "(([" + COLS.replace(/-/g, "") + "])\\4?)?y?" +
              "[" + ROWS + "]|(.)"

const selection = i => {
  const v = i.val(), a = i[0].selectionStart, b = i[0].selectionEnd
  return a == b ? ["", v, ""] : [v.slice(0, a), v.slice(a, b), v.slice(b)]
}

window.JITEN = {
  convertKana, hiraganaToKatakana, katakanaToHiragana,
  romajiToHiragana, romajiToKatakana
}

$(".convert-kana").each((i, e) => $(e).click(() => {
  const i = $("input", $(e).parents(".input-group"))
  const [b, v, a] = selection(i)
  i.val(b + convertKana(v) + a).focus()
}))

$(".clear-input").each((i, e) => $(e).click(() => {
  $(".clear-input-checked", $(e).parents("form")).prop("checked", true)
  $("input", $(e).parents(".input-group")).val("").focus()
}))

if (navigator.clipboard) {
  $(".copy-input").each((i, e) => $(e).click(() => {
    const i = $("input", $(e).parents(".input-group"))
    navigator.clipboard.writeText(selection(i)[1])
      .catch(r => console.error("clipboard.writeText() failed:", r))
  }).show())
}

$("#romaji-convert").click(() =>
  $("#romaji").val(romajiToHiragana($("#romaji").val()))
)

$("#romaji-modal").on("shown.bs.modal", () => $("#romaji").focus())

})

// vim: set tw=70 sw=2 sts=2 et fdm=marker :
