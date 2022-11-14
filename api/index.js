import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import cookieParser from "cookie-parser"
import cors from "cors"

import authRoute from "./routes/auth.js"
import questionRoute from "./routes/question.js"
import memoRoute from "./routes/memo.js"
import usersRoute from "./routes/users.js"

const app = express();
dotenv.config()

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("Connected to mongoDB")
      } catch (error) {
        throw error
      }
}

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})

//middlewares
app.use(cors({
  origin: 'http://localhost:3000',//アクセス許可するオリジン
  credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
  optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}))
app.use(cookieParser())
app.use(express.json())//allow json format data

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/memo", memoRoute);
app.use("/api/questions", questionRoute);

const port = process.env.PORT || 5000
app.listen(port, () => {
    connect()
    console.log(`Listening on port ${port}`)
})