# 🚀 PixGen — Generated AI Images

![PixGen Hero](https://i.pinimg.com/1200x/8a/fe/83/8afe83b98f339de4c1dd34fde26a86d0.jpg)

## ✨ Project Overview

PixGen is a modern AI-powered image gallery built with Next.js and Tailwind CSS. Users can explore high-quality AI-generated art, browse photo categories, view image details, and sign in using Better Auth.

## 🌟 Key Features

- Responsive landing page with a hero banner and action buttons
- Top generated image gallery with cards showing likes, downloads, and categories
- Full photo collection page with category filtering and detailed views
- Image detail page with prompt, resolution, creation date, and tags
- Authentication with Better Auth email/password and Google sign-in
- Profile page with avatar display and profile update support
- Mobile-friendly navigation and clean modern UI

## 📁 Available Pages

- `/` — Home page with hero banner and top generated images
- `/all-photos` — Browse the full AI photo collection
- `/all-photos/[id]` — Detailed view for each generated image
- `/profile` — User profile page with avatar and user details
- `/signin` — Sign in page for returning users
- `/singup` — Sign up page for new users

## 🧰 Technologies Used

- Next.js 16.2.4
- React 19.2.4
- Tailwind CSS 4
- Better Auth
- HeroUI (`@heroui/react`, `@heroui/styles`)
- MongoDB
- React Icons
- React Toastify

## 🛠️ Setup Instructions

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with your credentials:
   ```env
   MONGODB_URL=your_mongodb_connection_string
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   BETTER_AUTH_URL=https://your-better-auth-url
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open the app at `http://localhost:3000`

## 🚀 Live Demo

https://generated-ai-images.vercel.app

## 💡 Notes

This project is designed to showcase AI-generated visuals with real authentication and responsive design. The app uses Better Auth for secure user sessions and offers a polished browsing experience across devices.
