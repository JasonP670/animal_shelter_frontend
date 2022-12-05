import { useCallback, useState } from 'react';

export default function usePostImage({ url, image = '' }) {
  const [res, setRes] = useState({ data: null, error: null, isLoading: false });

  const sendImage = useCallback(async () => {
    const formData = new FormData();
    formData.append('image', image);
    setRes((s) => ({ ...s, isLoading: true }));
    await fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(async (resp) => {
        const response = await resp.json();
        setRes({ data: response, isLoading: false, error: null });
      })
      .catch((err) => setRes({ data: null, error: err, isLoading: false }));
  }, [image, url]);
  return [res, sendImage];
}
