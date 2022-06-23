'use strict';

{
  // htmlにred,blue,whiteのうちランダムに１個値を表示して
  function setWord(){
    word = words.splice(Math.floor(Math.random() * words.length),1)[0];
target.textContent = word;
loc = 0;
  }
  const words = ['red','blue','white'];
let word ;
let loc = 0;
let startTime;

const target = document.getElementById('target');

// クリックされたら今現在の時間を取得して、// htmlにred,blue,whiteのうちランダムに１個値を表示して
document.addEventListener('click',() => {
  startTime = Date.now();
  setWord(); })

// キーボードに文字が打たれたら、その打たれた文字の情報をeに渡して、そのeの情報が、
// wordsの中の入れるの１番目の文字と違ったらなにも表示しないで、もしあってたら
// 最初の文字を＿にして、残りの文字を表示してね、あとlocを１増やしてね
  document.addEventListener('keydown', (e) =>{
    if( e.key !== word[loc])
    {
      return;
    }
    loc ++ ;
  target.textContent ='_'.repeat(loc) + word.substring(loc);
  // もし_この数と文字数が同じで、さらにその際wordsの配列の要素の数が０の場合、終了時点での
  // 時間を計算してクリック押し多時に取得した時間と差し引いて何秒かかったかを計算して。
  if(loc === word.length){
   if(words.length === 0){
     const endTime = ((Date.now() - startTime) / 1000).toFixed(2);
const result = document.getElementById('result');
result.textContent = `Finished! ${endTime}seconds!`;
return;
   }
    setWord();



  }


  });




}
