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
        const newComment = {
            name: 'Agregar comentario nuevo usando el método Post',
            body: 'El cuerpo del comentario nuevo iría aquí',
        };
    
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })

    .then(response => response.json())
    .then(comment => {
        document.getElementById('info').innerHTML += `<h1>${comment.name}</h1><p>${comment.body}</p><p>ID: ${comment.id}</p>`;
    })
})
