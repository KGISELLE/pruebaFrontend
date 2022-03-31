const getData = document.getElementById('containerCard');

const countriesList = document.getElementById('dropCountries')

let countries;

// Event Listeners
countriesList.addEventListener('click', (e) => {
  // console.log(e.target.value)
  document.getElementById('containerCard').innerHTML='';
  displaySelectCountry(e.target.value)
})


// let getUno = document.getElementById('containerCard')

// document.addEventListener('click', () => getApi());



document.addEventListener('DOMContentLoaded', e => {
  getApi(e)
})

const getApi = () => {
  let url = 'https://restcountries.com/v2/all';
  const ajax = new XMLHttpRequest();
  ajax.open('GET', url, true);
  ajax.send();

  ajax.onreadystatechange = function() {
    if(this.status == 200 && this.readyState == 4) {
      let data = JSON.parse(this.responseText);
      console.log(data);
      

      
      // // Acceder a la moneda
      // data.forEach((element) => {
      //   ((element.currencies) === undefined) ? console.log('no tiene moneda') : (element.currencies).forEach(each => console.log(each.name))
      // })
      
      eachCard(data);
      getCountries(data);

      // currencies(data);
      
    }
  }

} 

// const currencies = (data) => {
//   data.forEach((element) => {
//     ((element.currencies) === undefined) ? 'no tiene moneda' : (element.currencies).forEach(each => each.name)
//   }
// )}

// Mostrar en el main las tarjetas con el nombre del pais
const eachCard = (data) => {
  let elements = '';
  data.forEach(element => {
    elements += `
    <div class="card border border-primary border-2">
    <img src="${element.flag}" class="card-img-top" id="hola" alt="Country-Flag" height="120rem">
      <ul class="list-group list-group-flush" id="containerInfo">
        <li class="list-group-item bg-info text-uppercase text-center fw-bold text-light">${element.name}</li>
      </ul>
    </div>      
      `
  });

  getData.innerHTML = elements;

}

// const currencieValue = (data) => {
//   let items = '';
//   data.forEach((item) => {
//     if ((item.currencies) === undefined) {
//       items += 'no tiene moneda'
//     } else {
//       items += item.currencies.map(each => each.name)
//       // (item.currencies).forEach(each => {
//       //   items += each.name
//       // })
//     }
//   })
//   console.log(items)
// }

const getCountries = (countriesData) => {
  countries = countriesData;
  let options = '';
  countriesData.forEach((country) => {
    options += `
    <li><button class="dropdown-item text-primary" type="button" value="${country.alpha3Code}">${country.name}</button></li>
    `
  })
  countriesList.innerHTML = options;
  displaySelectCountry('FRA');
}

const displaySelectCountry = (countryByAlpha3Code) => {
  const selectCountry = countries.find(country => country.alpha3Code === countryByAlpha3Code);
  console.log(selectCountry);
  // document.getElementById('containerCard');
  document.getElementById('hola').src = selectCountry.flag;
  
}

// const eachCard = (data) => {
//   let elements = '';
//   data.forEach(element => {
//     elements += `
//     <div class="card border border-primary border-2">
//     <img src="${element.flag}" class="card-img-top" alt="Country-Flag" height="120rem">
//       <ul class="list-group list-group-flush" id="containerInfo">
//         <li class="list-group-item bg-info text-uppercase text-center fw-bold text-light">${element.name}</li>
//       </ul>
//     </div>      
//       `
//   });

//   getData.innerHTML = elements;

// }