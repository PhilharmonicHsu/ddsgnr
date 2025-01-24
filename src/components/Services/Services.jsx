import "./Services.module.scss";
import room1 from "../../assets/images/room-1.jpeg";
import room2 from "../../assets/images/room-2.jpeg";
import room3 from "../../assets/images/room-3.jpeg";
import room4 from "../../assets/images/room-4.jpeg";
import room5 from "../../assets/images/room-5.jpeg";
import room6 from "../../assets/images/room-6.jpeg";

const DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.";
const SERVICES = [
  {
    img: room1,
    title: "One Bedroom Apartment",
  },
  {
    img: room2,
    title: "Window Cleaning",
  },
  {
    img: room3,
    title: "Residential Cleaning",
  },
  {
    img: room4,
    title: "Construction Cleaning",
  },
  {
    img: room5,
    title: "Commercial Cleaning",
  },
  {
    img: room6,
    title: "Two Bedroom Apartment",
  },
];

export default function Services() {
  const hidden_cards = document.querySelectorAll(".hidden_card");

  const handleResize = () => {
    const displayState = window.innerWidth < 1024 ? "none" : "block";

    hidden_cards.forEach((card) => {
      (card).style.display = displayState;
    });
  };

  // initial checkout
  handleResize();

  window.addEventListener("resize", handleResize);
  const viewAll = document.getElementById("view_all");

  if (viewAll) {
    viewAll.addEventListener("click", () => {
      hidden_cards.forEach(
        (card) => ((card).style.display = "block"),
    );
      viewAll.style.display = "none";
    });
  }

  return <section id="services">
    <h1>Our Services</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className="card_list">
      {
        SERVICES.map((service, i) => (
          <div key={i} className={i > 2 ? "hidden_card" : "card"}>
            <div className="card_context">
              <img src={service.img} alt={service.title}/>
              <h2>{service.title}</h2>
              <p>{DESCRIPTION}</p>
            </div>
          </div>
        ))
      }
      <button id="view_all">View all</button>
    </div>
  </section>
}