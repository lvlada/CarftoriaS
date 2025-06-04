import { ProfilCard } from './ProfilCard';

const ProfileCards = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <ProfilCard key={user.id} user={user} />
      ))}
    </>
  );
};
export { ProfileCards };
