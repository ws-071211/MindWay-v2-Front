import ReactDOM from 'react-dom';
import { PortalProps } from '@/types';
import { MouseEvent, useState, cloneElement, useEffect } from 'react';
import * as S from './style';

const Portal = ({ children, onClose }: PortalProps) => {
  const [mounted, setMounted] = useState<boolean>(false);

  const portal = document.getElementById('modal');
  if (!portal) throw new Error('not found modal');

  
  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (typeof window === 'undefined') return <></>;

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
