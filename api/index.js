
require('dotenv').config();

const express = require ('express');
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
//

app.get('/', (req, res) => {
res.send(process.env.APP_NAME);
});

app.get('/health', (req, res) => {
res.json({ status: 'OK' });
});

app.post('/message', (req, res) => {
const { message } = req.body;
res.json({ received: message });
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
    });