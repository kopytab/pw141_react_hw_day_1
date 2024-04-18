export default function SingleLap( { fastestlap } ) {
    return (
      <article className="singlefl">
          <br/>
          <p>Round: {fastestlap.round}</p>
          <p>Race: {fastestlap.race}</p>
          <p>Driver: {fastestlap.driver}</p>
          <p>Team: {fastestlap.team}</p>
          <p>Time: {fastestlap.time}</p>
          <br/>
      </article>
      
    )
  }
  