const express = require('express')
const cors = require('cors');
const db = require("./models/index");
const port = parseInt(process.env.PORT, 10) || 6003
const server = express()
server.use(express.json());
db.sequelize.sync({alter:true}) 
.then(() => { console.log("Synced db.");})
.catch((err) => { console.log("Failed to sync db: " + err.message);});

const corsOpts = {
  origin: '*',
};
server.use(cors(corsOpts));
server.use('/movies', require('./api/movies')) 
    
server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
})