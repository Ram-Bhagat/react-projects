import { useLoaderData } from 'react-router-dom';

export default function Github() {
  const data = useLoaderData();
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 gap-3">
      <div className="flex flex-col items-center">
        <div className="relative rounded-full overflow-hidden w-36 h-36 mb-4 shadow-lg">
          <img src={data.avatar_url} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity flex justify-center items-center">
            <a href={data.html_url} target="_blank" rel="noopener noreferrer" className="text-white font-semibold text-lg hover:underline">View Profile</a>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">{data.login}</h1>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Followers: {data.followers}</h2>
        <h2 className="text-lg font-semibold mb-4">Following: {data.following}</h2>
        <h2 className="text-lg font-semibold mb-4">Public Repositories: {data.public_repos}</h2>
        <h2 className="text-lg font-semibold mb-4">Bio: {data.bio}</h2>
        <h2 className="text-lg font-semibold mb-4">Location: {data.location}</h2>
      </div>
    </div>
  );
  
  
  
}

export async function githubProfileLoader() {
  const response = await fetch('https://api.github.com/users/Ram-Bhagat');
  return response;
}
