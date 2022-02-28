import users_db from '../model/users.json' assert {type: "json"};
//const jsUsers = JSON.parse(users_db);
const userDB = {
    users: users_db,
    setUsers: function(data) {this.users = data}
}

import bcrypt from 'bcrypt';

const handleLogin = async (req,res) => {
    console.log(req.body);
    const {email, password} = req.body;
    if(!email || !password)
    {
        return res.status(400).json({'message': 'Username and Password are required'});
    }
    const foundUser = userDB.users.find(p => p.username === email);
    if(!foundUser)
    {
        return res.sendStatus(401);
    }

    const match = await bcrypt.compare(password, foundUser.password);
    if(match){
        res.json({'success': `User ${user} is logged in!`});
    }
    else{
        res.sendStatus(401);
    }
}

export default {handleLogin};