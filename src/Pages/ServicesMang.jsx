import React from "react";
import Services from "../Components/Services";
import "./servicesmang.css";
const ServicesMang = () => {
  const [gender, setGender] = React.useState(0);

  return (
    <div className="services-con">
      <div
        style={{ display: "flex", width: "500px", justifyContent: "center" }}
      >
        <button onClick={() => setGender(0)}>MEN</button>
        <button onClick={() => setGender(1)}>WOMAN</button>
      </div>
      {gender === 0 && <Services />}
    </div>
  );
};

export default ServicesMang;
