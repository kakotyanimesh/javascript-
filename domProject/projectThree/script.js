

const form = document.querySelector('form')


form.addEventListener('submit', (event)=>{
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const result = document.querySelector("#results")

  if ( height === '' || height < 0 || isNaN(height)){
    results.innerHTML =  `please provide a valid height ${height}`
  } else if (weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `please provide a valid weight ${weight}`
  } else {
    const bmi = (weight/((height*height)/1000)).toFixed(2)

    result.innerHTML = `<span>${bmi}</span>`

  }
 

})


// more work pending 