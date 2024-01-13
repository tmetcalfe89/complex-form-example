import { useCallback } from "react";
import { Scene } from "../types/data";
import SceneEditor from "./SceneEditor";
import Section from "../components/Section";

interface ScenesEditorProps {
  scenes: Scene[];
  onChangeScene: (i: number, k: string, v: unknown) => void;
}

export default function ScenesEditor({
  scenes,
  onChangeScene,
}: ScenesEditorProps) {
  const handleChange = useCallback(
    (i: number) => (k: string, v: unknown) => {
      onChangeScene(i, k, v);
    },
    [onChangeScene]
  );

  return (
    <Section>
      <h1 className="center">Scenes</h1>
      {scenes.map((scene, i) => (
        <SceneEditor key={i} scene={scene} onChange={handleChange(i)} />
      ))}
    </Section>
  );
}
