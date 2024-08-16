import { AboutMe } from "@/components/AboutMe";
import { GetInTouch } from "@/components/GetInTouch";
import Header from "@/components/Header";
import { MyName } from "@/components/MyName";
import Projects from "@/components/Projects";
import { SocialMedia } from "@/components/SocialMedia";
import { WhereIHaveWorked } from "@/components/WhereIHaveWorked";

export default async function Page() {
  return (
    <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full">
      <Header />
      <MyName />
      <SocialMedia />
      <AboutMe />
      {/* <WhereIHaveWorked /> */}
      <Projects />
      <GetInTouch />
    </div>
  );
}
