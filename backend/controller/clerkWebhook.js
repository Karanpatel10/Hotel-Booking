import User from "../models/User.js";
import { Webhook } from "svix";


const clerkWebhook = async(req,res) => {
  try{
        //create a Svix instance with clerk webhook seceat
        const whook =new Webhook(process.env.CLERK_WEBHOOK_SECRECT_KEY);

      //  Getting headers
        const headers={
          "svix-id":req.headers["svix-id"],
          "svix-timestamp":req.headers["svix-timestamp"],
          "svix-signature":req.headers["svix-signature"]
       };

      //  verifiying headers
      await whook.verify(JSON.stringify(req.body), headers);

      //  Getting user details
      const {data,type}=req.body;

      const userData={
        _id:data.id,
        username:data.first_name+" "+data.last_name,
        email:data.email_addresses[0].email_address,
        image:data.image_url,
      }

      // Switch case for different events
      switch(type){
        case "user.created":
          //  Create a new user in our database
          await User.create(userData);
          break;
        case "user.updated":
          //  Update user details in our database
          await User.findByIdAndUpdate(data.id,userData);
          break;
        case "user.deleted":
          //  Delete user from our database
          await User.findByIdAndDelete(data.id);
          break;
        default:
          //  Handle other events if needed
          break;
      }

      //  Return success message
      return res.status(200).json({ success:true,message:"Webhook processed successfully"});

  }catch(error){
    console.log(error)
      return res.status(500).json({ success:false,message:error.message});
  }
}

export default clerkWebhook