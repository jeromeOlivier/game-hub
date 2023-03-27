const getCroppedImageUrl = (url: string) => {
  if (!url) return "";
  const [head, tail] = url.split("/media/");
  return `${head}/media/crop/600/400/${tail}`;
};

export default getCroppedImageUrl;
