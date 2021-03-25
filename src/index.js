const { request } = require('express');
const express = require('express');
const {uuid} = require('uuidv4');

const app=express();

app.use(express.json())

const orders = [];

app.get('/orders', (request , response) => {
    const {title} = request.query;

    const results = title 
    ? orders.filter(order => order.title.includes(title))
    : orders;

    return response.json(results);
})

app.post('/orders', (request , response) =>{
    const {title, owner} = request.body;

    const order = {id:uuid(),  title, owner};

    orders.push(order);

    return response.json(order);
})

app.put('/orders/:id', (request , response) =>{
    const {id} = request.params;
    const {title, owner} = request.body;

    const orderIndex = orders.findIndex(order => order.id === id);

    if(orderIndex < 0){
        return response.status(400).json({ error : 'order does not exist'})
    }

    const order = {
        id,
        title,
        owner,
    }

    orders[orderIndex] = order;

    return response.json(order);
})

app.delete('/orders/:id', (request , response) => {
    const {id} = request.params;

    const orderIndex = orders.findIndex(order => order.id === id);

    if(orderIndex < 0){
        return response.status(400).json({ error : 'order does not exist'})
    }

    orders.splice(orderIndex, 1)

    return  response.status(204).send()
})

app.listen(3333, () => {
    console.log('Back-end started! ✔')
}); 