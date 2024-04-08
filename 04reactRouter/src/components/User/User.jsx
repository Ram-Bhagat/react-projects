import { useParams } from 'react-router-dom';

export default function User() {
  const { userId } = useParams();

  return (
    <>
      <h1 className='p-10 bg-gray-500 text-white text-center text-2xl'>UserId: {userId}</h1>
    </>
  );
}
