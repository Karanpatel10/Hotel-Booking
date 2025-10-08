import User from "../models/User.js";
import { Webhook } from "svix";


// const clerkWebhook = async(req,res) => {
//   try{
//         //create a Svix instance with clerk webhook seceat
//         console.log("🔥 Clerk webhook hit");
//         const whook =new Webhook(process.env.CLERK_WEBHOOK_SECRET_KEY);

//       //  Getting headers
//         const headers={
//           "svix-id":req.headers["svix-id"],
//           "svix-timestamp":req.headers["svix-timestamp"],
//           "svix-signature":req.headers["svix-signature"]
//        };

//       //  verifiying headers
//       await whook.verify(JSON.stringify(req.body), headers);

//       //  Getting user details
//       const {data,type}=req.body;
//       console.log("✅ Verified event:", type, data.id);

//       const userData={
//         _id:data.id,
//         email:data.email_addresses[0].email_address,
//         username:`${data.first_name || ""} ${data.last_name || ""}`.trim(),
//         image:data.image_url,
//       }
//       console.log("📩 User data prepared:", userData); 

//       // Switch case for different events
//       switch(type){
//         case "user.created":
//           //  Create a new user in our database
//           console.log("🟢 Creating user in DB...");
//           await User.create(userData);
//           console.log("✅ User created successfully");
//           break;
//         case "user.updated":
//           //  Update user details in our database
//           console.log("✏️ Updating user in DB...");
//           await User.findByIdAndUpdate(data.id,userData);
//           console.log("✅ User updated successfully");
//           break;
//         case "user.deleted":
//           //  Delete user from our database
//           console.log("🗑️ Deleting user from DB...");
//           await User.findByIdAndDelete(data.id);
//           console.log("✅ User deleted successfully");
//           break;
//         default:
//           //  Handle other events if needed
//           break;
//       }

//       //  Return success message
//       return res.status(200).json({ success:true,message:"Webhook processed successfully"});

//   }catch(error){
//     console.log(error)
//       return res.status(500).json({ success:false,message:error.message});
//   }
// }

// export default clerkWebhook

const clerkWebhook = async (req, res) => {
  try {
    console.log("🔥 Clerk webhook hit"); // Step 1 log

    // Temporary response to test
    return res.status(200).send("Webhook reached");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Error");
  }
};

export default clerkWebhook;
