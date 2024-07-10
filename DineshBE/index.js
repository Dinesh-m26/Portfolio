const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

//middleware
app.use(express.json())
app.use(cors())

// databasee
mongoose.connect('mongodb://localhost:27017/dineshportfolio').then(() => {
    console.log("connected DB");
}).catch((error) => {
    console.log(error);
})

//schema 

const formSchema = new mongoose.Schema({
    name: {
        require: true,
        type: String,
    },
    message: {
        type: String,
        required: true,
    },
    email: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
    }
})

//model

const formModel = mongoose.model('data', formSchema)


//post data

app.post('/form', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const form = new formModel({ name, email, message });
        await form.save()
        res.status(202).json(form)
    } catch (error) {
        res.status(500).json({ message: "not post data" })
    }

})


//getting data
app.get('/', (req, res) => {
    res.send("working")
})


const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Connected port" + port);
})