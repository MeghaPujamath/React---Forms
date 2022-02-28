import users_db from '../model/users.json' assert {type: "json"};
const userDB = {
    users: users_db,
    setUsers: function(data) {this.users = data}
}

import express from 'express';
const router = express.Router()
import bcrypt from 'bcrypt';
import { promises as fsPromises } from 'fs';
import path from 'path';
import { type } from 'os'

const handleNewUser = async (req,res)=>{
    const {user, pwd} = req.body;
    if(!user || !pwd)
    {
        return res.status(400).json({'message': 'Username and Password are required'});
    }
    const duplicate = userDB.users.find(p => p.username === user);
        if(duplicate)
        {
            return res.sendStatus(409);
        }
        try{
            const hashpwd = await bcrypt.hash(pwd, 10);
            const newUser = {"username":user, "password":hashpwd};
            userDB.setUsers([...userDB.users,newUser]);

            await fsPromises.writeFile(
                path.join(__dirname, '..', 'model', 'users.json'),
                JSON.stringify(userDB.users)
            );
            res.status(201).json({'success':`New user ${user} created`});
        }
        catch(err){
            res.status(500).json({'message': err.message});
        }
}

export default {handleNewUser};