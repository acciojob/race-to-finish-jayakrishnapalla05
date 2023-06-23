window.promises = [];


for(let i=0; i<5; i++)
	{
		const randomTime=Math.floor(Math.random()*5)+1;
		const prom=new Promise((resolve, reject) =>{
			setTimeOut(() =>{
				resolve(`Promise is resolved after ${randomTime} seconds`);
			}, randomTime*1000);
		});
		promises.push(prom);
	}
Promise.any(promises)
       .then((item) =>{
		   const Element=document.getElementById("output");
		   Element.innerText=item;
	   })
       .catch((error) =>{
		   console.error(error);
	   });


// Do not change the code above this
// add your promises to the array `promises`
