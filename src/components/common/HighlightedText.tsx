export function HighlightedText({
  text,
  highlight,
}: {
  text: string;
  highlight: string;
}) {
  if (!highlight || !text.includes(highlight)) {
    return <>{text}</>;
  }

  const [before, after] = text.split(highlight);
  return (
    <>
      {before}
      <span>{highlight}</span>
      {after}
    </>
  );
}
