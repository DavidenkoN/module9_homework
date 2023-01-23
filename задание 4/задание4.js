let button;
let resultNode;

document.addEventListener("DOMContentLoaded", function(){
   

	resultNode = document.querySelector('.result'); 
	button = document.querySelector('button');
	
	button.addEventListener('click', () => 
	{
		button = document.querySelector('button');
	   
		const value1 = +document.querySelector('.input1').value;
		const value2 = +document.querySelector('.input2').value;
		
		if(value1>=100 && value1<=300 && value2>=100 && value2<=300)
		{
		  fetch(`https://picsum.photos/${value1}/${value2}`)
			.then((response) => 
			{
				console.log('response', response);
				resultUrl = response.url;
				console.log(resultUrl)
				let cards = '';
					const cardBlock = `
				<img
					src="${resultUrl}">
				`;
				cards += cardBlock

				resultNode.innerHTML = cards;
			}).catch(() => {console.log('error') });
		}
		else {
			resultNode.innerHTML = "одно из чисел вне диапазона от 100 до 300"
		}
	});
   
});
 
