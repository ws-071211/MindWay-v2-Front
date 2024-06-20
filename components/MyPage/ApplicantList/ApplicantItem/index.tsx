import { DeleteButtonIcon, EditButtonIcon, LinkIcon } from '@/asset';
import * as S from './style';
import { useState } from 'react';
import DeleteModal from '../../DeleteModal';
import { BookInfoType } from '@/types';
import { useRouter } from 'next/router';

const ApplicantItem = ({
  id,
  student,
  title,
  author,
  book_url,
}: BookInfoType) => {
  const [isShow, setIsShow] = useState<string>('none');
  const router = useRouter();
  const bookData = {
    id: id,
    title: title,
    author: author,
    book_url: book_url,
  };

  return (
    <>
      <S.ApplicantItem>
        <S.BookTextContainer>
          <S.StudentNameText>{student}</S.StudentNameText>
          <S.TitleText>{title}</S.TitleText>
          <S.AuthorText>{author}</S.AuthorText>
        </S.BookTextContainer>
        <S.ToolBox>
          <S.ToolButton onClick={() => router.push(book_url)}>
            <LinkIcon />
          </S.ToolButton>
          <S.ToolButton onClick={() => setIsShow('delete')}>
            <DeleteButtonIcon />
          </S.ToolButton>
        </S.ToolBox>
      </S.ApplicantItem>
      {isShow === 'delete' && (
        <DeleteModal item={bookData} onClose={() => setIsShow('')} />
      )}
    </>
  );
};

export default ApplicantItem;
