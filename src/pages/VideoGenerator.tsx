import { useCallback, useState } from "react";
import PromptEditor from "../features/PromptEditor";
import { generateScenes } from "../api/aibackend";
import ScenesEditor from "../features/ScenesEditor";
import { Scene } from "../types/data";

export default function VideoGenerator() {
  const [loading, setLoading] = useState(false);

  const [prompt, setPrompt] = useState<string>("");
  const [scenes, setScenes] = useState<Scene[] | null>(null);

  const handlePromptConfirm = useCallback(async () => {
    setLoading(true);
    const { title, scenes: fetchedScenes } = await generateScenes(prompt);
    setScenes(fetchedScenes);
    setPrompt(title);
    setLoading(false);
  }, [prompt]);

  const handleChangeScene = useCallback((i: number, k: string, v: unknown) => {
    setScenes(
      (p) =>
        p?.map((scene, j) => (i === j ? { ...scene, [k]: v } : scene)) || null
    );
  }, []);

  return (
    <div className="section page column">
      <PromptEditor
        prompt={prompt}
        onPromptChange={setPrompt}
        onPromptConfirm={handlePromptConfirm}
        disabled={loading}
      />
      {scenes != null && (
        <>
          <ScenesEditor scenes={scenes} onChangeScene={handleChangeScene} />
          <button>Generate Video</button>
        </>
      )}
    </div>
  );
}
