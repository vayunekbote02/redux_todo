export const clipTitle = (title, forPurpose) => {
  if (forPurpose === "modal") {
    return title.length > 10
      ? "'" + title.substring(0, 10) + "..." + "'"
      : "'" + title + "'";
  }
  return title.length > 30 ? title.substring(0, 30) + "..." : title;
};
