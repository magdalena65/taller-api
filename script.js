document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.slice(0, 3).forEach(element => {
                document.getElementById('info').innerHTML += `
                <h3>${element.title}</h3>
                <p>${element.body}</p>
                <p>ID: ${element.id}</p>`;
            })
        })

})
                          
