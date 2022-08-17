import UnknownCrew from '../assets/images/unknown-crew.png';

const CrewTable = ({ crewList, isCast }) => {
  const title = isCast ? 'Cast' : 'Crew';
  const jobType = isCast ? 'Character' : 'Job';

  if (!isCast) {
    //unify the crew list to have only one entry per name, and join all the jobs together
    crewList = crewList.reduce((acc, curr) => {
      const existingCrew = acc.find(({ name }) => name === curr.name);
      if (existingCrew) {
        if (!existingCrew.job.includes(curr.job)) {
          existingCrew.job = existingCrew.job.concat(' / ', curr.job);
        }
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);
  }

  //order the crew list popularity

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="crew-table">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>{jobType}</th>
              </tr>
            </thead>
            <tbody>
              {crewList.map((crew) => {
                const name = crew.name ? crew.name : 'Unknown';
                const description = isCast ? crew.character : crew.job;
                const image = crew.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${crew.profile_path}`
                  : UnknownCrew;
                const id = crew.id;

                return (
                  <tr key={id}>
                    <td>
                      <img
                        src={image}
                        width="50px"
                        className="img-fluid rounded"
                        alt={name}
                      />
                    </td>
                    <td>{name}</td>
                    <td>{description ? description : 'Unknown'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CrewTable;
