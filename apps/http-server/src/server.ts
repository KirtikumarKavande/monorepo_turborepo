import express, { Request, Response } from 'express';
import {temp_dummy_token} from "@backend/common/constant"
let PORT=4000
const app=express()
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    console.log("logged",temp_dummy_token)
    res.json({ message: 'Welcome to the API' });
});


app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})