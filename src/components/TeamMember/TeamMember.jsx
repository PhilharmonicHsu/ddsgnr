import "./TeamMember.module.css"

// eslint-disable-next-line react/prop-types
export default function TeamMember({ img, imgAlt, memberName, icons, isHidden }) {
  return <div className={isHidden ? 'hidden-team-member' : 'team-member'}>
    <img src={img} alt={imgAlt} width={300}/>
    <div className="team-member-info">
      <h3>{memberName}</h3>
      <p className="team-member-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>
      <div className="icons">
        {
          icons.map((icon, i) => (
            <img key={i} className="icon" src={icon.icon} alt={icon.link} width={50} height={50}/>
          ))
        }
      </div>
    </div>
  </div>
}