import { useSelector } from 'react-redux';
import { Header } from '../components';
import { RootState } from '@/store';

export default function Home() {
  const d = useSelector((state:RootState)=>state.user);
  console.log(d)
  return (
    <>
      <Header />
    </>
  );
}
