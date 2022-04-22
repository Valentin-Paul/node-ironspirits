
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

mongoose
  .connect('mongodb://localhost/ironborn-ecommerce')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err))

// Product.create({title: "limoncello", price: 20})
//     .then( product => console.log("new product was created", product))
//     .catch( error => console.log('error creating a product in DB', error));

// const data = [
//   {
//       title: "Lambrusco Deluxe",
//       price: 22,
//       tags: ["drink"]
//   },
//   {
//       title: "Beer",
//       price: 2,
//       tags: ["drink"]
//   }
// ];

// Product.create(data)
//   .then(product => console.log("a new product was created", product))
//   .catch(error => console.log("error creating a product in DB", error));  
   

  // Product.find({ price: { $gt: 20 } })
  //   .then((product)=> {console.log(product)})
  //   .catch()

    // Product.findByIdAndUpdate("62614973f9e42b75a9ae5660",{"price": 12})
    // .then(productFromDB => {
    //   console.log(productFromDB);
    // })
    // .catch()

