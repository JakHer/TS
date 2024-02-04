import { useMemo } from "react";

type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status = ({ status }: StatusProps) => {
  const renderMessage = useMemo(() => {
    switch (status) {
      case "loading":
        return "Loading";
      case "success":
        return "Success";
      case "error":
        return "Error";
      default:
        "Default";
    }
  }, [status]);

  return <p>Status - {renderMessage}</p>;
};
