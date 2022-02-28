
import express from 'express';
import cors from 'cors';
const app = express();

const whitelist = ['http://localhost:8000']
const corsOptions = {
    origin: (origin,callback) => {
        if(whitelist.indexOf(origin) !== -1 || !origin){
            callback(null,true)
        }
        else{
            callback(new Error('Not allowed'));
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3500;

app.get('/', (req,res) => {
    res.send('Hello');
});

// app.post('/login', (req,res) => {
//     res.send('Hello');
// });

import d from './routes/register.js';
import k from './routes/auth.js';
app.use(express.json());
app.use('/register', d);

app.use('/login', k);

app.get('/*', (req,res) => {
    res.status(404).send("Not Found Megha");
});

app.use(function (err,req,res,next){
    console.error(err.stack)
    res.status(500).send(err.message);
})

////class Emitter extends EventEmitter{};

//onst myEmitter = new Emitter();



// const server = http.createServer((req, res) => {
//     try{
//         const data = await fsPromises.readFile(req, 'utf-8');
//         const formatted_data = JSON.parse(data);
//         res.writeHead(200, {});
//         res.end(JSON.stringify(formatted_data));
//     }
//     catch (err){
//         res.statusCode = 500;
//         res.end();
//     }
// });

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
//myEmitter.on('log', (msg) => logData(msg));
