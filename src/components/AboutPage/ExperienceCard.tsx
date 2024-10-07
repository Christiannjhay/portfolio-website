import InfosoftExperience from "./InfosoftExperience";
import SysdevExperience from "./SysdevExperience";

export default function ExperienceCard() {
  return (
    <div className="w-full flex flex-col gap-5">
      <InfosoftExperience />
      <SysdevExperience />
    </div>
  );
}
