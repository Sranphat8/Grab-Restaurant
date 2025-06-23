const Card = ({ img, title, type }) => {
  return (
    <div className="card w-80 bg-base-100 shadow-md">
      <figure>
        <img src={img} alt={title} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base">{title}</h2>
        <p className="text-sm text-gray-500">{type}</p>
        <div className="card-actions justify-end mt-3">
          <button className="btn btn-error btn-sm">Delete</button>
          <button className="btn btn-warning btn-sm">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default Card;