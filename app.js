const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = 'mongodb://localhost:27017'
const dbName = 'mongo_node'

const client = new MongoClient(url)

client.connect(function (err) {
    assert.equal(null, err)
    console.log('Connected successfully to server')

    const db = client.db(dbName)

    // insertDocuments(db, function () {
    //     client.close()
    // })
    findDocuments(db,function () {
        client.close()
    })

})

const insertDocuments = function (db, callback) {
    const collection = db.collection('fruits')


    collection.insertMany(
        [
            {
                name: 'Apple',
                score: 16,
                review: 'Great!'
            },

            {
                name: 'Banana',
                score: 16,
                review: 'Best!'
            },

            {
                name: 'Or ange',
                score: 16,
                review: 'Sweet!'
            }

        ],
        function (error, result) {
            assert.equal(error, null)
            console.log('Inserted 3 documents')
            callback(result)

        }
    )

}


const findDocuments = function (db, callback) {
    const collection = db.collection('fruits')

    collection.find({}).toArray((err, fruits) => {
        console.log("Found the following records")
        console.log(fruits)
        callback(fruits)
    } )
}
