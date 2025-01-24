import TeamMember from "../TeamMember/TeamMember.jsx";
import Member1 from "../../assets/images/member-1.png";
import Member2 from "../../assets/images/member-2.png";
import Member3 from "../../assets/images/member-3.png";
import Member4 from "../../assets/images/member-4.png";
import dribble from "../../assets/icons/Dribble.png";
import linkIn from "../../assets/icons/LinkedIn.png";
import twitter from "../../assets/icons/Twitter.png";

const members = [
  {
    img: Member1,
    imgAlt: "Member 1",
    memberName: "Leslie Alexander",
  },
  {
    img: Member2,
    imgAlt: "Member 2",
    memberName: "Ralph Edwards",
  },
  {
    img: Member3,
    imgAlt: "Member 3",
    memberName: "Annette Black",
  },
  {
    img: Member4,
    imgAlt: "Member 4",
    memberName: "Savannah Nguyen",
  },
];

export default function OurTeam() {
  const hiddenTeamMembers = document.querySelectorAll('.hidden-team-member')

  const handleResize = () => {
    const displayState = window.innerWidth < 1024 ? "none" : "flex";

    hiddenTeamMembers.forEach(card => {
      card.style.display = displayState;
    })
  };

  // initial checkout
  handleResize();

  window.addEventListener("resize", handleResize);
  const viewAll = document.querySelector(".view");
  if (viewAll) {
    viewAll.addEventListener("click", () => {
      hiddenTeamMembers.forEach(
        (card) => ((card).style.display = "flex"),
      );
      viewAll.style.display = "none";
    });
  }

  return <main>
    <h1>Our team</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <section className="team-members">
      {
        members.map((member, index) => (
          <TeamMember
            img={member.img}
            imgAlt={member.imgAlt}
            memberName={member.memberName}
            isHidden={index > 2}
            icons={[
              {icon: linkIn, link: "https://www.LinkedIn.com"},
              {icon: twitter, link: "https://www.twitter.com"},
              {icon: dribble, link: "https://www.dribble.com"},
            ]}
          />
        ))
      }
      <button className="view" id="view_all">View all</button>
    </section>
  </main>
}