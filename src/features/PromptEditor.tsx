import React, { useCallback } from "react";

interface PromptEditorProps {
  prompt: string;
  onPromptChange: (newPrompt: string) => void;
  onPromptConfirm: () => void;
  disabled: boolean;
}

export default function PromptEditor({
  prompt,
  onPromptChange,
  onPromptConfirm,
  disabled,
}: PromptEditorProps) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onPromptChange(e.target.value);
    },
    [onPromptChange]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      if (disabled) return;
      e.preventDefault();
      onPromptConfirm();
    },
    [disabled, onPromptConfirm]
  );

  return (
    <form className="section column" onSubmit={handleSubmit}>
      <h1 className="center">Prompt</h1>
      <input value={prompt} onChange={handleChange} disabled={disabled} />
      <button disabled={disabled}>Generate Scenes</button>
    </form>
  );
}
