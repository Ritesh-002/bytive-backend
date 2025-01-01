import dotenv from 'dotenv';
import app from './app.js';
import connectToDB from './config/dbConfig.js'

dotenv.config();

const PORT = process.env.PORT

app.listen(PORT, async () => {
    await connectToDB();
    console.log(`App is running at http://localhost:${PORT}`);
});