import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import GitHubProjects from "@/app/components/GitHubProjects";
import MainSections from "@/app/components/MainSections";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <GitHubProjects />
      <MainSections />
    </main>
  );
}