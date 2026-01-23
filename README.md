# 🐉 Dragon News

A high-performance, responsive news portal built with the **MERN** stack (React focus) and **Firebase Authentication**. This project demonstrates advanced routing, secure user handling, and real-time UI updates.

🚀 **Live Link:** [Click Here](https://the-dragon-news-ed711.web.app/)

## 🛠️ Tech Stack

* **Frontend:** React.js (Vite)
* **Styling:** Tailwind CSS & DaisyUI
* **Routing:** React Router v7
* **Authentication:** Firebase Auth
* **Utilities:** `date-fns` (Date Formatting), `react-fast-marquee` (News Ticker)

## ✨ Key Features

* **Secure Authentication:** Complete Login/Registration system using Firebase.
* **Private Routes:** Protected news details pages that require authentication, featuring a custom **Loading Shield** to prevent UI flickering during auth-state synchronization.
* **Real-time News Ticker:** Dynamic news headlines using `react-marquee`.
* **Responsive Layout:** Fully optimized for Mobile, Tablet, and Desktop using Tailwind’s utility-first classes.
* **Profile Synchronization:** Automatic user profile updates (Name/Photo) immediately after registration.

## 🧠 Technical Highlights

- **State Management:** Implemented a robust `AuthContext` to manage global user states and loading logic.
- **Regex Validation:** Applied custom regex patterns for password security and form validation.
- **Performance:** Optimized image rendering using `object-cover` and handled async latency with dedicated loading states.

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI components (Navbar, Header, Marquee)
├── provider/       # Context API (AuthContext)
├── routes/         # Private & Public Route definitions
├── pages/          # Full page layouts (Home, News, Login, Register)
└── assets/         # Static images and icons
