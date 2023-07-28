import Link from 'next/link';
import { useRouter } from 'next/router';
import AllBranches from '@/components/template/AllBranches';

function ShowAllBranches() {
    const router = useRouter();
    const{route} = router;
    return (
        <>
            <div className=" md:px-12 md:mb-4 md:mt-3 mt-10 px-4 font-bold">
                <Link href={`${route}`}>{route}</Link>
            </div>
            <AllBranches  />
        </>
)};

export default ShowAllBranches;

