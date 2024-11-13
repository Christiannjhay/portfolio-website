import InfosoftExperience from "./InfosoftExperience";
import KonsciousExperience from "./KonsciousExperience";
import SysdevExperience from "./SysdevExperience";

export default function ExperienceCard() {
  return (
    <div className="w-full flex flex-col gap-5">
      <KonsciousExperience />
      <InfosoftExperience />
      <SysdevExperience />
    </div>
  );
}
