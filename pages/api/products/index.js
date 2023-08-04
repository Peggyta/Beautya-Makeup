import connectDB from "@/utils/connectDB";
import Product from "@/models/Product";

export default async function handler(req, res) {
    try {
        await connectDB();
       
    } catch (err) {
        res
        .status(500)
        .json({status: 'failed', message: 'connection failed'});
    }
    if(req.method === 'GET') {
        try {
            const storeData = await Product.create({
              
            })
            res
            .status(200)
            .json({status: 'success', message: 'data stored in db', data: storeData});
    
         } catch(err) {
            res
            .status(500)
            .json({status: 'failed', message: 'error in stroing data to database'});
         }
    }  
}