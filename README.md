# Twitter Clone

This is a Twitter clone application designed to replicate the core functionality of Twitter. The application includes features such as posting tweets, user authentication, and following other users. It's built using modern web technologies to provide a seamless and responsive user experience.

## Features

- User authentication (signup, login, logout)
- Post tweets with text and optional media
- Follow and unfollow other users
- View a feed of tweets from users you follow
- Real-time updates for new tweets
- Profile pages with user details and their tweets

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Real-time**: Socket.io
- **Cloud Storage**: Cloudinary (for media uploads)

## Installation and Setup

Follow these steps to set up the project on your local machine:

### Prerequisites

Make sure you have the following installed:

- Node.js (v14 or above)
- npm or yarn
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/your-username/twitter-clone.git
cd twitter-clone
```

### Install Dependencies

#### Frontend

Navigate to the frontend folder and install dependencies:

```bash
cd frontend
npm install
```

#### Backend

Navigate to the backend folder and install dependencies:

```bash
cd backend
npm install
```

### Set Up Environment Variables

Create a `.env` file in the backend folder with the following:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Start the Application

#### Start the Backend Server

```bash
npm run dev
```

#### Start the Frontend Server

```bash
cd frontend
npm run dev
```

### Access the Application

Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Screenshots

Here are some screenshots of the application:

### Homepage
![Homepage Screenshot](relative/path/to/homepage-screenshot.png)

### User Profile
![Profile Screenshot](relative/path/to/profile-screenshot.png)

## Deployed Application

Check out the live application at: [Twitter Clone Live](https://your-deployed-app-link.com)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your commit message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact

For questions or feedback, feel free to reach out:

- **Name**: Aditi Baghel
- **Email**: [aditibaghel2k323@gmail.com]
- **GitHub**: [https://github.com/aditi644]

## Acknowledgments

Special thanks to the open-source libraries and tools that made this project possible.

---

> 💡 **Tip:** Regularly commit your changes and push them to the repository to keep your work backed up and share progress with your team.
