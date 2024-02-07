import { useMemo } from "react";

type RandomNumberType = {
  value: number;
};

type PossitiveNumber = RandomNumberType & {
  isPossitive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumberType & {
  isPossitive?: never;
  isNegative: boolean;
  isZero?: never;
};

type Zero = RandomNumberType & {
  isPossitive?: never;
  isNegative?: never;
  isZero?: boolean;
};

type RandomNumberProps = PossitiveNumber | NegativeNumber | Zero;

export const RandomNumber = ({
  value,
  isPossitive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  const determineValue = useMemo(
    () =>
      isPossitive ? "Possitive" : isNegative ? "Negative" : isZero && "Zero",
    [isNegative, isPossitive, isZero]
  );

  return (
    <div>
      <p>
        {value} {determineValue}
      </p>
    </div>
  );
};
