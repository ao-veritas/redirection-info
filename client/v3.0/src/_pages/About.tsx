// import { BackgroundBeams } from "../components/ui/background-beams";
import { brandDarkBg } from "../_utils/colors";
import { Footer, Navbar, TeamCard } from "../components";
import TeamView from "../components/AboutPage/TeamView";
import TimelineView from "../components/AboutPage/TimelineView";

export default function About() {
  return (
    <>
      <Navbar />
      <main
        className={`${brandDarkBg} flex flex-col items-center md:justify-start justify-between text-[#f1f1f1] pt-[120px] min-h-[93vh]`}
      >
        <TimelineView />
        <TeamView />
      </main>
      <div className="z-30">
        <Footer />{" "}
      </div>
      {/* <BackgroundBeams />{" "} */}
    </>
  );
}
