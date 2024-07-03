import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: var(--BACKGROUND_BG);
  display: grid;
  justify-content: center;
  gap: 3.5dvh;
  padding: 0 25vw 3dvh 25vw;
  overflow-y: auto;
  overflow-x: hidden;
  grid-template-areas:
    '공지  공지'
    '목표독서량  이달의독서왕 '
    '독서행사달력   독서행사달력';
  grid-template-rows: 202fr 247fr 352fr;
  grid-template-columns: 1fr 1fr;
`;
