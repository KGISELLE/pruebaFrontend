let getFlats = document.getElementById('flat')

// document.addEventListener('click', () => getApi());



document.addEventListener('DOMContentLoaded', e => {
  getApi()
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
      eachFlat(data);
    }
  }
}

// const currencies = (data) => {
//   data.currencies.forEach(curencie => {
//     console.log('moneda', curencie)
//   })
// }


const eachFlat = (data) => {
  let elements = '';
  data.forEach(element => {
    elements += `
    <div class="card border border-primary border-2 bg-secondary">
    <img src="..." class="card-img-top" alt="Bandera" id="flat">
      <ul class="list-group list-group-flush">
        <li class="list-group-item bg-success text-center fs-4 fw-bold text-light">${element.name}</li>
        <li class="list-group-item bg-info fs-5 fw-bold text-light">Moneda: <span class="fw-normal">moneda: </span></li>
      </ul>
    </div>      
      `
  });

  getFlats.innerHTML = elements

}