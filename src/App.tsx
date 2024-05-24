import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import Input from "./components/Input";
import { Label } from "./components/ui/label";

const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const shuffleArray = (array: number[]) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

type Selection = {
  index: number;
  value: number;
};

function randomCards() {
  return shuffleArray([...cards, ...cards]).map((value, index) => ({
    index,
    value,
  }));
}

function App() {
  const [array, setArray] = useState(() => randomCards());
  const [firstChoice, setFirstChoice] = useState<null | Selection>(null);
  const [secondChoice, setSecondChoice] = useState<null | Selection>(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [tries, setTries] = useState(3);

  const match =
    firstChoice !== null && firstChoice?.value === secondChoice?.value;
  const oneGuess = firstChoice !== null && secondChoice !== null;

  const handleClick = ({ index, value }: { index: number; value: number }) => {
    console.log("index", index);
    console.log("value", value);

    if (firstChoice === null) {
      setFirstChoice({ index, value });
      return;
    }

    if (secondChoice === null) {
      setSecondChoice({ index, value });
      return;
    }
  };

  useEffect(() => {
    if (match) {
      // MATCH
      setPhoneNumber((prev) => `${prev}${firstChoice.value.toString()}`);
      setTries(3);
    }
    if (oneGuess) {
      setTimeout(() => {
        setFirstChoice(null);
        setSecondChoice(null);
      }, 2500);
      setTimeout(() => {
        if (!match) {
          setTries((prev) => {
            if (prev === 1) {
              setPhoneNumber("");
              setArray(randomCards());
              return 3;
            }
            return prev - 1;
          });
        }
      }, 3000);
    }
  }, [firstChoice, match, oneGuess]);

  return (
    <>
      <div className="card-container">
        {array.map((v, index) => (
          <Card
            onClick={oneGuess ? () => {} : handleClick}
            key={index}
            value={v.value}
            index={index}
            active={
              index === firstChoice?.index || index === secondChoice?.index
            }
          />
        ))}
      </div>
      <div className="flex flex-col items-center w-full mt-8 gap-8">
        Tries left: {tries}
        <div>
          <Label>Phone number</Label>
          <Input phoneNumber={phoneNumber} />
        </div>
      </div>
    </>
  );
}

export default App;
