import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <main className="main-page">
      <h1 className="text-danger">Homepage</h1>
      <Link href="/blog">Go To Blogpage</Link>
      <Header />
    </main>
  );
}
