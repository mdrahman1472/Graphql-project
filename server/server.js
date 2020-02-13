const express = require('express');
const PORT = 3500;

const app = express();

// '/graphql' is the endpoint I defined
app.use('/graphql', (req, res) => {
   res.send('Welcome to Our Author App');
});

app.listen(PORT, ()=>{
   console.log('Server running on port: ', PORT);
});