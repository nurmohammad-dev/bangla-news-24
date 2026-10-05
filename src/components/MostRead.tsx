import Link from "next/link";

interface MostReadNews {
    id: string;
    title: string;
}

const MostRead = async() => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
    const data = await res.json();
    const news: MostReadNews[] = data.data;

    return (
        <div className="card p-2 bg-base-100 border border-gray-300">
            <h1 className="font-bold text-red-600 mb-2 mt-3.5">সর্বাধিক পঠিত</h1>
            <div>
                {news.map((n, i) => (
                    <Link key={n.id} href={`/news/${n.id}`} className="flex gap-2 p-2 hover:bg-gray-100">
                        <p className="text-xl text-red-700 font-bold">{i + 1}.</p>
                        <h2>{n.title}</h2>
                    </Link>
                ))}
            </div>
            
        </div>
    );
};

export default MostRead;