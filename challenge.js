let timer = setInterval(increment, 1000)
let paused = true

const counter = document.getElementById('counter')
addClick();
plus();
minus();
likes();
comment();
numberChecker();


function increment() {
  counter.innerText++
}

function pauseButton() {
  console.log("working!")
  clearInterval(timer)
}

function addClick() {
  let pause = document.getElementById('pause')
  pause.addEventListener('click', ()=>{
    if (paused===true){
      paused = false
      return pauseButton()
    } else {
      paused = true
      console.log(paused)

      clearInterval(timer)
      timer = setInterval(increment, 1000)
    }
  })
}

function decrement() {
  // let counter = document.getElementById('counter')
  counter.innerText--
}

function plus() {
  let plus = document.getElementById('+')
  plus.addEventListener('click', increment)
}

function minus() {
  let minus = document.getElementById('-')
  minus.addEventListener('click', decrement)
}

// function numberChecker() {
//   let likesList = document.getElementsByTagName("li")
//   if (likesList.length > 0){
//     for (let i=0;i<likesList.length;i++){
//     if(likesList[i].innerText.includes(counter.innerText)) {
//       likesList[i].innerText = `${counter.innerText} has been liked ${previousCount}`
//       }
//     }
//   }
// }

// function addLikes() {
//   let likes = document.getElementById("<3")
//   likes.addEventListener('click', numberChecker)
// }

function likes() {
 let likesArea = document.getElementsByClassName("likes")
 let likes = document.getElementById("<3")
 let x = 1
 likes.addEventListener("click", () =>
 {
   let line = document.createElement("li")
   line.className = "likes-class"
   let lines = document.getElementsByClassName("likes-class")
   line.innerText = `${counter.innerText} has been liked 1 time`
   if (loopthru() === false) {
    likesArea[0].appendChild(line)
    x = 1;
  } else {
    let array = []
    let lastLi = lines[lines.length-1]
    //new condition
    ++x;
    lastLi.innerText = `${counter.innerText} has been liked ${x} times`
    previousCount = x
  }
 })
}


  // for(let i=0;i<likesList;i++){
  //   if (likesList[i].innerText.includes("15")) {
  //     console.log("this got hit")
  //   } else {
  //     console.log("nope")
  //   }



function loopthru() {
  let array = [];
  let lines = document.getElementsByTagName("li")
  for(i=0;i<lines.length;i++){
    if (lines[i].innerText.includes(counter.innerText)) {
      array.push("cool!")
    }
  }
  if (array.length!==0) {
    return true
  } else {
    return false
  }
}

function addComment(event) {
  let commentsList = document.getElementsByClassName("comments")[0]
  let newComment = document.createElement("li")
  let input = document.getElementsByTagName("input")
  newComment.innerText = input[0].value
  commentsList.appendChild(newComment)
  event.preventDefault();
}

function comment() {
  let button = document.getElementById("submit")
  button.addEventListener('click', addComment)
}

// let pause = document.getElementById('pause')
// pause.addEventListener('click', ()=>{console.log('working!')})
