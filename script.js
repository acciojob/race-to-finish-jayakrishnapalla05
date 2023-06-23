window.promises = [];


for(let i=0; i<5; i++)
	{
		const randomTime=Math.floor(Math.random()*5)+1;
		const prom=new Promise((resolve, reject) =>{
			setTimeOut(() =>{
				resolve(`Promise is resolved in ${randomTime} seconds`);
			}, randomTime*1000);
		});
		promises.push(prom);
	}
Promise.any(promises)
       .then((res) =>{
		   const res=document.getElementById("output");
		   res.textContent=res;
	   })
       .catch((error) =>{
		   console.error(error);
	   });


// Do not change the code above this
// add your promises to the array `promises`
