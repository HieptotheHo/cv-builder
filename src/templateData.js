import { v4 as uuidv4 } from "uuid";

const templateEducation = [
  {
    id: "1",
    name: "International University – Vietnam National University, Ho Chi Minh city",
    time: "Sep 2020 - Present",
    description: "Bachelor's degree in Computer Science - GPA: 3.7/4.0",
    details: [
      {
        id: uuidv4(),
        content:
          "Ranked top 2% out of 300 students to receive Full-ride Scholarship for outstanding performance in the University Entrance Examination (Dean’s List).",
      },
      {
        id: uuidv4(),
        content:
          "Placed in top 5 out of 300 peer students for excellent academic achievement for 6 consecutive semesters.",
      },
    ],
  },
];

const templateExperience = [
  {
    id: uuidv4(),
    name: "International University – Vietnam National University, Ho Chi Minh city",
    time: "Jan 2023 – Aug 2023",
    description: "Peer-assisted Tutor – Principles of Database Management",
    details: [
      {
        id: uuidv4(),
        content:
          "Assisted 120 students with any problems related to theory or laboratory assignments.",
      },
      {
        id: uuidv4(),
        content:
          "Prepared revision materials and conducted live lectures before examinations.",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "International Univers1ty – Vietnam National University, Ho Chi Minh city",
    time: "Sep 2021 - Jan 2022",
    description: "Bachelor's degree in Computer Science",
    details: [
      {
        id: uuidv4(),
        content:
          "Helped students enhance learning outcomes and improved their grades from 63 (midterm) to 79 (final) on average.",
      },
    ],
  },
];

const templatePersonalInfo = {
  firstName: "Hiep",
  lastName: "Ho",
  email: "hiepho@bigcorp.eu",
  phone: "555 555 555",
  place: "Ho Chi Minh, Vietnam",
  others: [
    { id: 1, detail: "github.com/HieptotheHo" },
    { id: 2, detail: "@hiep.ho28" },
  ],
};

const templateProjects = [
  {
    id: uuidv4(),
    name: "How Can We Measure Happiness?",
    time: "Sep 2023 – Dec 2023",
    description: "JavaScript, HTML/CSS, D3JS, Python, Streamlit",
    details: [
      {
        id: uuidv4(),
        content:
          "Guided a team of four developers in creating a dashboard that visually represents collected data.",
      },
      {
        id: uuidv4(),
        content:
          "Designed profound narrative focused on the global happiness index of each country.",
      },
      {
        id: uuidv4(),
        content:
          "Developed interactive GeoMaps and Scatter Plots with numerous features to enhance visualization.",
      },
      {
        id: uuidv4(),
        content:
          "Achieved a remarkable score of 95 out of 100 in the overall assessment, standing out among the 60 students for outstanding storytelling and technical proficiency.",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Family Doctor AI",
    time: "In Progress",
    description: "Python, Streamlit, HuggingFace",
    details: [
      {
        id: uuidv4(),
        content:
          "Assisting fellow data science students in constructing an AI-based platform featuring a chatbot for automated responses and a search function, enabling seamless interaction and efficient information retrieval.",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "MinesweepAR",
    time: "Feb 2023 – Apr 2023",
    description:
      "JavaScript, Meta Spark AR, Blender, Ableton, Adobe Premiere Pro",
    details: [
      {
        id: uuidv4(),
        content:
          "Led a team of three developers to create a Meta effect allowing users to play minesweeper with AR experience.",
      },
      {
        id: uuidv4(),
        content:
          "Designed highly interactive virtual environment with multiple 3D objects and embedded sound effects.",
      },
      {
        id: uuidv4(),
        content:
          "Optimized object spawning time by implementing dynamic instantiation and scripted algorithms.",
      },
      {
        id: uuidv4(),
        content:
          "Attracted 152 users on Facebook and Instagram coming from 5 different countries.",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Railway System Management",
    time: "Feb 2022 – Apr 2022",
    description: "Java, Microsoft SQL Server, Apache NetBeans IDE",
    details: [
      {
        id: uuidv4(),
        content:
          "Worked with three other peers to build a desktop application monitoring a railway database.",
      },
      {
        id: uuidv4(),
        content:
          "Designed user-friendly UIs allowed administrators to manipulate data and passengers to select multiple routes for booking.",
      },
      {
        id: uuidv4(),
        content:
          "Designed a database with the highest normalization form – BCNF.",
      },
      {
        id: uuidv4(),
        content: "Implemented multiple complicated data retrieval queries.",
      },
    ],
  },
];

export {
  templateEducation,
  templateExperience,
  templatePersonalInfo,
  templateProjects,
};
