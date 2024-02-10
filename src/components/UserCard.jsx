const UserCard = ({ avatarUrl, name, profileUrl, userType, isAdmin }) => {
  return (
    <div className="user">
      <figure>
        <img src={avatarUrl} alt={name} />
        <figcaption>
          <a href={profileUrl} target="_blank" rel="noreferrer">
            {name}
          </a>
          <p>Status: {userType}</p>
          <p>
            Admin: <span>{isAdmin ? "Yes" : "No"}</span>
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default UserCard;
