
import express from "express";
import {GameService} from "../game/GameService ";
import { checkIfNumber } from "../middleware/validateParams";

const router = express.Router();

router.get("/newGame", (req, res) => {
 res.status(200).json({ 
        message: "New game started !",
        range: `Range is from ${GameService['MIN']} to ${GameService['MAX']}` 
    });
});

router.post("/isCorrect",  checkIfNumber('guess'), (req, res) => {
  const isCorrect = GameService.checkGuess(req.body.guess);
  if(isCorrect){
     res.status(203).send("Correct!");
    GameService.newGame();
    res.send(" new game! range is from " + GameService['MIN'] + " to " + GameService['MAX']);
  }
  else {
    if(req.body.guess < GameService['secretNumber'])
      res.status(200).send("Too Low!");
    else
      res.status(200).send("Too High!");
  }
   res.status(200).send("Try Again!");
});

export default router;