import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './config/db.js'
import {clerkMiddleware} from '@clerk/express'
import clerkWebhook from './controller/clerkWebhook.js'



const app=express()
app.use(cors())

//Middleware
app.use(express.json())
app.use(clerkMiddleware())

// API to listen to clerk webhooks
app.use('/api/clerk',clerkWebhook);
app.get("/",(req,res)=>res.send("API is working"))



connectDB();
const PORT=process.env.PORT||3000;
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))
 