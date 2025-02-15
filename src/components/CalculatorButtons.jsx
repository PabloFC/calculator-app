const CalculatorButtons = ({ handleButtonsClick }) => {
  const buttons = [
    { value: "7", className: "number" },
    { value: "8", className: "number" },
    { value: "9", className: "number" },
    { value: "DEL", className: "delete" },
    { value: "4", className: "number" },
    { value: "5", className: "number" },
    { value: "6", className: "number" },
    { value: "+", className: "operator" },
    { value: "1", className: "number" },
    { value: "2", className: "number" },
    { value: "3", className: "number" },
    { value: "-", className: "operator" },
    { value: ".", className: "number" },
    { value: "0", className: "number" },
    { value: "/", className: "number" },
    { value: "*", className: "operator" },
    { value: "RESET", className: "reset" },
    { value: "=", className: "equal" },
  ];

  return (
    <section className="buttonsSectionStyle p-8 grid grid-cols-4 grid-rows-5 gap-x-4 gap-y-6">
      {buttons.map((button) => (
        <button
          key={button.value}
          className={button.className}
          onClick={() => handleButtonsClick(button.value)}
        >
          {button.value}
        </button>
      ))}
    </section>
  );
};

export default CalculatorButtons;
