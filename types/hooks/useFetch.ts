import { Method } from 'axios';

interface fetchType {
  url: string;
  method: Method;
  successEvent?: () => void;
  successMessage?: string;
  failureMessage?: string;
}

export default fetchType