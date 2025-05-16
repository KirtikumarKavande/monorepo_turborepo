const express =require('express')

let app=express()


app.listen(5001,()=>{
    console.log("started socket service")
})