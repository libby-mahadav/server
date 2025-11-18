import { Request, Response, NextFunction } from "express";

export function checkIfInRange(fieldName: string, min: number, max: number) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const value = req.body[fieldName];
    const num = Number(value);

    if (num < min || num > max) {
      res.status(400).json({ error: `${fieldName} must be between ${min} and ${max}` });
      return;
    }
    next();
  };
}

export function checkIfNumber(fieldName: string) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const value = req.body[fieldName];

    if (value === undefined) {
      res.status(400).json({ error: `${fieldName} is missing from body` });
      return;
    }

    const num = Number(value);
    if (isNaN(num)) {
      res.status(400).json({ error: `${fieldName} must be a valid number` });
      return;
    }

    next();
  };
}