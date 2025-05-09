import { Button, Input } from '@/components';

const HomePage = () => {
  return (
    <div>
      home page
      <Button variant="secondary">Vidi sve</Button>
      <Input placeholder={'Unesi ime, kategorije, mesto...'} />
    </div>
  );
};

export { HomePage };
