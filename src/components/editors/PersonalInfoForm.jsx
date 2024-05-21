import "../../styles/PersonalInfoForm.css";
import "../../styles/PersonalInfoStyle.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import ExpansionButton from "../ExpansionButton";
function ExtraContact({ contact, index, changeInfo, changeExtraContacts }) {
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
          <FontAwesomeIcon icon={faX} key={contact.id + "-X"} />
        </button>
        <label htmlFor={contact.id}>New Contact {index + 1}</label>
      </div>
      <input
        value={contact.detail}
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

export default function PersonalInfoForm({ changeInfo, info }) {
  //Update name, email, phone, place
  function handleChangePersonalInfo(e, field) {
    changeInfo((prevState) => ({
      ...prevState,
      [field]: e.target.value,
    }));
  }
  //state keeping track of additional contacts in form
  const [extraContacts, setExtraContacts] = useState(info.others);
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
      <div className="header">
        <h1>Personal Information</h1>
        <ExpansionButton></ExpansionButton>
      </div>
      <form>
        <div key="first-name">
          <label htmlFor="first-name">First name</label>
          <input
            value={info.firstName}
            type="text"
            id="first-name"
            name="firstName"
            onChange={(e) => handleChangePersonalInfo(e, "firstName")}
          />
        </div>
        <div key="last-name">
          <label htmlFor="last-name">Last name</label>
          <input
            value={info.lastName}
            type="text"
            id="last-name"
            name="lastName"
            onChange={(e) => handleChangePersonalInfo(e, "lastName")}
          />
        </div>
        <div key="email">
          <label htmlFor="email">Email</label>
          <input
            value={info.email}
            type="email"
            id="email"
            name="email"
            onChange={(e) => handleChangePersonalInfo(e, "email")}
          />
        </div>
        <div key="phone">
          <label htmlFor="phone">Phone</label>
          <input
            value={info.phone}
            type="text"
            id="phone"
            name="phone"
            onChange={(e) => handleChangePersonalInfo(e, "phone")}
          />
        </div>
        <div key="place">
          <label htmlFor="place">Place</label>
          <input
            value={info.place}
            type="text"
            id="place"
            name="place"
            onChange={(e) => handleChangePersonalInfo(e, "place")}
          />
        </div>
        {extraContacts.map((contact, index) => (
          <ExtraContact
            key={contact.id}
            contact={contact}
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
