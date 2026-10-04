import Image from "next/image";

interface Inews {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
}

const MainNews = ({ news }: {news: Inews[]}) => {
  //const firstNews = news[0];
  //const otherNews = news.slice(1);
  //console.log(otherNews);

  const [firstNews, ...otherNews] = news;

  return (
    <div className="flex gap-2 p-2">
      <div className="card bg-base-100 shadow-sm">
        <figure>
          <Image
            height={600}
            width={600}
            src={firstNews.imageUrl}
            alt={firstNews.imageAlt}
          />
        </figure>
        <div className="card-body">
          <p className="text-red-600 font-semibold">{firstNews.category}</p>
          <h2 className="card-title">{firstNews.title}</h2>
          <p>{firstNews.description}</p>
        </div>
      </div>

      <div className="grid gap-3">
        {otherNews.slice(0, 4).map((other) => (
          <div
            className="card bg-base-100 border border-gray-300 p-6"
            key={other.id}
          >
            <p className="text-red-600 font-semibold">{firstNews.category}</p>
            {other.title}
          </div>

        ))}
      </div>
    </div>
  );
};

export default MainNews;
