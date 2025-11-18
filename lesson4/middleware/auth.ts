import {Request, Response, NextFunction} from "express";
import {AuthService} from '../UTIL/authentication';

const authService = new AuthService();

export function ManagerAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  console.log(authHeader);
  const token = authHeader?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Missing token" });
  }
  try{
    const decoded  = authService.verifyToken(token); 
    (req as any).user = decoded.username;
    next();
  }
  catch (error)
  {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
}


export function AuthorizatManager(req: Request, res: Response, next: NextFunction) {
  if((req as any).user == "admin")
    next();
  else return res.status(403).json({error: "the user not allow to enter this page"})
}
