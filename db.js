const mongodb = require('mongodb')

const connectionString = 'Your unique connection string goes here'

mongodb.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
    module.exports = client.db()
    const app = require('./app')
    app.listen(3000)
})