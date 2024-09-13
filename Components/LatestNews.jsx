import React, { useState, useEffect, useCallback } from 'react';
import News from './News'; // Import your News component
import Hero from './Hero';
import 'animate.css'; // Ensure animate.css is imported
import debounce from 'lodash/debounce'; // Correct import

const LatestNews = ({ country }) => { // Accept country as a prop
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [newsType, setNewsType] = useState('general');
  const [searchQuery, setSearchQuery] = useState(''); // Track the search query
  const [loading, setLoading] = useState(false); // Track the loading state
  const apiKey = '2d5a1c553c1dcf53326febda926bef16'; // Updated API key

  const newsTypes = ['general', 'sports', 'gaming', 'health', 'science', 'business', 'technology', 'entertainment'];

  // Fetch news based on category, search, or country
  const fetchNews = async (query, category, country) => {
    try {
      setLoading(true); // Start loading
      setError(null); // Reset any previous error

      let url;
      if (query) {
        url = `https://gnews.io/api/v4/search?q=${query}&lang=en&country=${country}&apikey=${apiKey}`;
      } else {
        url = `https://gnews.io/api/v4/top-headlines?category=${category}&country=${country}&apikey=${apiKey}`;
      }

      const response = await fetch(url);
      if (!response.ok) throw new Error('Error fetching news');

      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Debounce the search query to prevent multiple API calls while typing
  const debouncedSearch = useCallback(debounce((query) => {
    if (query) {
      fetchNews(query, newsType, country); // Fetch news based on the search query
    }
  }, 500), [newsType, country]);

  // Effect for category and country change
  useEffect(() => {
    if (!searchQuery) {
      fetchNews(null, newsType, country); // Fetch news for the selected category and country if no search query
    }
  }, [newsType, searchQuery, country]);

  // Handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query); // Update search query state
    debouncedSearch(query); // Debounced search call
  };

  return (
    <>
      <Hero />
      <div className="p-4 flex flex-col items-center">
        {error && <p className="text-red-500">Error: {error}</p>}
        <div className="flex flex-col md:flex-row justify-center items-center mb-6 space-y-4 md:space-y-0 md:space-x-6">
          {/* Search Input */}
          <div>
            <label htmlFor="searchInput" className="block text-lg font-medium text-gray-700 mb-2">Search News:</label>
            <input
              id="searchInput"
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-64 mt-1 border border-gray-300 rounded-md shadow-sm p-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Search for news..."
            />
          </div>

          {/* News Type Selector */}
          <div>
            <label htmlFor="newsType" className="block text-lg font-medium text-gray-700 mb-2">Select News Type:</label>
            <select
              id="newsType"
              value={newsType}
              onChange={(e) => setNewsType(e.target.value)}
              className="w-64 mt-1 border border-gray-300 rounded-md shadow-sm p-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:border-blue-500 focus:border-blue-500 focus:ring focus:ring-blue-200"
            >
              {newsTypes.map((type) => (
                <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Loading Indicator */}
        {loading && <p>Loading news...</p>}

        {/* Display Articles */}
        {!loading && articles.length > 0 ? (
          <News articles={articles} />
        ) : (
          !loading && <p>No articles found. Try searching for something else or select a different category.</p>
        )}
      </div>
    </>
  );
};

export default LatestNews;
