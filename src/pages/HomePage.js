import { Container } from "@chakra-ui/react";
import ScrollUpButton from "../components/ScrollUpButton";
import CertificateSection from "../sections/CertificateSection";
import ContactmeSection from "../sections/ContactmeSection";
import EducationSection from "../sections/EducationSection";
import HomeSection from "../sections/HomeSection";
import ProjectsSection from "../sections/ProjectsSection";
import SkillsSection from "../sections/SkillsSection";

export default function HomePage() {
  return (
    <Container className="name" maxW="1400px">
      <HomeSection></HomeSection>
      <ProjectsSection></ProjectsSection>
      <EducationSection></EducationSection>
      <SkillsSection></SkillsSection>
      <CertificateSection></CertificateSection>
      <ContactmeSection></ContactmeSection>
      <ScrollUpButton></ScrollUpButton>
    </Container>
  );
}
