import { useParams } from 'react-router';
import { BookingPage } from './BookingPage';
import { useQuery } from '@tanstack/react-query';
import { getCraftman } from '@/services/api';
import style from './BookingPageContainer.module.scss';

const BookingPageContainer = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ['caftman', id],
    queryFn: () => getCraftman(id)
  });
  if (isLoading) return <div>Loading....</div>;

  return (
    <section className={style.bookingPage}>
      <BookingPage user={data} />
    </section>
  );
};

export { BookingPageContainer };
