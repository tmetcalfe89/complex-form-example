import { useCallback } from "react";
import { Background } from "../types/data";

interface BackgroundSelectorProps {
  backgrounds: Background[];
  onSuggestNewVideos: () => void;
  onSelect: (selectedUrl: string) => void;
  selected?: string;
}

export default function BackgroundSelector({
  backgrounds,
  onSuggestNewVideos,
  selected,
  onSelect,
}: BackgroundSelectorProps) {
  const handleSelect = useCallback(
    (url: string) => () => {
      onSelect(url);
    },
    [onSelect]
  );

  return (
    <>
      <label>Background</label>
      <button onClick={onSuggestNewVideos}>Suggest New Backgrounds</button>
      <div style={{ display: "flex", overflowX: "auto" }}>
        {backgrounds.map(({ url }, i) => (
          <div
            key={i}
            style={{
              padding: "3px",
              backgroundColor: selected === url ? "green" : undefined,
            }}
            onClick={handleSelect(url)}
          >
            <img key={i} src={url} />
          </div>
        ))}
      </div>
    </>
  );
}
