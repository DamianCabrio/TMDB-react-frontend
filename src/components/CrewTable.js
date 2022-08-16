const CrewTable = ({ crewList, isCast }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h2 className="card-title">{ isCast ? 'Cast' : 'Crew' }</h2>
        <div className="crew-table">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
              </tr>
            </thead>
            <tbody>
              {crewList
                .map((crew, index) => {
                  const crewDescription = isCast ? crew.character : crew.job;
                  return (
                    <tr key={index}>
                      <td>
                        <img
                          src={
                            crew.profile_path
                              ? `https://image.tmdb.org/t/p/w500/${crew.profile_path}`
                              : 'https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg'
                          }
                          width='50px'
                          className="img-fluid rounded"
                          alt={crew.name}
                        />
                      </td>
                      <td>{crew.name}</td>
                      <td>{crewDescription ? crewDescription : "Unknown"}</td>
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
