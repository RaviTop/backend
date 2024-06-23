// user.js
const supabase = require('../db/database');

// Create User
async function createUser(rol,email, password) {
 
 const { data, error } = await supabase
    .from('users')
    .insert([
    { rol,email,password},
    ])
    .select()
        
  if (error) {
    throw error;
  }
  return data;
}

// Read User
async function getUser(email,password) {
   
   const { data , error } = await supabase
    .from('users')
    .select("*")
    .eq('email', email )
    .eq('password', password )
    .single()
   console.log(data)
    if(data == null){
        
        return { message : "invalid password and email "}
    }
    if (error) {
        throw error;
      }
      return data;

    }
// Update User
async function updateUser(uuid,email,password) {
  const { data, error } = await supabase
    .from('users')
    .update({"email":email,"password":password})
    .eq('uuid', uuid)
    .select()
    .single()
  if (error) {  
    return {message: "user is not found chack uuid"} ;
  }
  return data;
}

// Delete User
async function deleteUser(uuid , email,password) {
  const { data, error } = await supabase
    .from('users') // Replace with your actual table name if different
    .delete()
    .eq('uuid', uuid)
    .eq('email', email)
    .eq('password', password)
    .select()
  if (error) {
     return {message : "invalid email and  password"}
  }
  return data;
}

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
