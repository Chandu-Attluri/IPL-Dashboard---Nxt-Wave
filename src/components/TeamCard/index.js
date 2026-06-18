import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {id, name, teamImageUrl} = teamData

  return (
    <li className="team-item">
      <Link to={`/team-matches/${id}`} className="link-item">
        <div className="item-container">
          <img className="item-image" src={teamImageUrl} alt={name} />
          <p className="item-title">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
