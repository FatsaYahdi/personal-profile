import About from "@/components/about";
import Certificate from "@/components/certificate";
import Education from "@/components/education";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Nav from "@/components/nav";
import Portfolio from "@/components/portfolio";
import Skills from "@/components/skills";
import WorkExperience from "@/components/work-experience";

export default function Home() {
  return (
    <>
      <main className="hidden md:block overflow-hidden">
        <Nav />
        <Header />
        <About />
        <Education />
        <WorkExperience />
        <Skills />
        <Portfolio />
        <Certificate />
        <Footer />
      </main>
      <main className="md:hidden">
        gd
      </main>
    </>
  );
}
