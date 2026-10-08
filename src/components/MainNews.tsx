import Image from "next/image";
import Link from "next/link";

interface Inews {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
}

const MainNews = ({ news }: { news: Inews[] }) => {
  const [firstNews, ...otherNews] = news;

  if (!firstNews) {
    return <p>No news available</p>;
  }

  return (
    <div className="flex gap-2 p-2">
      <Link href={`/news/${firstNews.id}`} className="flex-1">
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <Image
              height={600}
              width={600}
              src={firstNews.imageUrl || "/default-news.jpg"}
              alt={firstNews.imageAlt || firstNews.title}
            />
          </figure>

          <div className="card-body">
            <p className="text-red-600 font-semibold">
              {firstNews.category}
            </p>

            <h2 className="card-title">{firstNews.title}</h2>

            <p>{firstNews.description}</p>
          </div>
        </div>
      </Link>

      <div className="grid gap-3">
        {otherNews.slice(0, 4).map((other) => (
          <Link href={`/news/${other.id}`} key={other.id}>
            <div className="card bg-base-100 border border-gray-300 p-6">
              <p className="text-red-600 font-semibold">
                {other.category}
              </p>

              {other.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
