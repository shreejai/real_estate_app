import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

export const register = async ( req, res ) => {
  const { username, email, password, phone, usertype } = req.body;

  try{


    // HASH THE PASSWORD

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(hashedPassword);
  
    // CREATE A NEW USER AND SAVE TO DATABASE
    const newUser = await prisma.user.create({
      data: {
        username,
        email, 
        password: hashedPassword,
        phone, 
        usertype,
      }
    });

    console.log(newUser);

    res.status(201).json({ message: "User created successfully" });
  }catch(err){
    console.log(err);
    res.status(500).json({ message: "Something went wrong. Failed to create user!" });
  }
};

export const login = ( req, res ) => {
  // db operations
}
export const logout = ( req, res ) => {
  // db operations
}