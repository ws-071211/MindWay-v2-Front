import { instance } from '@/apis';
import * as S from './style';
import RankingVerticalBar from '@/asset/svg/RankingVerticalBar';
import RankingVerticalBarNone from '@/asset/svg/RankingVerticalBarNone';
import { useEffect, useState } from 'react';

const ReadinKing = () => {
  const [rank, setRank] = useState([]);

  const fetchEvent = async () => {
    try {
      const { data } = await instance.get(`/rank`);
      console.log(data);
      setRank(data);
    } catch (error) {
      setRank([]);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  const MaxAccrue = Math.max(...rank.map((user) => user.accrue), 0);

  return (
    <S.Container>
      <S.Title>이달의 독서왕</S.Title>
      <S.DayListcontainer>
        {rank.map((user) => (
          <S.DayList key={user.id}>
            {user.accrue}권
            <RankingVerticalBar before={MaxAccrue} after={user.accrue} />
            {user.name}
          </S.DayList>
        ))}
        {rank.length < 3 &&
          Array.from({ length: 3 - rank.length }).map((_, index) => (
            <S.DayList key={`none-${index}`}>
              <RankingVerticalBarNone />
            </S.DayList>
          ))}
      </S.DayListcontainer>
    </S.Container>
  );
};

export default ReadinKing;
