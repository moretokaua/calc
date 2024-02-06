import express from "express"
import cors from "cors"
const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));

let hist = []

app.get("/calc", (req, res)=>{
    return res.status(200).json(hist)
})

app.post("/hist",(req, res)=>{
    const { resultado } = req.body
    hist.push(resultado)
    return res.status(200).json('ok')
})

app.listen(3333, ()=>{
    console.log("api no ar!")
})