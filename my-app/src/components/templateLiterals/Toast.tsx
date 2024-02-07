type HorizontalPosiion = "left" | "center" | "right";
type VerticalPosiion = "top" | "center" | "bottom";

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosiion}-${VerticalPosiion}`, "center-center">
    | "center";
};

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
};
