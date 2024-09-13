

# AcoNews

Welcome to AcoNews, a modern and responsive news application that fetches the latest headlines from around the world using the [GNews API](https://gnews.io/). This project demonstrates how to build a news app with React, integrate with a news API, and deploy it using Firebase Hosting.

![AcoNews Logo]([https://via.placeholder.com/200x54.png?text=AcoNews](https://www.canva.com/design/DAGQkvrncsM/QcQTwwZd-oiEJshvrAeyCQ/view?utm_content=DAGQkvrncsM&utm_campaign=designshare&utm_medium=link&utm_source=editor)) <!-- Replace with your actual logo image URL -->

## Features

- **Fetch Latest News**: Get up-to-date news articles from various sources.
- **Responsive Design**: Works seamlessly across mobile, tablet, and desktop devices.
- **Search and Filter**: Easily search for news and filter by country.
- **Modern UI**: Clean, user-friendly interface with animations and transitions.

## Getting Started

To get a local copy of the project up and running on your machine, follow these instructions:

### Prerequisites

- Node.js and npm installed on your local machine.
- Firebase CLI installed. You can install it using `npm install -g firebase-tools`.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/aconews.git
   cd aconews
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` File**

   In the root of your project, create a file named `.env` and add your GNews API key:

   ```
   REACT_APP_GNEWS_API_KEY=your-gnews-api-key
   ```

4. **Run the Development Server**

   ```bash
   npm start
   ```

   This will start the development server at `http://localhost:3000`.

### Build for Production

To build the project for production:

```bash
npm run build
```

The output will be in the `dist` directory.

### Deploy to Firebase

1. **Initialize Firebase**

   ```bash
   firebase init
   ```

   Follow the prompts to set up Firebase Hosting, selecting your existing project and specifying `dist` as your public directory.

2. **Deploy**

   ```bash
   firebase deploy
   ```

   This will deploy your app to Firebase Hosting. You’ll get a URL where your app is hosted.

## Usage

- **Homepage**: Displays the latest news headlines.
- **Search**: Use the search bar to find specific news articles.
- **Country Selector**: Filter news based on different countries.

## Contributing

If you’d like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [GNews API](https://gnews.io/) for providing the news data.
- [React](https://reactjs.org/) for building the UI.
- [Firebase](https://firebase.google.com/) for hosting the application.

