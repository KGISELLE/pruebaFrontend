const getData = document.getElementById('containerCard');

const countriesList = document.getElementById('dropCountries');

const randomButton = document.getElementById('random');

let countries;

let counter = false;

// Event Listeners
countriesList.addEventListener('click', (e) => {
  document.getElementById('containerCard').innerHTML='';
  displaySelectCountry(e.target.value);
});

randomButton.addEventListener('click', (e) => {
  e.preventDefault();
  orderButton();
  // ! document.getElementById('containerCard').innerHTML= '';
  sortData();
});



// Inicio Metodo Ajax para llamar API
document.addEventListener('DOMContentLoaded', e => {
  getApi(e)
});

const getApi = () => {
  let url = 'https://restcountries.com/v2/all';
  const ajax = new XMLHttpRequest();
  ajax.open('GET', url, true);
  ajax.send();

  ajax.onreadystatechange = function() {
    if(this.status == 200 && this.readyState == 4) {
      let data = JSON.parse(this.responseText);
      console.log(data);
      eachCard(data);
      getCountries(data);
      sortData(data);
    }
  }
};
// Fin Metodo Ajax para llamar API

// Mostrar en el main todas las tarjetas con el nombre del pais
const eachCard = (data) => {
  let elements = '';
  data.forEach(element => {
    elements += `
    <div class="card border border-primary border-2">
    <img loading="lazy" src="${element.flag}" class="card-img-top" id="hola" alt="Country-Flag" height="120rem">
      <ul class="list-group list-group-flush" id="containerInfo">
        <li class="list-group-item bg-info text-uppercase text-center fw-bold text-light">${element.name}</li>
      </ul>
    </div>      
      `
  });
  getData.innerHTML = elements;
};

const eachCard2 = (data) => {
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
};


const getCountries = (countriesData) => {
  countries = countriesData;
  let options = '';
  countriesData.forEach((country) => {
    options += `
    <li><button class="dropdown-item text-primary" type="button" value="${country.alpha3Code}">${country.name}</button></li>
    `
  })
  countriesList.innerHTML = options;
};

const displaySelectCountry = (countryByAlpha3Code) => {
  const selectCountry = countries.find(country => country.alpha3Code === countryByAlpha3Code);
  // console.log(selectCountry);

  const selectCurrencies = () => {
    let currency = '';
    selectCountry.currencies.forEach((elem) => {
      currency += elem.name
    })
    return currency;
  };

  const codeCurrencies = () => {
    let codeCurrency = '';
    selectCountry.currencies.forEach((elem) => {
      codeCurrency += elem.code;
    })
    return codeCurrency;
  };
  
  let oneCard = '';
  oneCard += `
  <div class="card border border-primary border-2">
    <img src="${selectCountry.flag}" class="card-img-top" id="hola" alt="Country-Flag" height="120rem">
      <ul class="list-group list-group-flush" id="containerInfo">
        <li class="list-group-item bg-info text-uppercase text-center fw-bold text-light">${selectCountry.name}</li>
        <li class="list-group-item bg-secondary text-center fw-bold text-light">Currency: ${selectCurrencies()} (${codeCurrencies()}) </li>
      </ul>
    </div>
  ` 
  getData.innerHTML = oneCard;
};

const orderButton = () => {
  if(counter == false){
    randomButton.innerHTML = 'Alphabetical Order'
    counter = true;
  } else {
    randomButton.innerHTML = 'Random Order'
    counter = false;
  }
};


const sortData = (data) => {
  //! Organizar data en orden Aleatorio
  const sortRandom = (data) => {
    return data
    .sort(() => Math.random() > 0.5 ? 1 : -1)
    .slice(0, data.length)
  }

  const randomData = sortRandom(data)
  console.log(randomData)
  //! Fin Organizar data en orden Aleatorio

  //! Organizar data en orden Alfabetico
  const sortAZ = (a, b) => {
    if (a.name < b.name) {return -1}
    if (a.name > b.name) {return 1}
    return 0
  }

  let azData = data.sort(sortAZ);
  console.log(azData)
  //! Fin Organizar data en orden Alfabetico
}
