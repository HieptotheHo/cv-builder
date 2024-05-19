import "../../styles/ResumeComponentForm.css";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
function SubComponent({ data, changeInfo, index }) {
  function handleChangeInfo(e, field, index) {
    changeInfo((prevState) => {
      let temp = [...prevState];
      temp[index][field] = e.target.value;

      return temp;
    });
  }

  function handleChangeDetail(e, index) {
    changeInfo((prevState) => {
      let temp = [...prevState];
      temp[index].details[index].content = e.target.value;

      return temp;
    });
  }
  return (
    <div>
      <div>
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => {
            handleChangeInfo(e, "name", index);
          }}
        />
      </div>
      <div>
        <label htmlFor="">Time</label>
        <input
          type="text"
          value={data.time}
          onChange={(e) => {
            handleChangeInfo(e, "time", index);
          }}
        />
      </div>
      <div>
        <label htmlFor="">Description</label>
        <input
          type="text"
          value={data.description}
          onChange={(e) => {
            handleChangeInfo(e, "description", index);
          }}
        />
      </div>
      {data.details.map((detail, index) => (
        <div key={detail.id}>
          <div>
            <button type="button" className="delete-detail">
              <FontAwesomeIcon icon={faX} />
            </button>
            <label htmlFor="">Detail {index + 1}</label>
          </div>
          <input
            type="text"
            value={detail.content}
            onChange={(e) => {
              handleChangeDetail(e, index);
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default function ResumeComponentForm({ component, data, changeInfo }) {
  function addSubComponent() {
    changeInfo((prevState) => {
      let temp = [...prevState];
      temp.push({
        id: uuidv4(),
        name: "",
        time: "",
        description: "",
        details: [],
      });
      return temp;
    });
  }
  return (
    <div className="component container">
      <h1>{component}</h1>
      <form>
        {data.map((eachSub, index) => (
          <SubComponent
            key={eachSub.id}
            data={eachSub}
            index={index}
            changeInfo={changeInfo}
          ></SubComponent>
        ))}
        <div>
          <button
            type="button"
            onClick={(e) => {
              addSubComponent();
            }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
