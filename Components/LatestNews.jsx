import React, { useState, useEffect } from 'react';
import News from './News'; // Import News component
import Hero from './Hero';

const LatestNews = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [newsType, setNewsType] = useState('general'); // Default to 'general' news
  const [newsScope, setNewsScope] = useState('latest'); // Default to 'latest' news

  const newsTypes = ['general', 'sports', 'gaming', 'health', 'science', 'business', 'technology', 'entertainment'];

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let allArticles = [];

        if (newsScope === 'all') {
          for (const type of newsTypes) {
            try {
              const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=${type}&country=us&token=e1742ca6046199fb8aa2c64f3a3b3832`);
              if (!response.ok) {
                throw new Error(`Network response was not ok for ${type} news`);
              }
              const data = await response.json();
              allArticles = [...allArticles, ...data.articles];
            } catch (error) {
              console.error(`Failed to fetch ${type} news: ${error.message}`);
              // Optionally set error state or handle specific category failures here
            }

            // Adding a delay between requests
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        } else {
          const response = await fetch(`https://gnews.io/api/v4/top-headlines?category=${newsType}&country=us&token=e1742ca6046199fb8aa2c64f3a3b3832`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          allArticles = data.articles;
        }

        setArticles(allArticles);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchNews();
  }, [newsType, newsScope]); // Re-fetch news when type or scope changes

  return (
    <>
    <Hero />
    <div className="p-4">
      {/* Error Display */}
      {error && <p className="text-red-500">Error: {error}</p>}

      {/* News Type and News Scope Switches */}
      <div className="w-full mb-6 p-4 flex flex-col md:flex-row justify-center items-center animate-fadeIn">
        {/* News Type Dropdown */}
        <div className="mb-4 md:mb-0 md:mr-4">
          <label htmlFor="newsType" className="block text-lg font-medium text-gray-700">
            Select News Type:
          </label>
          <select
            id="newsType"
            value={newsType}
            onChange={(e) => setNewsType(e.target.value)}
            className="w-64 mt-1 border border-gray-300 rounded-md shadow-sm p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            disabled={newsScope === 'all'} // Disable type selection if scope is 'all'
          >
            {newsTypes.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Latest or All News Switch */}
        <div className="mb-4 md:mb-0">
          <label htmlFor="newsScope" className="block text-lg font-medium text-gray-700">
            Show:
          </label>
          <select
            id="newsScope"
            value={newsScope}
            onChange={(e) => setNewsScope(e.target.value)}
            className="w-64 mt-1 border border-gray-300 rounded-md shadow-sm p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            <option value="latest">Latest News</option>
            <option value="all">All News</option>
          </select>
        </div>
      </div>

      {/* News Display */}
      {articles.length > 0 ? (
        <News articles={articles} />
      ) : (
        <p>No articles available. Please select a news type or change the filters.</p>
      )}
    </div>
    </>
  );
};

export default LatestNews;
