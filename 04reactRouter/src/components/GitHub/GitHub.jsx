import { useLoaderData } from 'react-router-dom';

function GitHub() {
    const data = useLoaderData();

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
            <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full text-center space-y-6">
                <img
                    src={data.avatar_url}
                    alt="GitHub Avatar"
                    className="mx-auto w-40 h-40 rounded-full shadow-lg object-cover"
                />
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                    {data.login}
                </h1>
                <p className="text-gray-700 text-lg">
                    GitHub Followers: <span className="font-semibold text-gray-900">{data.followers}</span>
                </p>
                <a
                    href={data.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-600 hover:to-yellow-500 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                >
                    View Profile
                </a>
            </div>
        </div>
    );
}

export default GitHub;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/yash9312');
    return response.json();
};
