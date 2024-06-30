import Notice from '@/asset/svg/Notice';
import * as S from './style';

const NotificationHeader = () => {
  return (
    <S.NoticeContainer>
      <Notice />
      <S.TextContainer>
        <h2>가을 독서 행사</h2>
        <p>
          독서의 계절, 가을을 맞아 <br />
          도서관에서 특별한 이벤트를 준비했습니다.
        </p>
      </S.TextContainer>
    </S.NoticeContainer>
  );
};

export default NotificationHeader;
