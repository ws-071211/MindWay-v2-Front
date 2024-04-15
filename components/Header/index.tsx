import { useEffect, useState } from 'react';
import { HeaderLogo } from '../../asset/svg';
import * as S from './style';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [selected, setSelected] = useState(0);
  const router = useRouter();
  const param = usePathname();

  const handlePage = (index: number) => {
    setSelected(index);
    if (index === 0) {
      router.push('/');
    } else if (index === 1) {
      router.push('/book');
    } else if (index === 2) {
      router.push('/my');
    }
  };

  useEffect(() => {
    if (param === '/') {
      setSelected(0);
    } else if (param === '/book') {
      setSelected(1);
    } else if (param === '/my') {
      setSelected(2);
    } else {
      router.push('/404');
    }
  }, []);

  return (
    <S.HeaderContainer>
      <S.LogoContainer onClick={() => router.push('/')}>
        <HeaderLogo />
      </S.LogoContainer>
      <S.TextContainer>
        {['메인', '도서', '마이'].map((item, index) => (
          <S.SelectionText
            onClick={() => handlePage(index)}
            key={index}
            selection={selected === index}
          >
            {item}
          </S.SelectionText>
        ))}
      </S.TextContainer>
      <S.EmptyContainer />
    </S.HeaderContainer>
  );
};

export default Header;
