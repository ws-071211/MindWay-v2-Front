import { useState } from 'react';
import * as S from './style';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import SeeMore from '@/asset/svg/SeeMore';

const EventCalendar = () => {
  const [date] = useState(new Date());

  return (
    <S.Container>
      <S.Layer>
        <Calendar
          value={date}
          calendarType='hebrew'
          locale='kr'
          formatDay={(locale, date) =>
            date.toLocaleString('en', { day: 'numeric' })
          }
        />
      </S.Layer>
      <S.Division />
      <S.EventContainer>
        <S.EventItem>
          <S.Dot />
          <S.EventDescription>
            <S.EventTitle>
              <S.EventTitleItem>
                가을 독서 행사
                <p>2023년 06월 20일</p>
              </S.EventTitleItem>
              <SeeMore />
            </S.EventTitle>
            독서의 계절, 가을을 맞아 도서관에서 특별한 이벤트를 준비했습니다.
          </S.EventDescription>
        </S.EventItem>
        <S.EventItem>
          <S.Dot />
          <S.EventDescription>
            <S.EventTitle>
              <S.EventTitleItem>
                가을 독서 행사
                <p>2023년 06월 20일</p>
              </S.EventTitleItem>
              <SeeMore />
            </S.EventTitle>
            독서의 계절, 가을을 맞아 도서관에서 특별한 이벤트를 준비했습니다.
          </S.EventDescription>
        </S.EventItem>
      </S.EventContainer>
    </S.Container>
  );
};

export default EventCalendar;
