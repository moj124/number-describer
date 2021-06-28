interface NumberDescriptionProps {
  numberToDescribe: number;
}

function NumberDescription({
  numberToDescribe,
}: NumberDescriptionProps): JSX.Element {
  const isEven = numberToDescribe % 2 === 0;
  const isOdd = !isEven; // assuming here that numberToDescribe is an integer
  const isNegative = numberToDescribe < 0;
  const isBiggerThan = (comparator: number): boolean =>
    numberToDescribe > comparator;

  return (
    <ul>
      {isEven && <li>Even</li>}
      {isOdd && <li>Odd</li>}
      {isNegative && <li>Negative</li>}
      {isBiggerThan(5) && <li>Bigger than 5</li>}
      {isBiggerThan(10) && <li>Bigger than 10</li>}
      {isBiggerThan(20) && <li>Bigger than 20</li>}
    </ul>
  );
}

export default NumberDescription;
