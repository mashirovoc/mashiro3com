"use client";

import { Button } from "@/components/ui/button";
import { IoCopyOutline } from "react-icons/io5";
import { toast } from "sonner";

interface CopyButtonProps {
  text: string;
  label: string;
  icon: React.ReactNode;
}
const CopyButton = ({ text, label, icon }: CopyButtonProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} をコピーしました！`, {
      description: text,
    });
  };

  return (
    <Button
      variant="secondary"
      className="w-full justify-between h-12 transition-colors cursor-pointer"
      onClick={handleCopy}
    >
      <div className="flex items-center">
        <span className="mr-3 flex items-center justify-center text-foreground">
          {icon}
        </span>
        <span>
          {label}:{" "}
          <span className="font-mono ml-1 font-semibold text-foreground">
            {text}
          </span>
        </span>
      </div>
      <IoCopyOutline className="h-4 w-4 text-muted-foreground opacity-50" />
    </Button>
  );
};
export default CopyButton;
