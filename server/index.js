import express from 'express'
import mongoose from 'mongoose'
import config from 'config'
import authRouter from './routes/auth.router.js'

const PORT = config.get('PORT')
const URLdb = config.get('URLdb');
const app = express()

app.use(express.json())
app.use('/api/auth', authRouter)

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