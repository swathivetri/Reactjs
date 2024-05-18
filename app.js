const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const { initDB } = require('./models');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/products', productRoutes);

initDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}).catch(error => {
    console.error('Unable to connect to the database:', error);
});
