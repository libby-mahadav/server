
import {GameService} from '../game/GameService '
import express, { Request, Response } from 'express';
import {AuthService} from '../UTIL/authentication';
import {ManagerAuth, AuthorizatManager } from "../middleware/auth";
import { checkIfInRange, checkIfNumber }  from "../middleware/validateParams";


const router = express.Router();
const authService = new AuthService();
const req = express.request;
const res = express.response;

router.post('/login', (req , res) => {
    const { name, password } = req.body;
    if (name === GameService.ManagerName && password === GameService.ManagerPassword) {
        const token = authService.generateToken(name);
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }  
});


router.put('/setRange',ManagerAuth , AuthorizatManager,(req, res) => {
    const { min, max } = req.body;
    GameService.setMax(Number(max));
    GameService.setMin(Number(min));
    GameService.newGame();
    res.status(201).json({ message: "Range is now from " +GameService['MAX']+"to " + GameService['MIN'] });
});

router.put('/setSecretNumber',ManagerAuth , AuthorizatManager, (req, res) => {
    const { secretNumber } = req.body;
    if (checkIfNumber(secretNumber) && checkIfInRange(secretNumber, GameService['MIN'], GameService['MAX'])) {
    GameService.setSecretNumber(Number(secretNumber)) ;
    res.status(201).json({ message: "Secret number is " + GameService['secretNumber'] });
    } else {
        res.status(400).json({ error: "secretNumber must be a valid number between "+GameService['MIN']+" and" +GameService['MAX'] });
    }
});

export default router;

