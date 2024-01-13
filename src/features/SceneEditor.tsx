import { useCallback } from "react";
import Input from "../components/Input";
import Section from "../components/Section";
import { Scene } from "../types/data";
import BulletPointsEditor from "./BulletPointsEditor";
import BackgroundSelector from "./BackgroundSelector";

interface SceneEditorProps {
  scene: Scene;
  onChange: (k: string, v: unknown) => void;
  onSuggestNewVideos: () => void;
}

export default function SceneEditor({
  scene: { title, narration, bulletPoints, backgrounds, selectedBackground },
  onChange,
  onSuggestNewVideos,
}: SceneEditorProps) {
  const handleChange = useCallback(
    (k: string) => (v: unknown) => {
      onChange(k, v);
    },
    [onChange]
  );

  const handleChangeBulletPoint = useCallback(
    (i: number, t: string) => {
      onChange(
        "bulletPoints",
        bulletPoints.map((bp, j) => (i === j ? { ...bp, text: t } : bp))
      );
    },
    [bulletPoints, onChange]
  );

  return (
    <Section>
      <Input value={title} onChange={handleChange("title")} label="Title" />
      <Input
        value={narration}
        onChange={handleChange("narration")}
        label="Narration"
        type="big"
      />
      <button>Generate Audio</button>
      <BulletPointsEditor
        bulletPoints={bulletPoints}
        onChangeBulletPoint={handleChangeBulletPoint}
      />
      {backgrounds ? (
        <BackgroundSelector
          backgrounds={backgrounds}
          onSuggestNewVideos={onSuggestNewVideos}
          onSelect={handleChange("selectedBackground")}
          selected={selectedBackground}
        />
      ) : <div>Loading suggested backgrounds...</div>}
    </Section>
  );
}
