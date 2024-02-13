// fetch("https://dummy.restapiexample.com/api/v1/employee/1")
//     .then(data => data.json())
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


function fetchData() {
    return fetch("https://dummy.restapiexample.com/api/v1/employee/1")
}

async function getData() {
    try{
        const data = await fetchData();
        const employees = await data.json();
        console.log("result", employees);
    } catch {
        console.log("error in fetching data");
    }  
}

getData();