import BranchesOfCountry from "@/components/template/BranchesOfCountry";
import connectDB from "@/utils/connectDB";
import Branch from "@/models/Branch";

const BranchDetails = ({getBranches}) => {
    return(
        <div>
            <BranchesOfCountry info={getBranches}   />
        </div>
        
    )
};

export default BranchDetails;

export async function getServerSideProps() {
    try {
        await connectDB();
        const getBranches = await Branch.find();
        return {
            props: {getBranches: JSON.parse(JSON.stringify(getBranches))}
        }
    } catch(err) {
        return {
            notFound: true,
        };
    }
}
