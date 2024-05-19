export default function PersonalInfo({ personalInfo }) {
  return (
    <div className="personal-info">
      <h1 className="name">
        {personalInfo.firstName} {personalInfo.lastName}
      </h1>
      <div className="contacts">
        <ul>
          <li>{personalInfo.email}</li>
          {personalInfo.phone !== "" && <li> • </li>}
          <li>{personalInfo.phone}</li>
          {personalInfo.place !== "" && <li> • </li>}
          <li>{personalInfo.place}</li>
        </ul>
      </div>
      <div className="others">
        <ul>
          {personalInfo.others.map((info, index) => {
            return (
              <>
                <li key={info.id}>{info.detail}</li>
                {index < personalInfo.others.length - 1 && <li> • </li>}
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
