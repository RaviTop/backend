// user.js
const supabase = require('../db/database');

// Create User
async function createTelemetry(edgeid,values) {
console.log(edgeid,values)
// const values = JSON.stringify(value)

const { data, error } = await supabase
  .from('telemetry')
  .insert([
    { edgeid, values},
  ])
  .select()
          
          
        
  if (error) {
    throw error;
  }
  return data;
}

// Read User
async function getTelemetry(edgeid) {
   
   const { data , error } = await supabase
    .from('telemetry')
    .select("*")
    .eq('edgeid', edgeid )

   console.log(data)
    if(data == null){
        
        return { message : "invalid user "}
    }
    if (error) {
        throw error;
      }
      return data;

    }
// Update User
async function updateTelemetry(edgeid,values,newValue) {
  const { data, error } = await supabase
    .from('telemetry')
    .update({"values":newValue})
    .eq('values', values)
    .eq('edgeid',edgeid)
    .select()
    .single()
  if (error) {  
    return {message: "chack edgeid "} ;
  }
  return data;
}

// Delete User
async function deleteTelemetry(edgeid,values=null) {

 const {data, error } = await supabase
    .from('telemetry')
    .delete()
    .eq('edgeid', edgeid)
    .select()

  if (error) {
     return {message : "invalid edgeid"}
  }
  return data;
}

module.exports = {
  createTelemetry,
  getTelemetry,
  updateTelemetry,
  deleteTelemetry,
};
