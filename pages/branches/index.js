import { useRouter } from "next/router";
import Link from "next/link";
import Branches from "@/components/template/Branches";

function CompanyBranches() {
    const router = useRouter();
    const{route} = router;
    return(
        <>
            <div className=" md:px-12 md:mb-4 md:mt-3 mt-10 px-4">
                <Link href={`${route}`} className="font-bold">{route}</Link>
                <Branches />
            </div> 
        </>
    )
}

export default CompanyBranches;