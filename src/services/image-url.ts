import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const [head, tail] = url.split("/media/");
  return `${head}/media/crop/600/400/${tail}`;
};

export default getCroppedImageUrl;
