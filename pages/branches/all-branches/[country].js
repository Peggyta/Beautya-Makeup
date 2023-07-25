import { useRouter } from "next/router";
import BranchesOfCountry from "@/components/template/BranchesOfCountry";
import data from "@/utils/data";



function CountryBranches() {
   
    const {query} = useRouter();
    const{name} = query;
    const branch = data.countries.find(i => i.name === name);
    console.log(branch);
    if(!name) {
        return <div>No branch found in this country!</div>
    }
    return(
        <div className="mt-12">
                <BranchesOfCountry branch={branch}  />       
        </div>
    )
}

export default CountryBranches;

