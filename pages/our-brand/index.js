import Brand from "@/components/template/Brand";
import Link from "next/link";
import { useRouter } from "next/router";

function OurBrand() {
    const router = useRouter();
    const {route}= router;
    console.log(router);
    return(
        <>
            <div className=" md:px-12 md:mb-4 md:mt-3 mt-10 px-4">
                <Link href={`${route}`} className="font-bold">{route}</Link>
            </div>
            <Brand />
        </>   
    ) 
}

export default OurBrand;