import { notFound } from "next/navigation";
import NewsCard from "@/components/NewsCard";

interface IcategoryNews {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string; 
}


const CategoryNews = async({params}: {params: Promise<{categoryId: string}>}) => {
    const {categoryId} = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);
    const data = await res.json();
    const categoryNewsData = data?.data;

    if (!res.ok || !Array.isArray(categoryNewsData)) {
        notFound();
    }


    return (
        <div>
        <h1 className="text-2xl font-bold border-b-2 border-red-700 mb-5 ml-2">{data.title}</h1>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {categoryNewsData.map((news) => (
                <NewsCard key={news.id} news={news} />
                ))}
        </div>


        </div>
    );
};

export default CategoryNews;