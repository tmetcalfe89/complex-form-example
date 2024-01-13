import React, { useCallback, useMemo } from "react";

interface InputProps {
  value: string;
  onChange: (newValue: string) => void;
  label?: string;
  type?: string;
}

interface LittleInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LittleInput({ value, onChange }: LittleInputProps) {
  return <input value={value} onChange={onChange} />;
}

interface BigInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function BigInput({ value, onChange }: BigInputProps) {
  return <textarea value={value} onChange={onChange} />;
}

export default function Input({
  value,
  onChange,
  label,
  type = "little",
}: InputProps) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  const InputEl = useMemo(() => {
    switch (type) {
      case "little":
        return LittleInput;
      case "big":
        return BigInput;
      default:
        return () => null;
    }
  }, [type]);

  return (
    <div className="column">
      {label && <label>{label}</label>}
      <InputEl value={value} onChange={handleChange} />
    </div>
  );
}
