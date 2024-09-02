import {
  POLYGON_MANAGEMENT_TABLE,
  MARKER_MANAGEMENT_TABLE,
} from "../constants";

const ManagementTab = ({ text, id, tableType, setTableType }) => {
  const isSelected = id === tableType;

  const handleClick = () => {
    setTableType(
      tableType === POLYGON_MANAGEMENT_TABLE
        ? MARKER_MANAGEMENT_TABLE
        : POLYGON_MANAGEMENT_TABLE,
    );
  };

  return (
    <div
      className={`cursor-pointer py-2 border-b-2 ${
        isSelected
          ? "text-[#57167E] font-semibold border-b-[#57167E]"
          : "text-[#3E4970] font-medium border-b-transparent"
      }`}
      onClick={handleClick}
    >
      {text}
    </div>
  );
};

export default ManagementTab;
