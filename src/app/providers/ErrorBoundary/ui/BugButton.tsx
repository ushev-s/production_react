import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

// Testing component
export const BugButton = () => {
  const [error, setError] = useState(false);

  const throwError = () => setError(true);

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return <Button onClick={throwError}>.....1111.....</Button>;
};
