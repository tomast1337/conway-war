import { useRef } from "react";

import "./ProfileInput.css";

const ProfileInput = ({
  createProfile,
}: {
  createProfile: (username: string) => void;
}) => {
  const username = useRef<HTMLInputElement>(null);
  async function handleCreateProfile(
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    if (!username.current) return;
    if (username.current.value) {
      await createProfile(username.current.value);
    }
  }

  return (
    <form className="profile__form" onSubmit={handleCreateProfile}>
      <input
        className="profile__form__input"
        type="text"
        name="ProfileInput"
        ref={username}
        required
      />
      <button className="profile__form__submit" type="submit">
        SELECT PLAYER
      </button>
    </form>
  );
};

export default ProfileInput;
