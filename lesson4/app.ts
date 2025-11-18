
import express from "express";
import GameRouter from "./game/GamerRouter";
import ManagerRouter from "./manager/managerRouter";
import { logRequest } from "./middleware/loggerRequest"
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(express.json());

app.use(logRequest);


app.use("/game", GameRouter);
app.use("/manager", ManagerRouter); 


app.use(errorHandler);

export default app;