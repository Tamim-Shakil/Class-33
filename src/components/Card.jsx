
export default function Card({data}) {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        {/* <img src={User.pictures.large} alt="Movie" */}
    <div className="card-body">
        <h2 className="card-title">{data.title}</h2>
        <p>{data.body}</p>
        {/* <p>{user.phone}</p> */}
        <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
}





