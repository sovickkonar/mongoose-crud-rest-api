require('dotenv').config();
const app = require('./app');
const { connectToDb } = require('./app/models');
const PORT = process.env.PORT || 3000;

app.listen(PORT,async ()=>{
    await connectToDb();
    console.log(`server started on http://localhost:${PORT}`);
});


