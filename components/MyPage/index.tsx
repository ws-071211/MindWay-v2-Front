import { useState } from 'react';
import MyList from './MyList';
import ApplicantList from './ApplicantList';

const Mypage = () => {
  const [page, setPage] = useState<boolean>(true);
  return (
    <>
      {page ? (
        <MyList onClose={() => setPage(false)} />
      ) : (
        <ApplicantList onClose={() => setPage(true)} />
      )}
    </>
  );
};

export default Mypage;
