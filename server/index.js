import express from 'express'
import mongoose from 'mongoose'
import config from 'config'

const PORT = config.get('PORT')
const URLdb = config.get('URLdb');

const app = express()


const start = async () => {
    try {
        await mongoose.connect(URLdb)

        app.listen(PORT, () => {
            console.log("Server has been started...")
        })
    }catch (e) {
        console.error(e)
    }
}

await start()