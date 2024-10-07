import sen1 from "../../assets/images/Sentinels/sen1.png";
import cjmovies1 from "../../assets/images/CjMovies/cjmovies1.png";
import acms1 from "../../assets/images/Acms/acms1.png";
import gecko1 from "../../assets/images/gecko/gecko1.png";
import infosoft1 from "../../assets/images/infosoft/infosoft1.png";
import bogsy1 from "../../assets/images/bogsy/bogsy1.png";
import ui1 from "../../assets/images/uiux/ui1.png";
import sen3 from "../../assets/images/Sentinels/sen3.png";
import cjmovies4 from "../../assets/images/CjMovies/cjmovies4.png";
import acms3 from "../../assets/images/Acms/acms3.png";

function CardSlider() {
  const cards = [
    { id: 1, text: "Card 1", image: ui1 },
    { id: 2, text: "Card 2", image: sen1 },
    { id: 3, text: "Card 3", image: cjmovies1 },
    { id: 4, text: "Card 4", image: acms1 },
    { id: 5, text: "Card 5", image: gecko1 },
    { id: 6, text: "Card 6", image: infosoft1 },
    { id: 7, text: "Card 7", image: bogsy1 },
    { id: 8, text: "Card 8", image: sen3 },
    { id: 9, text: "Card 9", image: cjmovies4 },
    { id: 10, text: "Card 10", image: acms3 },
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

export default CardSlider;
