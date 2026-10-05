import Image from "next/image";
import { notFound } from "next/navigation";


const NewsDetails = async({params}: {params: Promise<{newsId: string}>}) => {
    const {newsId} = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`);
    const data = await res.json();
    const newsDetails = data.data;

    if (!res.ok || !newsDetails) {
        notFound();
    }

    return (
        <div>
            <h1>{newsDetails.title}</h1>
            <Image 
            src={newsDetails.imageUrl} 
            alt={newsDetails.imageAlt} 
            width={800} height={400} 
            className="my-5" />
            <p>{newsDetails.text}</p>
        </div>
    );
};

export default NewsDetails;