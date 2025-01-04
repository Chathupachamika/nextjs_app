import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <h1>Home Page</h1>
    <ul>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/services">Services</Link></li>
    <li><Link href="/products">Product</Link></li>
    <li><Link href="/about">About</Link></li>
    <li><Link href="/contact">Contact Us</Link></li>
    <li><Link href="/about/branches">Branches</Link></li>
    <li><Link href="/products/vegis">Vegie Page</Link></li>
    </ul>
    <Link href="https://nextjs.org/docs" target='_blank'>NextJS Site</Link>
    </>
  );
}
