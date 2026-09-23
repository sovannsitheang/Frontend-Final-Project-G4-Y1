import Hero from "@/components/home/hero";
import TrustedStrip from "@/components/home/trusted-strip";
import Stats from "@/components/home/stats";
import FeaturedCourses from "@/components/home/featured-courses";
import AboutSection from "@/components/home/about-section";
import { getCourseSubjects } from "@/lib/api/courses";

export default async function Home() {
  const suggestions = await getCourseSubjects();

  return (
    <>
      <Hero suggestions={suggestions} />
      <TrustedStrip />
      <Stats />
      <FeaturedCourses />
      <AboutSection />
    </>
  );
}