import React, { useCallback } from "react";

interface PromptEditorProps {
  prompt: string;
  onPromptChange: (newPrompt: string) => void;
  onPromptConfirm: () => void;
}

export default function PromptEditor({
  prompt,
  onPromptChange,
  onPromptConfirm
}: PromptEditorProps) {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onPromptChange(e.target.value);
  }, [onPromptChange]);

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onPromptConfirm();
  }, [onPromptConfirm]);

  return (
    <form className="section column" onSubmit={handleSubmit}>
      <h1 className="center">Prompt</h1>
      <input value={prompt} onChange={handleChange} />
      <button>Generate Scenes</button>
    </form>
  );
}
