import ui2 from "../../assets/images/uiux/ui2.png";
import cjmovies2 from "../../assets/images/CjMovies/cjmovies2.png";
import acms2 from "../../assets/images/Acms/acms2.png";
import sen2 from "../../assets/images/Sentinels/sen2.png";
import bogsy2 from "../../assets/images/bogsy/bogsy2.png";
import infosoft2 from "../../assets/images/infosoft/infosoft2.png";
import cjmovies3 from "../../assets/images/CjMovies/cjmovies3.png";
import ui4 from "../../assets/images/uiux/ui4.png";
import sen1 from "../../assets/images/Sentinels/sen1.png";
import acms4 from "../../assets/images/Acms/acms4.png";

function OppositeCardSlider() {
  const cards = [
    { id: 11, text: "Card 11", image: ui2 },
    { id: 12, text: "Card 12", image: cjmovies2 },
    { id: 13, text: "Card 13", image: acms2 },
    { id: 14, text: "Card 14", image: sen2 },
    { id: 15, text: "Card 15", image: bogsy2 },
    { id: 16, text: "Card 16", image: infosoft2 },
    { id: 17, text: "Card 17", image: cjmovies3 },
    { id: 18, text: "Card 18", image: ui4 },
    { id: 19, text: "Card 19", image: sen1 },
    { id: 20, text: "Card 20", image: acms4 },
  ];

  return (
    <div className="relative w-screen h-auto overflow-hidden">
      <div className="flex animate-slide-reverse opacity-10">
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

export default OppositeCardSlider;
