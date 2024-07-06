import Portal from '@/components/Portal';
import { ModalPropsType } from '@/types';
import * as S from './style';
import Image from 'next/image';
import { BackgroundBook, Xmark } from '@/asset';

const IntroductionModal = ({ onClose }: ModalPropsType) => {
  return (
    <Portal onClose={onClose}>
      <S.Wrapper>
        <S.HeaderContainer>
          <S.TitleText>MINDWAY 소개</S.TitleText>
          <S.XmarkContainer onClick={onClose}>
            <Xmark />
          </S.XmarkContainer>
        </S.HeaderContainer>
        <S.IntroductionContainer>
          <S.IntroductionTextContainer>
            <p>스마트한 도서실 알리미,</p>
            <h1>GSM 도서실 종합 서비스 입니다</h1>
            <S.Introductionbody>
              <Image src={BackgroundBook} alt='' />
              <p>
                도서부원이 추천하는 책과 도서실 이벤트를
                <br /> 모두 한 페이지에서 확인할 수 있어요.
                <br /> 도서부원이 추천하는 숨은 재미있는 책을
                <br /> 빌려 볼 수 있습니다.
                <br />
                친구들과 함께 독서에 관심을 가지고,
                <br />
                GSM 독서왕이 되어 보는 건 어떨까요?
                <br /> 마인드웨이가 여러분의 건강한 독서습관을 응원합니다!
              </p>
            </S.Introductionbody>
          </S.IntroductionTextContainer>
        </S.IntroductionContainer>
      </S.Wrapper>
    </Portal>
  );
};

export default IntroductionModal;
