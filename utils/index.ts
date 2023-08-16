export async function fetchCars() {

    const headers = { 
        'X-RapidAPI-Key': '9101a59052msh0ba3757b2d3cfbap1a7293jsn13dd1685cd24',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
        headers : headers,
    });

    
    

    const result = await response.json();
    return result;
}