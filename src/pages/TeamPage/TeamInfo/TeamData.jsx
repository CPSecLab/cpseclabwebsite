import directorImage from "./TeamImages/Dr_Sara_Rampazzi.jpg";
import hrushiImage from "./TeamImages/HrushikeshProfile.jpg";
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
    socials: {
      email: "",
      linkedin: "asasasasasas",
      github: null,
    },
    researchInterests: [],
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
      "Hrushikesh is currently pursuing his Ph.D. under Dr. Sara Rampazzi. He works on securing sensors and cyber-physical systems with a particular emphasis on autonomous systems. As part of his research, he uncovers and studies new vulnerabilities in sensors and perception systems used in autonomous vehicles and effective countermeasures against them using sensor characteristics, contextual information, and machine learning.",
    socials: {
      email: "bhupathirajus@ufl.edu",
      website: "https://hrushivb.github.io/hrush/",
      googleScholar:
        "https://scholar.google.com/citations?user=703SGbEAAAAJ&hl=en",
      linkedin: "",
      github: "",
    },
    researchInterests: [
      "Cyber-Physical system security",
      "Adversarial Machine Learning",
      "Autonomous Sytems",
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
    socials: {
      email: "jsheldon@ufl.edu",
      website: "",
      googleScholar: "",
      linkedin: "https://www.linkedin.com/in/jennifer-sheldon-01039a2ba/",
      github: "",
    },
    researchInterests: ["Cyber-Physical system security and signal injection"],
    papers: [],
    awards: [],
    hierarchy: 2,
  },
  {
    id: 4,
    name: "Weidong Zhu",
    designation: "Research Assistant",
    image: weidongImage,
    description:
      "Weidong is pursuing a Ph.D. under the supervision of Dr. Sara Rampazzi and Dr. Butler at the University of Florida. He got his B.S. degree from Huazhong University of Science and Technology and M.S. degree from Xiamen University. His current projects include combining Intel's Software Guard Extensions (SGX) and solid-state drives (SSD's) for defending against encryption ransomware and secure deletion with emerging non-volatile memory.",
    socials: {
      email: "weidong.zhu@ufl.edu",
      website: "",
      googleScholar: "",
      linkedin: "",
      github: "",
    },
    researchInterests: ["System Security", "Storage System"],
    papers: [],
    awards: [],
    hierarchy: 2,
  },
  {
    id: 5,
    name: "Carson Stillman",
    designation: "Research Assistant",
    image: carsonImage,
    description:
      "Carson is currently pursuing his Ph.D. under the supervision of Dr. Sara Rampazzi and Dr. Kevin Butler at the University of Florida. He earned his bachelor's degree from William & Mary in Williamsburg, Virginia. His current projects include signal analysis for Electromagnetic control-flow attestation.",
    socials: {
      email: "carson.stillman@ufl.edu",
      website: "",
      googleScholar: "",
      linkedin: "",
      github: "",
    },
    researchInterests: [
      "Embedded Systems Security",
      "Electromagnetic Side-Channels Analysis",
    ],
    papers: [],
    awards: [],
    hierarchy: 2,
  },

  // Masters Alumni (hierarchy: 3)
  {
    id: 6,
    name: "Bhatt Rishikesh",
    designation: "Alumni (Master's)",
    image: null,
    description: "",
    socials: {
      website: "",
      linkedin: "",
    },
    researchInterests: [],
    papers: [],
    awards: [],
    hierarchy: 3,
  },
  {
    id: 7,
    name: "Prateek Abbi",
    designation: "Alumni (Master's)",
    image: null,
    description: "",
    socials: {
      website: "",
      linkedin: "",
    },
    researchInterests: [],
    papers: [],
    awards: [],
    hierarchy: 3,
  },
  {
    id: 8,
    name: "Pranav Prafulla Puranik",
    designation: "Alumni (Master's)",
    image: null,
    description: "",
    socials: {
      website: "",
      linkedin: "",
    },
    researchInterests: [],
    papers: [],
    awards: [],
    hierarchy: 3,
  },
  {
    id: 9,
    name: "Saatvik Tripathy",
    designation: "Alumni (Master's)",
    image: null,
    description: "",
    socials: {
      website: "https://tripsat7.github.io/portfolio.io/",
      linkedin: "https://www.linkedin.com/in/saatvik-tripathy/",
    },
    researchInterests: [],
    papers: [],
    awards: [],
    hierarchy: 3,
  },

  // Undergraduate Alumni (hierarchy: 4)
  {
    id: 10,
    name: "Fai Thomas",
    designation: "Alumni (Undergraduate)",
    image: null,
    description: "",
    socials: {
      website: "",
      linkedin: "",
    },
    researchInterests: [],
    papers: [],
    awards: [],
    hierarchy: 4,
  },
  {
    id: 11,
    name: "Cesar Arguello",
    designation: "Alumni (Undergraduate)",
    image: null,
    description: "",
    socials: {
      website: "",
      linkedin: "",
    },
    researchInterests: [],
    papers: [],
    awards: [],
    hierarchy: 4,
  },
  {
    id: 12,
    name: "Vasileios Benos",
    designation: "Alumni (Undergraduate)",
    image: null,
    description: "",
    socials: {
      website: "",
      linkedin: "",
    },
    researchInterests: [],
    papers: [],
    awards: [],
    hierarchy: 4,
  },
  {
    id: 13,
    name: "Manuel Cordero",
    designation: "Alumni (Undergraduate)",
    image: null,
    description: "",
    socials: {
      website: "",
      linkedin: "",
    },
    researchInterests: [],
    papers: [],
    awards: [],
    hierarchy: 4,
  },

  // Visiting Student (hierarchy: 5)
  {
    id: 14,
    name: "Ozora Sako",
    designation: "Visiting Student",
    image: null,
    description: "",
    socials: {
      website: "",
      linkedin: "",
    },
    researchInterests: [],
    papers: [],
    awards: [],
    hierarchy: 5,
  },
];

export default teamData;
