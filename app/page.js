import Image from "next/image";
import { Inter } from 'next/font/google';
import Component from "@/components/Component";

const inter = Inter({
  subsets: ['latin'], 
  weight: ['400', '700', '800'], 
  variable: '--font-inter', 
});

export default function Home() {
  return (
    <main >
      <Component></Component>
    </main>
  );
}
