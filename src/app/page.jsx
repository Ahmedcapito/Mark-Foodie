'use client'
import Hero from "@/Components/Hero/page";
import Search from "@/Components/Search/page";
import Title from "@/Components/Title/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
    <Hero/>
    <Title/>
    <Search/>
    <Contact/>
    </>
  );
}
