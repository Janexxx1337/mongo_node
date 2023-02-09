
const mongoose = require('mongoose')


mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/fruitsDB')

const fruitSchema = new mongoose.Schema ({
    name: { type: String, required: true },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: 'George',
    rating: 4,
    review: 'Pretty solid as a fruit'
})

// fruit.save()

const people_schema = ({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
})

const Human = mongoose.model('Human', people_schema)


// human.save()



const pineapple = new Fruit({
    name: 'Pineapple',
    score: 9,
    review: 'Great fruit'
})

// pineapple.save()

const human = new Human ({
    name: 'Name',
    age: 29,
    favouriteFruit: pineapple
})

// human.save()


const kiwi = new Fruit({
    name: 'Kiwi',
    score: 4,
    review: 'Yummy',
})
//
// const banana = new Fruit({
//     name: 'Banana',
//     score: 3,
//     review: 'Yummy',
// })
//
//
//
// const orange = new Fruit({
//     name: 'Orange',
//     score: 5,
//     review: 'Yummy',
// })



// Fruit.insertMany([kiwi,banana,orange], (err)=>{
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log('Success')
//     }
// })



Fruit.find((err,fruits)=> {
    if (err) {
        console.log(err)
    }
    else {

        fruits.forEach(fruit => console.log(fruit.name))

    }
})

Human.updateMany({name:'John'}, {favouriteFruit:pineapple}, (err) => {
    if (err){
        console.log(err)
    } else {
        console.log('Well MET')
    }
})

// Function call
// Deleting all users whose age >= 15
// Fruit.deleteMany({ name: 'George' }).then(function(){
//     console.log("Data deleted"); // Success
// }).catch(function(error){
//     console.log(error); // Failure
// });
//
// Human.deleteMany({ name: 'Mike' }).then(function(){
//     console.log("Data deleted"); // Success
// }).catch(function(error){
//     console.log(error); // Failure
// });