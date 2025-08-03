'use client';

import { useState, useEffect } from 'react';

export default function News() {
  const [news, setNews] = useState([]);
  const [articleNum, setArticleNum] = useState(3);

  useEffect(() => {
    fetch(`https://saurav.tech/NewsAPI/top-headlines/category/business/us.json`)
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);

  return (
    <div className="bg-[#f8fafc] border border-slate-300 rounded-xl p-4 shadow-sm space-y-4">
      <h4 className="font-semibold text-lg text-slate-800 border-b pb-2 border-slate-200">
        Trending in Business
      </h4>

      {news.slice(0, articleNum).map((article) => (
        <a href={article.url} target="_blank" rel="noopener noreferrer" key={article.url}>
          <div className="flex items-start gap-4 hover:bg-slate-100 rounded-md p-2 transition duration-200">
            <div className="space-y-1 flex-1">
              <h6 className="text-sm font-medium leading-snug text-slate-700 line-clamp-2">
                {article.title}
              </h6>
              <p className="text-xs text-slate-500">{article.source.name}</p>
            </div>
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt="news"
                width={70}
                className="rounded-md object-cover max-h-[70px] min-w-[70px]"
              />
            )}
          </div>
        </a>
      ))}

      <button
        onClick={() => setArticleNum(articleNum + 3)}
        className="text-[#1e3a8a] hover:underline text-sm font-medium"
      >
        Load more
      </button>
    </div>
  );
}
