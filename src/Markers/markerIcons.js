import StartIcon from "./icons/start";
import EndIcon from "./icons/end";
import StopIcon from "./icons/stop";
import PickupIcon from "./icons/pickup";
import DropoffIcon from "./icons/dropoff";
import DriverIcon from "./icons/driver";

const COLORS = [
  "7F8C8D"
];

const markerIcons = {
  start: {},
  end: {},
  stop: {},
  pickup: {},
  delivery: {},
  driver: {},
};

const icons = {
  start: StartIcon,
  end: EndIcon,
  stop: StopIcon,
  pickup: PickupIcon,
  delivery: DropoffIcon,
  driver: DriverIcon,
};

export const imageMaker = (color, type) => {
  return (
    "data:image/svg+xml;charset=utf-8;base64," +
    btoa(unescape(encodeURIComponent(icons[type](color))))
  );
};

COLORS.forEach((color) => {
  ["start", "end", "stop", "pickup", "delivery", "driver"].forEach((type) => {
    markerIcons[type][color] = imageMaker(`#${color}`, type);
  });
});

export default markerIcons;
