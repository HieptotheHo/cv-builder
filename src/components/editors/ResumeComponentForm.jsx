import "../../styles/ResumeComponentForm.css";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import ExpansionButton from "../ExpansionButton";
import { useState } from "react";
function SubComponentDetail({ index, detailIndex, detail, changeInfo }) {
  function handleChangeDetail(e, index, detailIndex) {
    changeInfo((prevState) => {
      let temp = prevState.slice();
      temp[index].details[detailIndex].content = e.target.value;
      return temp;
    });
  }

  function handleDeleteDetail(e, index, detailIndex, detail) {
    changeInfo((prevState) => {
      let temp = [...prevState];
      let tempItem = { ...temp[index] };
      let tempItemDetails = tempItem.details.filter(
        (d, i) => i !== detailIndex
      );

      tempItem = { ...temp[index], details: tempItemDetails };

      temp[index] = tempItem;

      return temp;
    });
  }
  return (
    <div>
      <div>
        <button
          type="button"
          className="delete-detail"
          onClick={(e) => {
            handleDeleteDetail(e, index, detailIndex, detail);
          }}
        >
          <FontAwesomeIcon icon={faX} />
        </button>
        <label htmlFor="">Detail {detailIndex + 1}</label>
      </div>
      <input
        type="text"
        value={detail.content}
        onChange={(e) => {
          handleChangeDetail(e, index, detailIndex);
        }}
      />
    </div>
  );
}

function SubComponent({ data, changeInfo, index }) {
  function handleChangeInfo(e, field, index) {
    changeInfo((prevState) => {
      let temp = prevState.slice();
      temp[index][field] = e.target.value;

      return temp;
    });
  }
  // const [subComponent, setSubComponent] = useState(data);
  return (
    <div>
      <header
        className="close-subcomponent"
        onClick={() => {
          changeInfo((prevState) => prevState.filter((d, i) => i !== index));
        }}
      >
        <FontAwesomeIcon icon={faX}></FontAwesomeIcon>
      </header>
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
      {data.details.map((detail, detailIndex) => (
        <SubComponentDetail
          key={detail.id}
          index={index}
          detailIndex={detailIndex}
          detail={detail}
          changeInfo={changeInfo}
        ></SubComponentDetail>
      ))}
      <footer className="add-detail">
        <button
          type="button"
          onClick={() => {
            changeInfo((prevState) => {
              const newDetail = { id: uuidv4(), detail: "" };
              let temp = [...prevState];
              let tempItem = {
                ...temp[index],
                details: [...temp[index].details, newDetail],
              };
              temp[index] = tempItem;
              return temp;
            });
          }}
        >
          Add detail
        </button>
      </footer>
    </div>
  );
}

export default function ResumeComponentForm({ component, data, changeInfo }) {
  const [expanded, setExpanded] = useState(false);
  console.log(expanded);
  function addSubComponent() {
    changeInfo((prevState) => {
      let temp = prevState.slice();
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
      <div className="header">
        <h1>{component}</h1>
        <ExpansionButton
          setExpanded={setExpanded}
          expanded={expanded}
          component={component}
        ></ExpansionButton>
      </div>
      <div className={component + " main"}>
        {expanded && (
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
        )}
      </div>
    </div>
  );
}
