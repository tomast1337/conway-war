import "./Profile.css";

const Profile = ({
  player,
}: {
  player: {
    avatar_url: string;
    profile_url: string;
    name: string;
    login: string;
    bio: string;
  };
}) => {
  const { avatar_url, profile_url, name, login, bio } = player;
  return (
    <section className="profile">
      <img className="profile__image" src={`${avatar_url}`} alt="" />
      <a target="_blank" rel="noreferrer" href={`${profile_url}`}>
        <h2 className="profile__name">{`${name}`}</h2>
        <h3 className="profile__login">{`${login}`}</h3>
      </a>
      <p className="profile__description">{`${bio}`}</p>
    </section>
  );
};

export default Profile;
