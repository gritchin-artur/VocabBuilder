import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function Footer() {
  const location = useLocation();
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    if (
      location.pathname.includes("/dictionary") ||
      location.pathname.includes("/recommend") ||
      location.pathname.includes("/training")
    ) {
      setBackgroundColor("#f8f8f8");
    } else {
      setBackgroundColor("#85aa9f");
    }
  }, [location]);

  return (
    <footer
      style={{
        paddingTop: "30px",
        paddingLeft: "50px",
        paddingBottom: "30px",
        backgroundColor: backgroundColor,
      }}
    >
      <a
        style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
        href="https://github.com/gritchin-artur"
      >
        © made by Hrytchyn Artur
      </a>
    </footer>
  );
}
