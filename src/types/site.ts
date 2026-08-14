export type MediaAsset = {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
};

export type Action = {
  label: string;
  href: string;
  style?: "primary" | "ghost";
};
