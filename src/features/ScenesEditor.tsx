import { useCallback } from "react";
import { Scene } from "../types/data";
import SceneEditor from "./SceneEditor";
import Section from "../components/Section";

interface ScenesEditorProps {
  scenes: Scene[];
  onChangeScene: (i: number, k: string, v: unknown) => void;
  onSuggestNewVideos: (i: number) => void;
}

export default function ScenesEditor({
  scenes,
  onChangeScene,
  onSuggestNewVideos,
}: ScenesEditorProps) {
  const handleChange = useCallback(
    (i: number) => (k: string, v: unknown) => {
      onChangeScene(i, k, v);
    },
    [onChangeScene]
  );

  const handleSuggestNewVideos = useCallback((i: number) => () => {
    onSuggestNewVideos(i);
  }, [onSuggestNewVideos]);

  return (
    <Section>
      <h1 className="center">Scenes</h1>
      {scenes.map((scene, i) => (
        <SceneEditor
          key={i}
          scene={scene}
          onChange={handleChange(i)}
          onSuggestNewVideos={handleSuggestNewVideos(i)}
        />
      ))}
    </Section>
  );
}
