import Header from "@/components/Header";
import HomePage from "@/components/Home";
import About from "@/components/About";
import Project from "@/components/Project";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div
      className="grid grid-rows-[100px_1fr_100px] min-h-screen p-8 pb-20 gap-16 sm:pl-20 sm:pr-20 font-[family-name:var(--font-geist-sans)]"
      data-theme="synthwave"
    >
      <header className="flex flex-wrap row-start-1 w-full sticky top-0 z-50 bg-base-100/80 backdrop-blur-sm">
        <Header />
      </header>
      <main className="flex flex-col gap-[80px] row-start-2 items-center sm:items-center">
        <section id="home" className="w-full min-h-screen pt-20 -mt-20">
          <HomePage />
        </section>

        <section
          id="about"
          className="w-full min-h-screen flex flex-wrap justify-center pt-20 -mt-20"
        >
          <About />
        </section>

        <section
          id="project"
          className="w-full min-h-screen flex flex-wrap justify-center pt-20 -mt-20"
        >
          <Project />
        </section>

        <section id="contact" className="w-full min-h-screen pt-20 -mt-20">
          <Contact />
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>© 2025 - Created with ❤️ by Quang Phuoc</p>
      </footer>
    </div>
  );
}
