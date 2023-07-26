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
    if(req.methode === 'GET') {
        try {
            // const countryBranch = await Branch.create({
             
            // });       
            // res
            // .status(200)
            // .json({status: 'success', message:'data created', data: countryBranch});
            
            // res
            // .status(200)
            // .json({status:'success', data: getBranches});
            const getCountries = await Branch.find();
            res
            .status(200)
            .json({status:'success', data: getCountries});

        } catch(err) {
            console.log(err);
            res
            .status(500)
            .json({status:'failed', message: 'failed to retrieving data from database'});
            return;
        }
    }  
}