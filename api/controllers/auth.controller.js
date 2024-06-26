import bcrypt from 'bcrypt';
import prisma from '../lib/prisma.js';

export const register = async ( req, res ) => {
  const { username, email, password, usertype } = req.body;

  // HASH THE PASSWORD

  const hashedPassword = await bcrypt.hash(password, 10);

  console.log(hashedPassword);
  
  // CREATE A NEW USER AND SAVE TO DATABASE
  const newUser = await prisma.user.create({
    data: {
      username,
      email, 
      password: hashedPassword, 
      usertype,
    }
  });

  console.log(newUser);
  // console.log(req.body);
};
export const login = ( req, res ) => {
  // db operations
}
export const logout = ( req, res ) => {
  // db operations
}