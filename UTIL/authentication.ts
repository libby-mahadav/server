

import JWT from "jsonwebtoken";

const SECRET_KEY = "my_secret_key"; 

export class AuthService {
   
    generateToken(managername: string, role: string = 'admin'): string {
        const payload = { 
            username: managername, 
            role: role 
        };
        return JWT.sign(payload, SECRET_KEY, { expiresIn: "1w" });
    }

    verifyToken(token: string): any {
     
        return JWT.verify(token, SECRET_KEY);
    }
}

