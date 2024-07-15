import { PlusIcon } from '@/asset';
import * as S from './style';
import { useEffect, useState } from 'react';
import RecommandItem from './RecommandItem';
import { RecommendBookType, RecommendType } from '@/types';
import { instance } from '@/apis';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import RecommendModal from './RecommendModal';
import AlertModal from './AlertModal';
import ApplicantModal from './ApplicantModal';

const BookPage = () => {
  const [selected, setSelected] = useState<boolean>(true);
  const [modal, setModal] = useState<string>('');
  const [type, setType] = useState<RecommendType>('NOVEL');
  const [book, setBook] = useState<RecommendBookType[]>([]);
  const user = useSelector((state: RootState) => state.user);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchBook = async () => {
    try {
      const { data } = await instance.get(`/recommend`, {
        params: {
          type: type,
        },
      });    
      
      setBook(data);
    } catch (error) {
      console.error(error);
    }
  };

  const changeType = () => {
    setSelected(!selected);
    setType(selected ? 'ESSAY' : 'NOVEL');
  };

  useEffect(() => {
    if(modal!=='')return;
    fetchBook();
  }, [type, modal, fetchBook]);

  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.SelectionContainer>
            <S.SelectedTitle onClick={() => changeType()} selected={!!selected}>
              Novel
            </S.SelectedTitle>
            <S.SelectedTitle onClick={() => changeType()} selected={!selected}>
              Essay
            </S.SelectedTitle>
          </S.SelectionContainer>
          <S.PlusContainer onClick={() => setModal('Alert')}>
            <PlusIcon color='#333333' />
          </S.PlusContainer>
        </S.Header>
        <S.RecommandList>
          {user.authority !== 'ROLE_STUDENT' && (
            <S.AddApplicantButton onClick={()=>setModal('Recommend')}>
              <S.PlusContainer>
                <PlusIcon color='#7EAF72' />
              </S.PlusContainer>
            </S.AddApplicantButton>
          )}
          {
            book?.map((item) => (
              <RecommandItem
                key={item.id}
                id={item.id}
                title={item.title}
                author={item.author}
                content={item.content}
              />
            ))}
        </S.RecommandList>
      </S.Wrapper>
      {modal === 'Alert' && <AlertModal onClose={() => setModal('Applicant')} />}
      {modal === 'Applicant' && <ApplicantModal onClose={() => setModal('')} />}
      {modal === 'Recommend' && <RecommendModal onClose={() => setModal('')} type={type}/>}
    </>
  );
};

export default BookPage;
