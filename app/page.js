import QuoteSlider from "./components/QuoteSlider.jsx"
import About from "./components/About";
import ProjectGrid from "./components/ProjectGrid";
import ProjectList from "./components/ProjectsList";

export default function Home() {
  return (
    <main>
      <QuoteSlider />
      <About />
      <ProjectGrid />
      <ProjectList />
    </main>
  );
}
