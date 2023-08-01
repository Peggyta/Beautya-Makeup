import connectDB from "@/utils/connectDB";
import BlogModel from "@/models/BlogModel";

export default async function handler(req, res) {
    try {
        await connectDB();
    } catch(err) {
        console.log(err);
        res
        .status(500)
        .json({status: 'failed', message: 'connection failed'});
    }
    
        try {
            const blogs = await BlogModel.create({
            
            });       
            res
            .status(200)
            .json({status: 'success', message:'data created', data: blogs});
            
            // res
            // .status(200)
            // .json({status:'success', data: getBranches});
            // const getCountries = await Branch.find();
            // res
            // .status(200)
            // .json({status:'success', data: getCountries});

        } catch(err) {
            console.log(err);
            res
            .status(500)
            .json({status:'failed', message: 'failed to store data in database'});
            return;
        }
      
}