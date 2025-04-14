import healthcareImage from "../assets/images/ResearchAreaImages/Healthcare_area.png";
import sideChannelImage from "../assets/images/ResearchAreaImages/Side_channel.png";
import autonomousImage from "../assets/images/ResearchAreaImages/autonomous_system_area.png";
import iotImage from "../assets/images/ResearchAreaImages/iot.png";
import criticalInfraImage from "../assets/images/ResearchAreaImages/critical_infrastructures.png";

const researchAreasData = {
  "healthcare-security-privacy": {
    name: "Healthcare Security & Privacy",
    description:
      "Our work reveals identifying vulnerabilities that adversaries could exploit to remotely manipulate critical health equipment. By enhancing device resilience we contribute to patients' well-being, and safe clinical protocols.",
    images: [healthcareImage],
  },
  "oversensing-side-channels": {
    name: "Oversensing & Side Channels",
    description:
      "Sensors, ubiquitous in mobile devices, IOT networks, and smart homes, often perceive more than their intended purpose. We investigate oversensing phenomena and unintended information leakage to prevent unauthorized access and data compromise.",
    images: [sideChannelImage],
  },
  "autonomous-systems-security": {
    name: "Autonomous Systems Security",
    description:
      "An autonomous systems become pervasive in our lives, we develop methodologies to protect self-driving cars, drones, and space systems from malicious attacks which use light, sound, and electromagnetic interference to disrupt perception.",
    images: [autonomousImage],
  },
  "iot-security-privacy": {
    name: "IoT Security & Privacy",
    description: "Need Description here",
    images: [iotImage],
  },
  "critical-infrastructure-security": {
    name: "Critical Infrastructure Security",
    description:
      "The backbone of modern society relies on critical infrastructures such as power grids, cloud infrastructures, and underwater communication systems. We analyze software and hardware vulnerabilities to ensure resilience against cyberattacks and safeguard public welfare.",
    images: [criticalInfraImage],
  },
};

export default researchAreasData;
