let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
  let input = document.getElementById('user-guess');
  if (answer.value == `('')` || attempt.value == `('')`) {
    setHiddenFields()
  }

  if (!!validateInput(input.value)){
    attempt.value ++
  } else {
    return false
  }

  if(getResults(input.value)) {
    setMessage('You Win! :)')
    showAnswer(true)
    showReplay()
  } else if(attempt.value >= 10) {
    setMessage('You Lose! :(')
    showAnswer(false)
    showReplay()
  } else {
    setMessage('Incorrect, try again.')
  }
}

function setHiddenFields() {
  answer.value = Math.floor(Math.random() * 9999)
  if (answer.value < 10){
    return answer.value = "000" + answer.value
  } else if (answer.value < 100) {
    return answer.value = "00" + answer.value
  } else if (answer.value < 1000) {
    return answer.value = "0" + answer.value
  } else {
    return answer.value.toString()
  }
  attempt.value = 0
}

function setMessage(message){
  document.getElementById('message').innerHTML = message
}

function validateInput(string){
  if (string.length != 4){
    setMessage("Guesses must be exactly 4 characters long.")
    return false
  }
  return true
}

function getResults(input){
  right_place = 0
  input_to_string = input.toString()

  converted_input = []
  for (let i = 0; i < input_to_string.length; i++){
    if (input_to_string[i] == answer.value[i]) {
      converted_input.push('<span class="glyphicon glyphicon-ok"></span>')
      right_place ++
    } else if (answer.value.includes(input_to_string[i])) {
      converted_input.push('<span class="glyphicon glyphicon-transfer"></span>')
    } else {
      converted_input.push('<span class="glyphicon glyphicon-remove"></span>')
    }
  }

 document.getElementById('results').innerHTML += '<div class="row"><span class="col-md-6">' + converted_input + '</span><div class="col-md-6"'

 return right_place == 4 ? true : false
}

function showAnswer(won){
  document.getElementById('code').className +=
    won ? " success" : " failure"
  code.innerHTML = answer.value;
}

function showReplay(){
  document.getElementById('guessing-div').style.display = "none"
  document.getElementById('replay-div').style.display = "block"
}
