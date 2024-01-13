import { useCallback, useState } from "react";
import PromptEditor from "../features/PromptEditor";
import { Scene, generateScenes } from "../api/aibackend";

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

  return (
    <div className="section page">
      <PromptEditor
        prompt={prompt}
        onPromptChange={setPrompt}
        onPromptConfirm={handlePromptConfirm}
        disabled={loading}
      />
      {scenes != null && <>{JSON.stringify(scenes)}</>}
    </div>
  );
}
