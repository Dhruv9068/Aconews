import React from 'react';
import 'animate.css'; // Import animate.css for animations

const AboutUs = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section with Background Video */}
      <section className="relative h-screen">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src="/HeroVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative flex flex-col items-center justify-center h-full text-center p-6 bg-gradient-to-t from-black via-transparent to-transparent">
          <div className="max-w-4xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
            <h1 className="text-6xl font-bold mb-4 animate__animated animate__bounceIn" style={{ color: '#0E69FF' }}>Welcome to AcoNews</h1>
            <p className="text-lg mb-6 animate__animated animate__fadeIn animate__delay-2s" style={{ color: '#000000' }}>Transforming how you get your news—moving from traditional newspapers to a modern web experience with the latest updates at your fingertips.</p>
            
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 md:pr-8 animate__animated animate__fadeIn animate__delay-1s">
          <img src="https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?cs=srgb&dl=pexels-brotin-biswas-158640-518543.jpg&fm=jpg" alt="News Transformation" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 animate__animated animate__fadeIn animate__delay-2s">
          <h2 className="text-3xl font-semibold mb-4" style={{ color: '#0E69FF' }}>Our Mission</h2>
          <p className="text-lg">At AcoNews, we aim to revolutionize the way news is consumed by transitioning from traditional newspapers to an innovative online platform. We provide up-to-date news coverage and insightful reports, ensuring our readers are always informed and engaged with the latest happenings around the world.</p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-6 bg-gray-100 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 md:pr-8 animate__animated animate__fadeIn animate__delay-1s">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkXQc3BtUJ27RfIdICYC7M2oWCObeXlAXGGA&s" alt="Our Vision" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 animate__animated animate__fadeIn animate__delay-2s">
          <h2 className="text-3xl font-semibold mb-4" style={{ color: '#0E69FF' }}>Our Vision</h2>
          <p className="text-lg">Our vision is to be the leading news platform known for its credibility and in-depth analysis. We strive to set the benchmark for excellence in news delivery, ensuring that our readers receive accurate and timely information in a user-friendly format.</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8 animate__animated animate__fadeIn animate__delay-1s" style={{ color: '#0E69FF' }}>Why Choose AcoNews?</h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside text-lg space-y-4 animate__animated animate__fadeIn animate__delay-2s">
          <li>Up-to-date news coverage from around the world</li>
          <li>Expert analysis and insights to keep you informed</li>
          <li>Engaging and user-friendly interface for a better experience</li>
        </ul>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8 animate__animated animate__fadeIn animate__delay-1s" style={{ color: '#0E69FF' }}>How It Works</h2>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-between animate__animated animate__fadeIn animate__delay-2s">
          <div className="w-full md:w-1/3 p-4 text-center">
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#0E69FF' }}>Step 1: Select Your Country</h3>
            <p className="text-lg">Choose your country to get news tailored to your location. We provide localized news for a more relevant experience.</p>
          </div>
          <div className="w-full md:w-1/3 p-4 text-center">
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#0E69FF' }}>Step 2: Select Type of News</h3>
            <p className="text-lg">Filter news by categories such as Politics, Sports, Entertainment, and more to get the updates you care about.</p>
          </div>
          <div className="w-full md:w-1/3 p-4 text-center">
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#0E69FF' }}>Step 3: View Latest News</h3>
            <p className="text-lg">Stay updated with the latest headlines and breaking news from your selected country and category. Get the most current news at your fingertips.</p>
          </div>
        </div>
      </section>

      {/* New Section */}
      <section className="py-16 px-6 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 animate__animated animate__fadeIn animate__delay-1s">
          <h2 className="text-3xl font-semibold mb-4" style={{ color: '#0E69FF' }}>Get Involved</h2>
          <p className="text-lg">Join us in shaping the future of news. Whether you're a reader looking for the latest updates or someone interested in contributing, we welcome your engagement and support.</p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center animate__animated animate__fadeIn animate__delay-2s">
          <img src="https://reputationtoday.in/wp-content/uploads/2020/04/4d8dd-students-in-community.001.png" alt="Community Involvement" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
};

export default AboutUs;
