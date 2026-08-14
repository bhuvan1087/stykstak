export type MediaAsset = {
  type: string;
  imageKey?: string;
  videoKey?: string;
  src?: string;
  alt?: string;
  posterKey?: string;
  poster?: string;
};

export type Action = {
  label: string;
  href: string;
  style?: string;
};
