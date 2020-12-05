//Importing external modules
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const shortid = require('shortid');

const app = express();
app.use(bodyParser.json());

// CONNECTION TO DATABASE
mongoose.connect("mongodb://localhost/caroCakesDb", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

// PRODUCTS API START
const Product = mongoose.model(
    "products",
    new mongoose.Schema({
        _id: { type: String, default: shortid.generate },
        title: String,
        description: String,
        image: String,
        price: Number,
        availableSizes: [String],
    })
);


// Get method
app.get("/api/products", async(req, res) => {
    const products = await Product.find({});
    res.send(products);
});
// Posting method
app.post("/api/products", async(req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
});
// Remove Method
app.delete("/api/products/:id", async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
  });

//   PRODUCTS API END

// ORDER MODEL
const Order = mongoose.model(
    "orders",
    new mongoose.Schema(
        {
            _id: {
                type: String,
                default: shortid.generate,
            },
            email: String,
            name: String,
            phone: Number,
            address: String,
            mpesa: String,
            decoration: String,
            total: Number,
            cartItems: [
                {
                    _id: String,
                    title: String,
                    price: Number,
                    count: Number,
                },
            ],
        },
        {
            timestamps: true,
        }
    )
);

// ORDER CREATION API
app.post("/api/orders", async (req, res) => {
    if(
        !req.body.name ||
        !req.body.email ||
        !req.body.phone ||
        !req.body.address ||
        !req.body.mpesa ||
        !req.body.decoration ||
        !req.body.total ||
        !req.body.cartItems
    ){
        return res.send({
            message: "Data is required before submission"
        });
    }
    const order = await Order(req.body).save();
    res.send(order);
});

app.get('/api/orders', async (req, res) => {
    const orders = await Order.find({});
    res.send(orders);
});

app.delete('/api/orders/:id', async(req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.send(order);
});
// END ORDER CREATION API

// CLIENT MODEL
const Client = mongoose.model(
    "clients",
    new mongoose.Schema(
        {
            _id:{
                type: String,
                default: shortid.generate,
            },
            email: String,
        },{
            timestamps: true,
        }
    )
)
//COMMUNITY API
app.post("/api/clients", async(req, res) => {
    if(
        !req.body.email
    ){
        return res.send({
            message: "Enter Your email Address"
        });
    }

    const client = await Client(req.body).save();
    res.send(client);
})

app.get("/api/clients", async(req, res) => {
    const clients = await Client.find({});
    res.send(clients);
})

app.delete("/api/clients/:id", async(req, res) => {
    const client = await Client.findByIdAndDelete(req.params.id);
    res.send(client);
});
// END COMMUNITY API

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Serving @ http://localhost:5000"));