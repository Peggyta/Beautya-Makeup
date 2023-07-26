import Link from 'next/link';
import { useRouter } from 'next/router';
import AllBranches from '@/components/template/AllBranches';
import Branch from '@/models/Branch';
import connectDB from '@/utils/connectDB';

function ShowAllBranches({getBranches}) {
    const router = useRouter();
    const{route} = router;
    return(
        <>
            <div className=" md:px-12 md:mb-4 md:mt-3 mt-10 px-4 font-bold">
                <Link href={`${route}`}>{route}</Link>
            </div>
            <AllBranches data={getBranches} />
        </>
    )
}

export default ShowAllBranches;

export async function getStaticProps() {
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