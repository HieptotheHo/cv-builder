import { useState } from "react";

import "./App.css";
import ResumeComponent from "./components/resume-components/ResumeComponent";
import PersonalInfo from "./components/resume-components/PersonalInfo";
import {
  templateEducation,
  templateExperience,
  templatePersonalInfo,
} from "./templateData";
import PersonalInfoForm from "./components/editors/PersonalInfoForm";
function App() {
  //SAMPLE DATA
  const [personalInfos, setPersonalInfos] = useState(templatePersonalInfo);

  const [education, setEducation] = useState(templateEducation);

  const [experience, setExperience] = useState(templateExperience);

  return (
    <>
      <div className="editor">
        <h1>Build Your Own Resume</h1>
        <PersonalInfoForm changeInfo={setPersonalInfos}></PersonalInfoForm>
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
        </div>
      </div>
    </>
  );
}

export default App;
