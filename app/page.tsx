import { AboutMe } from "@/components/AboutMe";
import { GetInTouch } from "@/components/GetInTouch";
import Header from "@/components/Header";
import { MoreProjects } from "@/components/MoreProjects";
import { MyName } from "@/components/MyName";
import Projects from "@/components/Projects";
import { SocialMedia } from "@/components/SocialMedia";
import { WhereIHaveWorked } from "@/components/WhereIHaveWorked";

export default async function Page() {
  return (
    <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full">
      <Header />
      <MyName />
      <AboutMe />
      <WhereIHaveWorked />
      <Projects />
      <MoreProjects />
      <GetInTouch />
      <SocialMedia />
    </div>
  );
}
