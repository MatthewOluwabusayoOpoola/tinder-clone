import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards"

// App Config
const app = express();
const port = process.env.PORT || 8000;
// const password = '0oXIyj7SjtmLAajR'
// const connection_url = `mongodb+srv://admin:${password}@cluster0.6a5gime.mongodb.net/?retryWrites=true&w=majority`;

// Middleware

// DB Config
// mongoose.connect(connection_url, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
// });

// API Endpoints
app.get('/', (req,res) => {
    res.status(200).send('Hello World')
});

app.post('/tinder/cards', (req,res) => {
    const dbCard = req.body

    Cards.create(dbCard, (err, data)=> {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/tinder/cards', (req,res) => {
    Cards.find((err, data)=> {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

// Listener
app.listen(port, ()=> console.log(`listening on localhost: ${port}`));