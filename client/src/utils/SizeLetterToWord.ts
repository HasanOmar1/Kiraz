const sizes = (size?: string | undefined) => {
  if (size === "S") {
    return "Small";
  }
  if (size === "M") {
    return "Medium";
  }
  if (size === "L") {
    return "Large";
  }
  return size;
};

export default sizes;
