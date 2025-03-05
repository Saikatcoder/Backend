import crypto from 'crypto';

export const generateToken =()=>{
    return crypto.randomBytes(16).toString("hex")   //? hex meaning your value was double exm: 16 means 16*2 =32
}

export const validateToken = (token)=>{
    return token.length === 32;
}

