import directorImage from "./TeamImages/Dr_Sara_Rampazzi.jpg";
import hrushiImage from "./TeamImages/Hrushikesh.jpg";
import jenniferImage from "./TeamImages/Jennifer.jpeg";
import weidongImage from "./TeamImages/Weidong.jpg";
import carsonImage from "./TeamImages/Carson.jpg";

const teamData = [
  {
    id: 1,
    name: "Dr. Sara Rampazzi",
    designation: "Lab Director",
    image: directorImage,
    description:
      "Dr. Sara Rampazzi leads the CPSEC Lab, focusing on cyber-physical systems security and privacy.",
    linkedin: "",
    github: null,
    email: "",
    researchInterests: [
      "Cyber-Physical Systems Security",
      "Healthcare Security",
      "Autonomous Systems Security",
    ],
    papers: [
      {
        title:
          "Deep Note: Can Acoustic Interference Damage the Availability of Hard Disk Storage?",
        link: "https://www.hotsos.org/paper-link",
      },
    ],
    awards: ["SK Hynix Best Paper Award"],
    hierarchy: 1,
  },
  {
    id: 2,
    name: "Sri Hrushikesh Varma Bhupathiraju",
    designation: "Research Assistant",
    image: hrushiImage,
    description:
      "Hrushikesh is currently pursuing his Ph.D. under Dr. Sara Rampazzi. He works on securing sensors and cyber-physical systems as part of the Cyber-physical Systems Security (CPSec) Lab and the Florida Institute for Cybersecurity (FICS) Research. In particular, he studies the vulnerabilities in sensors used in autonomous systems. He then builds solutions to mitigate the consequences of these vulnerabilities on the safety of such systems. Aside from his research, he loves traveling, reading and listening to music.",
    linkedin: "justtrial.com",
    github: "",
    email: "bhupathirajus@ufl.edu",
    researchInterests: [
      "Cyber-Physical system security",
      "Adversarial Machine Learning",
      "Autonomous Systems",
      "Physical Sensor Attacks",
    ],
    papers: [],
    awards: [],
    hierarchy: 2,
  },
  {
    id: 3,
    name: "Jennifer Sheldon",
    designation: "Research Assistant",
    image: jenniferImage,
    description:
      "Jennifer Sheldon is currently pursuing her Ph.D. under the supervision of Dr. Sara Rampazzi. She graduated with a B.S. from the University of Florida in 2020.",
    linkedin: null,
    github: null,
    email: "jsheldon@ufl.edu",
    researchInterests: ["Cyber-Physical system security and signal injection"],
    papers: [],
    awards: [],
    hierarchy: 2,
  },
  {
    name: "Weidong Zhu",
    designation: "Research Assistant",
    image: weidongImage,
    description:
      "Weidong is pursuing Ph.D. under the supervision of Dr. Sara Rampazzi and Dr. Butler at the University of Florida. He got his B.S. degree from Huazhong University of Science and Technology and M.S. degree from Xiamen University. His current projects include combining Intel's Software Guard Extensions (SGX) and solid-state drives (SSD's) for defending against encryption ransomware and secure deletion with emerging non-volatile memory. His hobbies include basketball, swimming, watching movies, and traveling.",
    linkedin: null,
    github: null,
    email: "weidong.zhu@ufl.edu",
    researchInterests: ["System Security", "Storage System"],
    papers: [],
    awards: [],
    hierarchy: 2,
  },
  {
    id: 4,
    name: "Carson Stillman",
    designation: "Research Assistant",
    image: carsonImage,
    description:
      "Carson is currently pursuing his Ph.D. under the supervision of Dr. Sara Rampazzi and Dr. Kevin Butler at the University of Florida. He earned his bachelor's degree from William & Mary in Williamsburg, Virginia. His current projects include signal analysis for Electromagnetic control-flow attestation. His hobbies include watching movies, reading, cooking, and hiking.",
    linkedin: null,
    github: null,
    email: "carson.stillman@ufl.edu",
    researchInterests: [
      "Embedded Systems Security",
      "Electromagnetic Side-Channels Analysis",
    ],
    papers: [],
    awards: [],
    hierarchy: 2,
  },
];

export default teamData;
