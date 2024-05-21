import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import ResumeComponentForm from "./components/editors/ResumeComponentForm";
import ResumeComponent from "./components/resume-components/ResumeComponent";
import PersonalInfo from "./components/resume-components/PersonalInfo";
import {
  templateEducation,
  templateExperience,
  templatePersonalInfo,
  templateProjects,
} from "./templateData";
import PersonalInfoForm from "./components/editors/PersonalInfoForm";
function App() {
  //SAMPLE DATA
  const [personalInfos, setPersonalInfos] = useState(templatePersonalInfo);

  const [education, setEducation] = useState(templateEducation);

  const [experience, setExperience] = useState(templateExperience);

  const [projects, setProjects] = useState(templateProjects);
  console.log(education);
  return (
    <>
      <div className="editor">
        <h1>Build Your Own Resume</h1>
        <main>
          <div>
            <button
              type="button"
              onClick={() => {
                setPersonalInfos({
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  place: "",
                  others: [
                    { id: uuidv4(), content: "" },
                    { id: uuidv4(), content: "" },
                  ],
                });
                setEducation([]);
                setExperience([]);
                setProjects([]);
              }}
            >
              New
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                setPersonalInfos(templatePersonalInfo);
                setEducation(templateEducation);
                setExperience(templateExperience);
                setProjects(templateProjects);
              }}
            >
              Sample
            </button>
          </div>
        </main>
        <PersonalInfoForm
          changeInfo={setPersonalInfos}
          info={personalInfos}
        ></PersonalInfoForm>
        <ResumeComponentForm
          changeInfo={setEducation}
          component="Education"
          data={education}
        ></ResumeComponentForm>

        <ResumeComponentForm
          changeInfo={setExperience}
          component="Experience"
          data={experience}
        ></ResumeComponentForm>

        <ResumeComponentForm
          changeInfo={setProjects}
          component="Projects"
          data={projects}
        ></ResumeComponentForm>
      </div>

      <div className="resume-container">
        <div className="resume">
          {/* Personal Information */}
          <PersonalInfo personalInfo={personalInfos}></PersonalInfo>
          {/* EDUCATION */}
          <ResumeComponent
            component="Education"
            data={education}
          ></ResumeComponent>

          {/* EXPERIENCE */}
          <ResumeComponent
            component="Experience"
            data={experience}
          ></ResumeComponent>

          {/* PROJECTS */}
          <ResumeComponent
            component="Projects"
            data={projects}
          ></ResumeComponent>
        </div>
      </div>
    </>
  );
}

export default App;
