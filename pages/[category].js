import connectDB from "@/utils/connectDB";
import Product from "@/models/Product";
import CategoryCard from "@/components/module/homepage/CategoryCard";

const index = ({getCategory}) => {
    return (
        <div>
            <CategoryCard {...getCategory} />
        </div>
    );
};

export default index;

export async function getServerSideProps(context) {
    const {
        params:
        {category}
    } = context;

    try{
        await connectDB();
        const getCategory = await Product.findOne({category});
        
        return {
            props: {getCategory: JSON.parse(JSON.stringify(getCategory))}
        }
    } catch(err) {
        return {
            notFound: true,
        }
    }  
}