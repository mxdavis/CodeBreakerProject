let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here

function setHiddenFields() {
  answer.value = Math.floor(Math.random() * 9999)
  if (answer.value < 10){
    return answer.value = "000" + answer.value
  } else if (answer.value < 100) {
    return answer.value = "00" + answer.value
  } else if (answer.value < 1000) {
    return answer.value = "0" + answer.value
  } else {
    return answer.value
  }
}
