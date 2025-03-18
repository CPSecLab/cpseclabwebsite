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
      "Sara Rampazzi, Ph.D., is an assistant professor at the University of Florida since 2021. She is a member of the Florida Institute for Cybersecurity Research (FICS), Warren B. Nelms Institute, and Florida Institute for National Security (FINS). Several media outlets covered her works on injecting inaudible and invisible light commands into smart home devices and protecting underwater datacenters from acoustic attacks. She is currently Associate Chair of IEEE Security & Privacy 2025 and 2026, and Program Co-Chair of the USENIX VehicleSec Symposium 2025. She also chaired the 2023 IEEE Workshop on Offensive Technologies (WOOT’23) and the 2nd Annual Embedded Security Workshop (EmSec 2020). Dr. Rampazzi received the Medtronic Outstanding Research Contributor Recognition for medical device security in 2020. Her work is sponsored by NSF, ONR, Meta, and Toyota Info Tech Lab. More info: https://scholar.google.com/citations?user=I9d0CrAAAAAJ&hl=eng",
    socials: {
      email: "",
      website: "",
      googleScholar:
        "https://scholar.google.com/citations?user=I9d0CrAAAAAJ&hl=eng",
      linkedin: "",
      github: "",
    },
    researchInterests: [],
    papers: [],
    awards: [],
    hierarchy: 1,
  },

  //Research Assistant ( Hierarchy : 2)
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
      " Weidong is a Ph.D. candidate under supervision of Dr. Kevin Butler and Dr. Sara Rampazzi at the University of Florida. He got his B.S. degree from Huazhong University of Science and Technology and M.S. degree from Xiamen University. His research focus is system security and cyber physical security related with I/O stack. His hobbies include basketball, swimming, watching movie and traveling.",
    socials: {
      email: "weidong.zhu@ufl.edu",
      website: "https://cise.ufl.edu/~weidong/",
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
      "Carson is currently pursuing his Ph.D. under the supervision of Dr. Kevin Butler and Dr. Sara Rampazzi at the University of Florida. He earned his bachelor’s degree in physics from William & Mary in Williamsburg, Virginia. His current projects include signal analysis for Electromagnetic control-flow attestation. His hobbies include watching movies, reading, and cooking.",
    socials: {
      email: "carson.stillman@ufl.edu",
      website: "https://carsonstillman.github.io/carson_stillman/",
      googleScholar: "",
      linkedin: "",
      github: "",
    },
    researchInterests: ["Embedded Systems Security"],
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
    university: "Keio University",
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
