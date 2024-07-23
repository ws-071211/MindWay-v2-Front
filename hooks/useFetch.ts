import { instance } from '@/apis';
import { ErrorIcon, SuccessIcon } from '@/asset';
import toastOption from '@/lib/toastOption';
import fetchType from '@/types/hooks/useFetch';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';

const useFetch = ({
  method,
  url,
  failureMessage,
  successEvent,
  successMessage,
}: fetchType) => {
  const [data, setData] = useState();

  const fetch = useCallback(
    async (body?: any) => {
      try {
        const { data } = await instance({
          url,
          method,
          data: body,
        });
        setData(data);

        if (successMessage)
          toast.success(successMessage, { ...toastOption, icon: SuccessIcon });

        if (successEvent) successEvent();

      } catch (error) {
        if (failureMessage)
          toast.error(failureMessage, { ...toastOption, icon: ErrorIcon });
      }
    },
    [method, url, failureMessage, successEvent, successMessage],
  );
  return { fetch, data };
};

export default useFetch;
