import { useRouter } from "next/router";
import connectDB from "@/utils/connectDB";
import Branch from "@/models/Branch";
import BranchSearchBar from "@/components/module/branch/BranchSearchBar";

function FilterCountries({getData}) {
    const router = useRouter();
    const[countries] = router.query.country;
    const filteredCountries = getData.filter((item)=> 
    (item.country).toLowerCase() === countries.toLowerCase());
  

    return(
        <div className="max-w-8xl px-16 mt-12 md:mt-0">
            <BranchSearchBar info={filteredCountries} />
        </div>
    )
}
export default FilterCountries;
export async function getServerSideProps() {
    try {
        await connectDB();
        const getData = await Branch.find();
        return {
            props: {getData: JSON.parse(JSON.stringify(getData))}
        }
    } catch(err) {
        return {
            notFound: true,
        }
    }
}