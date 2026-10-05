import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Iheadlines {
    id: string,
    title: string
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=20");
  const data = await res.json();
  const headlines: Iheadlines[] = data.data;
  console.log(headlines);
  return (
    <div className="bg-red-700 text-white">
      <div className="flex max-w-7xl mx-auto">
        <div className="bg-red-800 px-3 py-1 font-bold">সর্বশেষ</div>
        <MarqueeText className="py-1" direction="right" duration={10}>
          {headlines.map((h) => (
            <Link key={h.id} href={`/news/${h.id}`} className="flex gap-2 p-2">
            <span key={h.id}>
              <span>{h.title}</span>
              <span className="mx-3">•</span>
            </span>
            </Link>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
