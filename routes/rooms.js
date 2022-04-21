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
        res.render('successfulCreation')
    }
    catch(err){
        res.json({message: err});
    }
})


//Join room
router.get('/joinRoom', (req, res) => {
    res.render('joinRoom')
})

router.post('/joinRoomData',async (req, res) => {
    // console.log(req.body.rname);
    // const room = new Room(req.body);
    try{
        const room =await Room.findOne({rname: req.body.rname, rcode: req.body.rcode});
        if(room == undefined)
            res.render('../views/roomLogin/unsucLogin.handlebars', {rname: req.body.rname})
        else
            res.render('../views/roomLogin/sucLogin.handlebars', {rname: req.body.rname})
            
    }
    catch(err){
        res.json({message: err})
    }
})
module.exports = router;