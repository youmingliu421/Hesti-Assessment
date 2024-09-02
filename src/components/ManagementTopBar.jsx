import { useSelector } from "react-redux";
import { Button } from "@mui/joy";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import ManagementTab from "./ManagementTab";
import {
  POLYGON_MANAGEMENT_TABLE,
  MARKER_MANAGEMENT_TABLE,
} from "../constants";

const ManagementTopBar = ({ tableType, setTableType }) => {
  const allMarkers = useSelector((state) => state.marker.markerPositions);
  const allPolygons = useSelector((state) => state.polygon.polygons);

  const isPolygonTable = tableType === POLYGON_MANAGEMENT_TABLE;
  const currentCount = isPolygonTable ? allPolygons.length : allMarkers.length;

  const tabTexts = ["Polygon management", "Marker management"];

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4">
        {[POLYGON_MANAGEMENT_TABLE, MARKER_MANAGEMENT_TABLE].map(
          (item, index) => (
            <ManagementTab
              key={index}
              text={tabTexts[index]}
              id={item}
              tableType={tableType}
              setTableType={setTableType}
            />
          ),
        )}
      </div>
      <div className="flex gap-4">
        {!currentCount ? (
          <Button
            disabled
            variant="solid"
            startDecorator={<FileDownloadOutlinedIcon />}
          >
            Download
          </Button>
        ) : (
          <Button
            variant="plain"
            startDecorator={<FileDownloadOutlinedIcon />}
            sx={{
              color: "#3E4970",
              "&:hover": {
                color: "#4F5A85",
              },
            }}
          >
            Download
          </Button>
        )}
        <Button
          variant="outlined"
          startDecorator={<AddOutlinedIcon />}
          sx={{
            color: "#57167E",
            borderColor: "#57167E",
            "&:hover": {
              backgroundColor: "rgba(87, 22, 126, 0.2)",
            },
          }}
        >
          Add polygon
        </Button>
      </div>
    </div>
  );
};

export default ManagementTopBar;
