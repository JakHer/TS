import { useCallback, useState } from "react";
import { Button } from "./components/Button";

export const Page = () => {
  return (
    <main>
      <Button countValue={"5"} countHistory={["10", "20", "30"]} type="submit">
        Click Me
      </Button>
    </main>
  );
};
