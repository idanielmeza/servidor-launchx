const express = require('express');
const cors = require('cors');

class Server {

    constructor(){

        this.port = 3000;
        this.app = express();

        this.paths={
            explorers: '/explorers'
        }

        this.middlewares()
        this.routes()

    }
    middlewares(){
        this.app.use(express.json())
        this.app.use(cors())
    }

    routes(){
        this.app.use(this.paths.explorers, require('../routes/explorers'));
    }
    
    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server listen on port ${this.port}`)
        })
    }

}

module.exports= Server;