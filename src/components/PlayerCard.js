import './PlayerCard.css'

const PlayerCard = (props) => {
  const { players } = props

  return (
    <div className='card-container'>
      {players.map(player => {
        return (
          <div className="player-card">
            <h2>{player.first_name} {player.last_name}</h2>
            <ul className='details'>
              <li>Birth Place: {player.birth_place}</li>
              <li>Height: {player.height}in</li>
              <li>Draft: {player.draft.year}, Round: {player.draft.round ? player.draft.round : 'N/A'}, Pick: {player.draft.pick ? player.draft.pick : 'N/A'}</li>
              <li>Years in the league: {player.experience === "0" ? "Hasn't played" : player.experience}</li>
              <li>Position: {player.primary_position}</li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default PlayerCard