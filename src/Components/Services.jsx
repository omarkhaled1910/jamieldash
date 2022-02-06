import React from "react";
import "./services.css";
const Services = () => {
  const [services, setServices] = React.useState([]);
  const [firstItm, setFirstItm] = React.useState(false);
  const [input, setInput] = React.useState({ show: false, input: "" });

  const handleAdd = () => {
    console.log("clicked");
    setInput({ show: true, input: "" });
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setServices([...services, input.input]);
      setInput({ ...input, show: false });
    }
  };
  return (
    <div className="addservice">
      {services.length === 0 && !firstItm ? (
        <div>THERE ISNOT ANY SERVICES YET</div>
      ) : (
        <div>
          {services.map((service, i) => (
            <div className="service" key={i}>
              {service}
            </div>
          ))}
        </div>
      )}
      {input.show && (
        <input
          className="service-input"
          value={input.input}
          onKeyPress={(e) => handleEnter(e)}
          onChange={(e) => {
            setInput({ ...input, input: e.target.value });
          }}
        />
      )}
      <button className="add" onClick={(e) => handleAdd()}>
        add service
      </button>
    </div>
  );
};

export default Services;
