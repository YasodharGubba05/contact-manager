const getContacts =  (req,res) =>{
    res.status(200).json({message:"Get all Contacts"});
}

const createContact =  (req,res) =>{
     console.log("Request body is:", req.body); 
     console.log("the request of the body is " ,req.body);
     const {name,email,phone} =req.body;
     if(!name || !email || !phone) {
        res.status(400);
        throw new Error ("all fields are mandatory")
     }
      res.status(201).json({message:"Create Contacts"});
}

const getContact = (req,res) =>{
    res.status(200).json({ message: `Get Contact for ${req.params.id}` });
}

const updateContact = (req,res) =>{
    res.status(200).json({ message: `Update Contact for ${req.params.id}` });
}

const deleteContact = (req,res) =>{
    res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
}




module.exports = {getContacts
    ,createContact,
    getContact,
    updateContact,
    deleteContact
}
