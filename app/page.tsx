'use client'

import { AboutMe } from "@/components/AboutMe";
import Header from "@/components/Header";
import { MyName } from "@/components/MyName";
import { SocialMedia } from "@/components/SocialMedia";

export default async function Page() {
  return (
    <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full">
      <Header />
      <MyName />
      <SocialMedia />
      <AboutMe />
    </div>
  )
}
