import Branches from "@/components/template/Branches";
import connectDB from "@/utils/connectDB";
import Branch from "@/models/Branch";

function CompanyBranches() {
    return(
        <>
            <div className=" md:px-12 md:mb-4 md:mt-0 mt-6 px-4">
                <Branches />
            </div> 
        </>
    )
}

export default CompanyBranches;

export async function getServerSideProps() {
    try{
        await connectDB();
        const searchBranches = await Branch.find();
        return {
            props: {searchBranches: JSON.parse(JSON.stringify(searchBranches))}
        }
    } catch(err) {
        return {
            notFound: true,
        }
    }
}