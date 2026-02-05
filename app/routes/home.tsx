import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "constants/index";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Analyser" },
    { name: "AI Resume Analyser", content: "An AI that works for you, not the Recruiter" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar/>

    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Track Your Applications and Resume Ratings</h1>
        <h2>Get AI-powered feedback on your Resumes</h2>
      </div>

    {resumes.length > 0 && (
      <div className="resumes-section">
        {resumes.map((resume:Resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
      </div>
    )}
  </section>
  </main>;
}
