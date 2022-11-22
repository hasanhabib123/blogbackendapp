import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

//components
import Connection from './database/db.js';
import Router from './routes/route.js';


dotenv.config();

const app = express();

app.use(cors({ origin: "https://blogapplication-3aos.onrender.com", credentials: true }));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

//step 3: Heroku

// if(process.env.NODE_ENV==="production"){
//     app.use(express.static("client/build"));
//     app.get("*",(request,response)=>{
//         response.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'));
//     })
// }

const PORT = process.env.PORT || 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URI || `mongodb://${USERNAME}:${PASSWORD}@ac-4w0lr2k-shard-00-00.rqyxxh7.mongodb.net:27017,ac-4w0lr2k-shard-00-01.rqyxxh7.mongodb.net:27017,ac-4w0lr2k-shard-00-02.rqyxxh7.mongodb.net:27017/Blog-app?ssl=true&replicaSet=atlas-6huc4a-shard-0&authSource=admin&retryWrites=true&w=majority`;
   

Connection(URL);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));