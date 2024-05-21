import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import "../styles/ExpansionButtonStyle.css"
import "../styles/ExpansionButtonStyle.css";
export default function ExpansionButton({ expanded, setExpanded, component }) {
  return (
    <div
      className="expansion"
      onClick={() => {
        document
          .querySelector("." + component + ".main")
          .classList.toggle("expanding");
        setExpanded((expanded) => !expanded);
      }}
    >
      <FontAwesomeIcon icon={expanded ? faChevronDown : faChevronUp} />
    </div>
  );
}
