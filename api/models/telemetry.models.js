// user.js
const supabase = require('../db/database');

// Create User
async function createDevices(uuid,deviceName,edgeid) {
 
const { data, error } = await supabase
  .from('deviceList')
  .insert([
    {uuid,deviceName,edgeid},
  ])
  .select()
          
        
  if (error) {
    throw error;
  }
  return data;
}

// Read User
async function getDevices(uuid) {
   
   const { data , error } = await supabase
    .from('deviceList')
    .select("*")
    .eq('uuid', uuid )

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
async function updatedevices(uuid,deviceName,edgeid,NewEdgeid) {
  const { data, error } = await supabase
    .from('deviceList')
    .update({"deviceName":deviceName,"edgeid":NewEdgeid})
    .eq('uuid', uuid)
    .eq('edgeid',edgeid)
    .select()
    .single()
  if (error) {  
    return {message: "chack edgeid "} ;
  }
  return data;
}

// Delete User
async function deleteDevices(uuid,edgeid) {

 const {data, error } = await supabase
    .from('deviceList')
    .delete()
    .eq('uuid',uuid)
    .eq('edgeid', edgeid)
    .select()
  if (error) {
     return {message : "invalid edgeid"}
  }
  return data;
}

module.exports = {
  createDevices,
  getDevices,
  updatedevices,
  deleteDevices,
};
