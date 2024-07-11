import { RecommendBookType } from '@/types';
import * as S from './style';

const RecommandItem = ({ title, author, content }: RecommendBookType) => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.TitleText>{title}</S.TitleText>
        <S.AuthorText>{author}</S.AuthorText>
      </S.Header>
      <S.SummaryText>{content}</S.SummaryText>
    </S.Wrapper>
  );
};

export default RecommandItem;
