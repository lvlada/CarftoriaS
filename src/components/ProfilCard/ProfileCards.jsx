import { ProfilCard } from './ProfilCard';
import { usersList } from '@/fake_data/usersList';

const ProfileCards = () => {
  return (
    <>
      {usersList.map((user) => (
        <ProfilCard key={user.id} user={user} />
      ))}
    </>
  );
};
export { ProfileCards };
