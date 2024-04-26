import ReactDOM from 'react-dom';
import { PortalProps } from '@/types';
import { MouseEvent, useState, cloneElement, useEffect } from 'react';
import * as S from './style';

const Portal = ({ children, onClose }: PortalProps) => {
  const [mounted, setMounted] = useState<boolean>(false);

  const portal = document.getElementById('modal');
  if (!portal) throw new Error('not found modal');

  if (typeof window === 'undefined') return <></>;

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    ReactDOM.createPortal(
      <S.Wrapper onClick={onClose}>
        {cloneElement(children, { onClick })}
      </S.Wrapper>,
      portal
    )
  ) : (
    <></>
  );
};

export default Portal;
