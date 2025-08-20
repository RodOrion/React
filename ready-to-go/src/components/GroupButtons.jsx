const GroupButtons = ({ setSwitchState, switchState }) => {

  return (
    <div className="flexContainer">
      <button
        className={switchState ? "on active" : "on"}
        onClick={() => {
          setSwitchState(true);
        }}
      >
        ON
      </button>
      <button
        className={!switchState ? "off active" : "off"}
        onClick={() => {
          setSwitchState(false);
        }}
      >
        OFF
      </button>
    </div>
  );
};
export default GroupButtons;
