import "./Card.css";

type CardProps = {
  value: number;
  index: number;
  active: boolean;
  onClick: ({ index, value }: { index: number; value: number }) => void;
};

export const Card = ({ value, index, active, onClick }: CardProps) => {
  return (
    <div className={`card ${active ? "flip" : ""}`}>
      <div className="front">
        <img width={120} height={180} src={`${value}.png`} />
      </div>

      <div onClick={() => onClick({ index, value })} className="back">
        <img width={120} height={180} src="card-back.png" />
      </div>
    </div>
  );
};
