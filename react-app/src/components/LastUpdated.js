import { wpConfig } from "../config/wpConfig";
import { LastUpdateTime } from "../models/UpdateTime";

const LastUpdated = () => {
  return (
    <p style={{ color: wpConfig.secondaryColor }}>
      (Last Updated: {LastUpdateTime})
    </p>
  );
};

export default LastUpdated;
