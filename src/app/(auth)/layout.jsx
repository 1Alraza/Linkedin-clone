// app/layout.tsx
import { cookies } from 'next/headers';
import '../globals.css';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Sign up | LinkedIn',
  description: 'Join LinkedIn today for free',
};


export default async function RootLayout({ children }) {
    const cookieStore = await cookies();
  const user = cookieStore.get("user_id");
  // console.log(cookieStore.get("user_id"))


  if (user) redirect('/');

  return (
    <html lang="en">
      <body className="bg-gray-100  flex items-center justify-center min-h-screen">
        {children}
      </body>
    </html>
  );
}