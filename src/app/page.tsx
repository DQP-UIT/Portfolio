import Image from "next/image";
import Header from "@/components/Header";
import HomePage from "@/components/Home";
import About from "@/components/About";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div
      className="grid grid-rows-[100px_1fr_100px] min-h-screen p-8 pb-20 gap-16 sm:pl-20 sm:pr-20 font-[family-name:var(--font-geist-sans)]"
      data-theme="synthwave"
    >
      <header className="flex flex-wrap row-start-1 w-full">
        <Header />
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <HomePage />
        <About />
        <Project />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
