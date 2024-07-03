import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: calc(100% - 48px);
  height: 100%;
  padding: 1.75rem 2.75rem;
  flex-direction: row;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
  ${({ theme }) => theme.typography.m3.semibold}
  grid-area: 독서행사달력;
  margin: 0 24px;
`;

export const Layer = styled.div`
  width: calc(45% - 2rem);
  height: 100%;
  * {
    border: none;
    line-height: 1.4rem;
    text-align: center;
    text-decoration: none;
  }
  .react-calendar__navigation {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    button {
      ${({ theme }) => theme.typography.m1.semibold}
    }
    abbr[title] {
      text-decoration: none;
    }
    span {
      word-break: keep-all;
    }
  }
  .react-calendar__navigation__label {
    position: absolute;
    left: 0.8rem;
    pointer-events: none;
  }
  .react-calendar__navigation__prev-button {
    position: absolute;
    right: 2rem;
    color: #7eaf72;
  }
  .react-calendar__navigation__next-button {
    position: absolute;
    right: 0;
    color: #7eaf72;
  }
  .react-calendar__month-view__weekdays {
    display: none !important;
  }
  .react-calendar__month-view__days {
    background: none;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    button {
      background: transparent;
      color: var(--BLACK-black, #333);
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      ${({ theme }) => theme.typography.m2.regular}

      padding: 0.35rem;
      abbr {
        text-align: center;
        max-width: 24px;
        max-height: 24px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      :hover {
        background: none;
      }
    }
  }
  .react-calendar__tile--active {
    abbr {
      flex: 0;
      background: rgba(126, 175, 114, 0.1);

      font-weight: 700;
      color: #7eaf72;
      border-radius: 50%;
    }
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    opacity: 0;
  }
  .react-calendar__tile--active:enabled:hover {
    background: none;
  }
  .react-calendar__tile--active:enabled:focus {
    background: none;
  }
  .react-calendar__navigation__prev2-button {
    display: none;
  }
  .react-calendar__navigation__next2-button {
    display: none;
  }
`;

export const Division = styled.div`
  width: 0.0625rem;
  height: 100%;
  margin: 0 2rem;
  flex-shrink: 0;
  background: var(--GRAY-200, #eff0f2);
`;

export const EventContainer = styled.div`
  width: calc(55% - 2rem);
  height: 100%;
`;

export const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background-color: #7eaf72;
  border-radius: 50%;
  margin-top: 0.5rem;
`;

export const EventItem = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
`;

export const EventTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 0.75rem;
  ${({ theme }) => theme.typography.m2.semibold}
  height:1.5rem;
`;

export const EventDescription = styled.div`
  width: 100%;
  ${({ theme }) => theme.typography.m3.regular}
`;

export const EventTitleItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  p {
    color: #b4b5b7;
    ${({ theme }) => theme.typography.label.regular}
  }
`;
