const express = require('express');

const app = express();

app.use('/static', express.static('./final'));
app.use('/dl', express.static('./download'));

app.listen(3000, () => console.log('listening on port 3000'));