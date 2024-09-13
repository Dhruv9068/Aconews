import React from 'react';

const News = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 hover:rotate-2 transition duration-500 ease-in-out relative hover:shadow-2xl"
          style={{
            transformStyle: 'preserve-3d',
            perspective: '1000px',
          }}
        >
          {/* Image */}
          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-40 object-cover mb-4 rounded-lg"
              style={{
                transform: 'translateZ(50px)', // Creates a 3D pop effect
              }}
            />
          )}

          {/* Title */}
          <h2 className="text-xl font-semibold mb-2 animate-fadeIn">
            {article.title}
          </h2>

          {/* Description */}
          <p className="text-gray-700 animate-fadeIn">
            {article.description?.substring(0, 100)}...
          </p>

          {/* Link to full article */}
          <a
  href={article.url}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-[#0E69FF] text-white py-2 px-4 rounded-lg inline-block transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-[#005BB5] hover:text-white"
>
  Read more
</a>

        </div>
      ))}
    </div>
  );
};

export default News;
