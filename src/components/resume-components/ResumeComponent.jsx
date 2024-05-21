import "../../styles/ResumeComponentStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
export default function ResumeComponent(props) {
  return (
    <div className="component">
      <h3>{props.component}</h3>
      <hr></hr>
      {props.data.map((item) => (
        <div className="component-item" key={item.name}>
          <div>
            <p>
              <b>{item.name}</b>
            </p>
            <p>
              <b>{item.time}</b>
            </p>
          </div>
          <div className="description">
            <p>
              <i key={item.name}>{item.description}</i>
            </p>
          </div>
          <div className="details">
            <ul>
              {item.details &&
                item.details.map((detail, index) => (
                  <li key={detail.id}>{detail.content}</li>
                ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
