import "../../styles/PersonalInfoForm.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
function ExtraContact({ name, index, changeInfo, changeExtraContacts }) {
  //Type in extra Contacts
  function handleChangeExtraContact(e, index) {
    changeInfo((prevState) => {
      let temp = { ...prevState };
      temp.others[index].detail = e.target.value;
      return {
        ...prevState,
        others: [...temp.others],
      };
    });
  }

  function handleDeleteExtraContact(e, index) {
    console.log("hi");
    //DELETE one element in others of the state
    changeInfo((prevState) => {
      let temp = prevState.others.filter((contact, i) => i !== index);

      return {
        ...prevState,
        others: temp,
      };
    });
    changeExtraContacts((prevState) => {
      let temp = [...prevState];
      temp.splice(index, 1);
      return temp;
    });
  }
  return (
    <div className="extra-contact">
      <div>
        <button
          type="button"
          onClick={(e) => {
            handleDeleteExtraContact(e, index);
          }}
        >
          <FontAwesomeIcon icon={faX} key={name + "-X"} />
        </button>
        <label htmlFor={name}>New Contact {index + 1}</label>
      </div>
      <input
        type="text"
        id={name}
        name={name}
        onChange={(e) => {
          handleChangeExtraContact(e, index);
        }}
      />
    </div>
  );
}

export default function PersonalInfoForm({ changeInfo }) {
  //Update name, email, phone, place
  function handleChangePersonalInfo(e, field) {
    changeInfo((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  }
  //state keeping track of additional contacts in form
  const [extraContacts, setExtraContacts] = useState([]);

  function handleAddExtraContacts(index) {
    //adding new input for extra contact
    let newContactInput = {
      id: uuidv4(),
      name: "new-contact-" + index,
    };
    setExtraContacts((prevState) => [...prevState, newContactInput]);

    let newContactDisplay = { id: uuidv4(), detail: "" };
    changeInfo((prevState) => ({
      ...prevState,
      others: [...prevState.others, newContactDisplay],
    }));
  }

  return (
    <div className="personal container">
      <h1>Personal Information</h1>
      <form>
        <div key="first-name">
          <label htmlFor="first-name">First name</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            onChange={(e) => handleChangePersonalInfo(e, "firstName")}
          />
        </div>
        <div key="last-name">
          <label htmlFor="last-name">Last name</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            onChange={(e) => handleChangePersonalInfo(e, "lastName")}
          />
        </div>
        <div key="email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => handleChangePersonalInfo(e, "email")}
          />
        </div>
        <div key="phone">
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            id="phone"
            name="phone"
            onChange={(e) => handleChangePersonalInfo(e, "phone")}
          />
        </div>
        <div key="place">
          <label htmlFor="place">Place</label>
          <input
            type="text"
            id="place"
            name="place"
            onChange={(e) => handleChangePersonalInfo(e, "place")}
          />
        </div>
        {extraContacts.map((contact, index) => (
          <ExtraContact
            key={contact.id}
            name={contact.id}
            index={index}
            changeInfo={changeInfo}
            changeExtraContacts={setExtraContacts}
          ></ExtraContact>
        ))}
      </form>

      <div className="button-container">
        <button
          onClick={(e) => {
            handleAddExtraContacts(extraContacts ? extraContacts.length : 0);
          }}
        >
          Add Contact
        </button>
      </div>
    </div>
  );
}
