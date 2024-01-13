
let input = document.getElementById("numInput")
let numselect = document.getElementById("selectInput")
let numresult = document.getElementById("result")
let history = document.getElementById("history")
let shwBtn = document.getElementById("btn")
  let obj={}

  if (localStorage.length >0){
    let stock = JSON.parse(localStorage.getItem('data'))
    obj = {...stock}

    for(let n in obj){
     history.innerHTML += `${n} = ${obj[n]}<br>`
    }
  }


shwBtn.addEventListener(`click`, () =>{
    if(numInput.value !== "" && selectInput.value !== ""){

      let r = +numInput.value * +selectInput.value ;
    result.innerHTML = r ;
    obj[`${numInput.value} x ${selectInput.value}`] = r

localStorage.setItem('data', JSON.stringify(obj))

history.innerHTML += `${numInput.value} x ${selectInput.value}= ${r} <br>` 

    }
    else{
      alert("Please Enter Numbers")
    }

})




