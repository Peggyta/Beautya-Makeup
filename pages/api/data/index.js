import connectDB from "@/utils/connectDB";
import Branch from "@/models/Branch";

export default async function handler(req, res) {
    try {
        await connectDB();
    } catch(err) {
        console.log(err);
        res
        .status(500)
        .json({status: 'failed', message: 'connection failed'});
    }
    if(req.method === 'GET') {
        try {
            const countryBranch = await Branch.create({
             
            });       
            res
            .status(200)
            .json({status: 'success', message:'data created', data: countryBranch});

        } catch(err) {
            console.log(err);
            res
            .status(500)
            .json({status:'failed', message: 'failed to store data in database'});
            return;
        }
    }  
}