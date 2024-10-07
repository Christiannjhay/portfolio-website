import sen3 from "../../assets/images/Sentinels/sen3.png";
import cjmovies1 from "../../assets/images/CjMovies/cjmovies1.png";
import bogsy3 from "../../assets/images/bogsy/bogsy3.png";
import ui8 from "../../assets/images/uiux/ui8.png";
import gecko1 from "../../assets/images/gecko/gecko1.png";
import acms2 from "../../assets/images/Acms/acms2.png";
import infosoft1 from "../../assets/images/infosoft/infosoft1.png";
import sen2 from "../../assets/images/Sentinels/sen2.png";
import cjmovies2 from "../../assets/images/CjMovies/cjmovies2.png";
import ui3 from "../../assets/images/uiux/ui3.png";

function CardSliderThird() {
  const cards = [
    { id: 21, text: "Card 21", image: sen3 },
    { id: 22, text: "Card 22", image: cjmovies1 },
    { id: 23, text: "Card 23", image: bogsy3 },
    { id: 24, text: "Card 24", image: ui8 },
    { id: 25, text: "Card 25", image: acms2 },
    { id: 26, text: "Card 26", image: ui3 },
    { id: 27, text: "Card 27", image: infosoft1 },
    { id: 28, text: "Card 28", image: sen2 },
    { id: 29, text: "Card 29", image: cjmovies2 },
    { id: 30, text: "Card 30", image: gecko1 },
  ];

  return (
    <div className="relative w-screen h-auto overflow-hidden">
      <div className="flex animate-slide opacity-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-3/5 lg:w-2/5 xl:w-1/5 h-full flex justify-center items-center flex-shrink-0"
          >
            <img
              src={card.image}
              alt={card.text}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
        {cards.map((card) => (
          <div
            key={`duplicate-${card.id}`}
            className="w-3/5 lg:w-2/5 xl:w-1/5 h-full flex justify-center items-center flex-shrink-0"
          >
            <img
              src={card.image}
              alt={card.text}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardSliderThird;
