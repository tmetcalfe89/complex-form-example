import { useCallback } from "react";
import Input from "../components/Input";
import { BulletPoint } from "../types/data";

interface BulletPointsEditorProps {
  bulletPoints: BulletPoint[];
  onChangeBulletPoint: (i: number, t: string) => void;
}

export default function BulletPointsEditor({
  bulletPoints,
  onChangeBulletPoint,
}: BulletPointsEditorProps) {
  const handleChange = useCallback(
    (i: number) => (t: string) => {
      onChangeBulletPoint(i, t);
    },
    [onChangeBulletPoint]
  );

  return (
    <>
      <label>Bullet Points</label>
      {bulletPoints.map(({ text }, i) => (
        <Input key={i} value={text} onChange={handleChange(i)} />
      ))}
    </>
  );
}
