import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom"; //so when you click on icon, page doesnt refresh, it is now instant.

function AboutIconLink() {
  return (
    <div className="about-link">
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
