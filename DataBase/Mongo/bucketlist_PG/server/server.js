// ... (Other imports and configuration)
const conn = require('./connection')

const app = express();

// Set up middleware (body parsers, static file serving, etc.)
app.use(logger(process.env.NODE_ENV || "dev"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('./../client'))

// Connect to the database
conn.connect()
.then(function(){
    debug('connected to pg')
})
.catch(function(err){
    debug(err)
})

// Route to CREATE or POST a single item
app.post('/bucket', (req, res) => {
    let description = req.body.description;

    // Assume you have the user_id somehow
    let user_id = req.body.user_id;

    const q = `
        INSERT INTO bucketlist.items (user_id, description)
        VALUES (${user_id}, '${description}') 
        RETURNING 
            item_id as "id",
            item_id as "_id",
            description,
            is_complete as "isComplete",
            trunc(extract(epoch from created_timestamp)) as created_timestamp
    `

    conn.query(q)
    .then(function(data){
        res.json(data.rows)
    })
    .catch(function(err){
        console.log('Error in the post route', err)
        res.json("An error occurred in the post route. Please try again later.")
    })
})

// ... (Other routes and app.listen)
app.listen(PORT, () => {
    debug(`Server is running on port ${PORT}`)
})