import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import NewsCard from "@/components/NewsCard";


interface IotherSections {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}



export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherSections: IotherSections[] = sections.slice(1);
  console.log(otherSections);

  return (
    <div>
      <Marquee />
      <div className="grid grid-cols-3 max-w-7xl mx-auto">
        {/* news section */}
        <div className="col-span-2">
          <MainNews news={mainNews} />

          <div className="grid gap-3 p-2">
            {otherSections.map((os) => (
              <div className="" key={os.curationId}>
                <h1 className="text-xl font-semibold border-b-2 border-red-700 pb-1">{os.title}</h1>

                <div className="grid grid-cols-2 gap-3 mt-3">
                  {os.articles.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* most read section */}
        <div className="bg-green-500 col-span-1"> </div>
      </div>
    </div>
  );
}
