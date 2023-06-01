import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function NoPage() {
  return (
    <div className="text-center pt-64">
      <h1 className="text-8xl">404</h1>
      <h2 className="text-4xl">Page not found</h2>
      <a href="/" className="text-2xl">
        Back to home page <FontAwesomeIcon icon={faArrowLeft} />
      </a>
    </div>
  );
}

export default NoPage;
