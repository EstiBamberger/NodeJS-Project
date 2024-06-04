import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import connectDB from './DataBase.js'

import LinksRouter from './LinksRouter.js'
import UsersRouter from './UsersRouter.js'
const secret="jygygjgjhbhvgffv"
connectDB();
const app = express()
app.use(cors())
app.use(express.json());
// app.use('/',(req,res,next)=>{
//     const token=req.headers.authorization.slice(7)
//     try{
//         const recoded=jwt.verify(token,secret)
//         req.userId = decoded.userId;
//         next();
//     }
//     catch {
//         res.status(401).send({ message: "unauthorized" });
//       }
// })
// const logMiddleware=(req,res,next)=>{
//     req.UUID=crypto.randomUUID();
//     console.log(`request ${req.UUID} started.`);
//     next();
// }
app.use('/links',LinksRouter)
app.use('/users',UsersRouter)

app.listen(3000, () => {
    console.log(`Example app listening on http://localhost:3000`)
})