const express = require('express');
const app = express();
app.use(express.json());

app.get('/hey-docker', (req, res) => {
    res.json({
        mensagem: 'Hello Docker!'
    })
})

app.listen(5200, () => console.log('Up and runnig on port 5200 inside Docker!'));