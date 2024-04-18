

export default function SinglePitstop( { pitstop } ) {
  return (
    <article className="singleps">
        <br/>
        <p>Position: {pitstop.position}</p>
        <p>Race: {pitstop.race}</p>
        <p>Driver: {pitstop.driver}</p>
        <p>Team: {pitstop.team}</p>
        <p>Time: {pitstop.time}</p>
        <br/>
    </article>
    
  )
}
