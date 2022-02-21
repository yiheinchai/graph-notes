import { Link, Outlet } from "react-router-dom";
import NavigationButton from "../ui/buttons/NavigationButton";

const DocumentPage = () => {
  return (
    <div
      style={{
        marginTop: "2rem",
        backgroundColor: "white",
        padding: "2rem",
        maxWidth: "1000px",
        minWidth: "1000px",
        borderRadius: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "flex-start",
          marginBottom: "2rem",
        }}
      >
        <Link to="/">
          <NavigationButton>{"< Back"}</NavigationButton>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default DocumentPage;
