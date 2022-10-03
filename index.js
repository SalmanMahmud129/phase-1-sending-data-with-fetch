// Add your code here
function submitData(name = 'test', email = 'test@test'){
    return fetch('http://localhost:3000/users', {
        method: "POST",
    
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`
        })  
        })
    .then(resp => resp.json())
    .then(data => {
        console.log(data.id)
        // const idSpan = document.createElement('span')
        const body = document.querySelector('body')
        // idSpan.innerText(data.id)
        // idSpan.append(body)
        body.textContent = `${data.id}, ${data.name}, ${data.email} `
        
    })
    .catch(err => {
        const body = document.querySelector('body')
        body.textContent = err.message
    })

}

// const configurationObject = {
//     method: "POST",
    
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     }
// }