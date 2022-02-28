
import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import fs from 'fs';
import { promises as fsPromises } from 'fs';
import path from 'path';

const logData = async (msg) => {
    const dateTime = `${format(new Date(), 'MMddyyyy\tHH:mm:ss')}`;
    const logVal = `${dateTime}\t${uuid()}\t${msg}\n`;
    try{
        if (!fs.existsSync(path.join(__dirname, 'logs'))){
            await fsPromises.mkdir(path.join(__dirname,'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logVal);
    }
    catch(err)
    {
        console.log(err);
    }
}

module.exports = logData;
// process.on('uncaughtException', err => {
//     console.error('There was an uncaught error: ${err}');
//     process.exit(1);
// })