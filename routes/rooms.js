const express = require('express');
const { route } = require('express/lib/application');
const path = require('path')
const Room = require('../models/Room')
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const router =express.Router();
router.get('/',(req, res)=> {
    // res.sendFile(path.join(__dirname, '../templates/index.html'))
    res.render('home')
})

router.get('/createRoom', (req, res)=> {
    res.render('createRoom')
})

router.post('/roomPost',async (req, res)=> {
    console.log(req.body);
    const room = new Room(req.body);
    try{
        const savedRoom = await room.save()
        res.send("Room created successfully!!")
    }
    catch(err){
        res.json({message: err});
    }
})

module.exports = router;