


function hello(name)	{
	console.log('Hello World!!!!')
}




function add(n)	{
	return n + 2;
}



//Liftoff Recursive Solution
function liftoff(n)	{
	if(n === 0)	{
		console.log('Liftoff!!')
	}
	else	{
		console.log(n);
		return liftoff(n - 1);
	}
}


