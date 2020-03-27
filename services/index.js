const express = require('express');

const port = 5000;
const app = express();

app.use('/user', require('./user/service'));
app.use('/orders', require('./orders/service'));
app.use('/medications', require('./medications/service'));

// Run the Express Application
app.listen(port, () => console.log(`Mock services listening on port ${port}!`));
