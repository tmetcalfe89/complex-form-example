import { useCallback, useState } from "react";
import PromptEditor from "../features/PromptEditor";

export default function VideoGenerator() {
    const [prompt, setPrompt] = useState<string>("");

    const handlePromptConfirm = useCallback(() => {
        console.log(prompt);
    }, [prompt]);

    return <div className="section page">
        <PromptEditor prompt={prompt} onPromptChange={setPrompt} onPromptConfirm={handlePromptConfirm} />
    </div>
}