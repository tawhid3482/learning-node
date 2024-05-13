const { error } = require('console')
const fs = require('fs')
 fs.readFile('./texts/read.txt','utf-8', (error,data)=>{
    if(error) throw error
    console.log(data)
 })