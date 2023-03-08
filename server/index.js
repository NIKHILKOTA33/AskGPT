const { response } = require("express");
const express = require("express")
const cors = require("cors")
require('dotenv').config()
const app = express()
app.use(cors())
//openai key
const OPENAI_API_KEY = process.env.OPENAI_API
const port = process.env.PORT || 3000
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-ZOUHfvlpopnabColWu5hn7Ns",
    apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
app.use(express.json())
app.post("/chat",(req,res)=>{
    const question = req.body.question;
    openai.createCompletion({
        model: "text-davinci-003",
        prompt: question,
        max_tokens: 4000,
        temperature: 0,
      }).then(response=>{
        return response?.data?.choices?.[0]?.text ;
      })
      .then((answer)=>{
        const array = answer?.split("\n").filter(value=>value).map((value)=>value.trim())
        return array
      })
      .then((answer)=>{
        res.json({
            answer:answer,
        })
      }) 
})
app.listen(port)
