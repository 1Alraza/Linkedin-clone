This is a mini LinkedIn-like social platform built as part of an internship assignment for *CIAAN Cyber Tech Pvt Ltd*. It allows users to register, log in, post content, comment, like, and view other users' profiles. Built with modern full-stack technologies.

## 🔗 Live Demo

👉 [Sign up | LinkedIn](https://linked-in-psi-ten.vercel.app/sign-in)  

---

## 🚀 Stack Used

### Frontend:
- *Next.js 14 (App Router)*
- *Tailwind CSS* for UI
- *ShadCN/UI* components

### Backend:
- *Node.js* with *Next.js API Routes*
- *Prisma ORM* for database interaction

### Database:
- *PostgreSQL* (hosted on Neon)

### Auth:
- *JWT & Cookies* (Custom authentication system)

---

## ⚙️ Features

- ✅ *User Authentication* (Register/Login using Email & Password)
- ✅ *User Profile* with name, email, and bio
- ✅ *Public Post Feed* with timestamp and author's name
- ✅ *Create, Read, Like* posts
- ✅ *Comment on posts*, and like comments
- ✅ *Search* users or posts using the search input
- ✅ *Profile Page* with user's posts (click avatar to view)
- ✅ *Responsive UI* for all devices

---

## 🧑‍💻 How to Run Locally

1. *Clone the repository*

```bash
git clone https://github.com/Rehaan-shaikh/LinkedIn.git
cd LinkedIn
Install Dependencies


npm install
Set Up Environment Variables
Create a .env file in the root directory and add:

CLOUDINARY_CLOUD_NAME=xyz
CLOUDINARY_API_KEY=xyz
CLOUDINARY_API_SECRET=xyz
DATABASE_URL="xyz"

Push Prisma Schema

npx prisma db push
Run the Development Server

npm run dev
App will be live at: http://localhost:3000

Frontend:

You can create a new account from the Live Demo using any email and password.

---

🧩 Bonus Features

- 🖼️ Click avatar to view profile  
- 💬 Click a post to view all comments  
- ❤️ Like/unlike posts delete and comments 
- Can update and manage account from leftside bar
- 🔍 Search by typing and pressing Enter or clicking the search icon