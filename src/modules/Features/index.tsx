import { Sorms } from "./Sorms";
import { Projects } from "./Projects";
import { Workstream } from "./Workstreams";

export default function Features() {
  return (
    <div className="h-full my-8">
      <Sorms />
      <Projects />
      {/* <Workstream /> */}
    </div>
  );
}
