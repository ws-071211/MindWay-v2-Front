import { Method } from 'axios';

interface fetchType<T> {
  url: string;
  method: Method;
  successEvent?: (data?:T) => void;
  successMessage?: string;
  failureMessage?: string;
}

export default fetchType