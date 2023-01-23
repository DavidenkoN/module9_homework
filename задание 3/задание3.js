const button = document.querySelector('button');
const result = document.querySelector('.result');
const input  = document.querySelector('.number1');

button.addEventListener('click', function(){
   let limit = input.value;
   let url = 'https://picsum.photos/v2/list?limit=' + limit;
   useRequest(url, displayResult);
})
function useRequest(url, callback){
    let xhr = new XMLHttpRequest;
    xhr.open('GET', url);

    xhr.onload = function (){
        if (xhr.status != 200){
           console.log('Статус ответа:', xhr.status);
    } else {
       //console.log(xhr.response);
        const resultParse = JSON.parse(xhr.response);
       // console.log(resultParse);
        if (callback) {
            callback(resultParse);
         }
    }
}
   xhr.onerror = function(){
       console.log('Ошибка! Статус ответа:', xhr.status);
  };
  xhr.send();
};

function displayResult(apiData) 
{
    let images = '';
    console.log(apiData)
    apiData.forEach(item =>{
     const slides = `<img src="${item.download_url}">`;
        images += slides
    });
      result.innerHTML = images;
}