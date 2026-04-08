const express = require('express');
const app = express();
const port = 3000;

console.log
app.get('/', async(req , res) =>{
    res.send(`
        <div>
        <h1>Student Info:</h1>
        <h2>name: Rohit</h2>
        <h2>Roll No: 12345</h2>
        <h2>Branch: CSE</h2>
        </div>
        `)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});