const { response } = require('express');
const express = require('express');

const app=express();

app.use(express.json())

app.get('/orders', (request , response) => {
    const {title, owner} = request.query;

    console.log(title);
    console.log(owner);

    return response.json([
        'projeto 1',
        'projeto 2',
    ]);
})

app.post('/orders', (request , response) =>{
    const {title, owner} = request.body;

    console.log(title);
    console.log(owner);


    return response.json([
        'projeto 1',
        'projeto 2',
        'projeto 3',
    ]);
})

app.put('/orders/:id', (request , response) =>{
    const {id} = request.params;

    console.log(id)

    return response.json([
        'projeto 4',
        'projeto 2',
        'projeto 3',
    ]);
})

app.delete('/orders/:id', (resquest , response) => {
    return  response.json([
        'projeto 2',
        'projeto 3',
    ])
})

app.listen(3333, () => {
    console.log('Back-end started! ✔')
}); 