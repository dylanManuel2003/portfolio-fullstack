import {
  Hero,
  About,
  Experience,
  Projects,
  Knowledge,
  Blogs,
  Contact,
} from "src/components/Sections";


export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Knowledge />
      <Blogs />
      <Contact />
    </main>
  );
}
