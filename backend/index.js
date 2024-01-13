const express = require("express");
const { createTodo, updateTodo } = require("./types.js");
const cors  = require("cors");

const { Todo } = require("./db");


const app = express();

app.use(express.json());
app.use(cors());


app.post("/add-todo",async function (req,res){

    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success)
    {
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return;
    }

    await Todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })

    res.json({

        msg:"todo created"
    })

})

app.get("/show-todo",async function (req,res){

    const todo = await Todo.find();
    res.json({
        todo
    })
    
})

app.put("/completed",async function (req,res){

    const mark = req.body;
    const parsemark = updateTodo.safeParse(mark);
    if(!parsemark.success)
    {
        res.status(411).json({
            msg:"you enter wrong inputs"
        })
        return;
    }

    await Todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"todo updated"
    })
    
})

app.listen(3000)