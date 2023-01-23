const btn = document.querySelector('.j-btn');
let sun = document.getElementById('j-result');

btn.addEventListener('click', () => {
    const page = +document.getElementById('page').value;
    const limit = +document.getElementById('limit').value;

    
    sun.textContent = '';
	
	let nomerError = 0;
	let limitError = 0;
	
    if (!(page >= 1 && page <= 10)) {
        nomerError = 'Номер страницы вне диапазона от 1 до 10';       
    } 
	
	if (!(limit >= 1 && limit <= 10)) {
       limitError = 'Лимит вне диапазона от 1 до 10';        
    }
	if(limitError !=0)
	{
		sun.textContent = "Лимит вне диапазона от 1 до 10";		
	}	
	if(nomerError !=0)
	{
		sun.textContent = 'Номер страницы вне диапазона от 1 до 10';			
	}
	
	if(nomerError != 0 && limitError != 0)
	{
		sun.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';		
	}
		
	if(nomerError == 0 && limitError == 0)
	{
		fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
			.then((response) => {				
				return response.json();
			}).then(data => {
			for(i=0;i<data.length;i++){   
			    console.log(data[i].download_url);
				sun.innerHTML += "<img src =' " + data[i].download_url + " '> " + '<br>';
			}
		});
	}	
	
	
});  
