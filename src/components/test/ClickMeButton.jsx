"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ClickMeButton = () => {
  return (
    <Button
      onClick={() => {
        toast.success("Button clicked!");
      }}
    >
      Click me
    </Button>
  );
};

export default ClickMeButton;
