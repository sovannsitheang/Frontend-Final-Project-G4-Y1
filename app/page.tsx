import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import FeaturedCourses from "@/components/home/featured-courses";
import AboutSection from "@/components/home/about-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedCourses />
      <AboutSection />
    </>
  );
}