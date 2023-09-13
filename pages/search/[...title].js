import connectDB from "@/utils/connectDB";
import Product from "@/models/Product";
import { useRouter } from "next/router";
import SearchResult from "@/components/template/SearchResult";

function SearchSection({data}){
    const router = useRouter();
    const [products] = router.query.title;
    const filterProducts = data.filter((item)=>
    (item.title).toLowerCase().includes(products.toLowerCase()) === 
    products.toLowerCase().includes(products.toLowerCase()))
    
 return(
    <SearchResult data={filterProducts}  />
 )
}

export default SearchSection;

export async function getServerSideProps(){
    try{
        await connectDB();
        const data = await Product.find();
        return {
            props: {data: JSON.parse(JSON.stringify(data))}
        }
    } catch(err) {
        return {
            notFound: true,
        }
    }
}