import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <main className="">
        <h1>Routing</h1>
        <Link href="/about">About</Link>
        <Link href="/login">Go to Login Page</Link>

      </main>
    </>
  );
}
