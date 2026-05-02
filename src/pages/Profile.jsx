import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import RepoCard from '../components/RepoCard';
import Charts from '../components/Charts';

function Profile() {
    const { username } = useParams();
    const [userData, setUserData] = useState(null);
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);

        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    setError('User not found. Please check the username.')
                } else {
                    setUserData(data)
                }
            })

        fetch(`https://api.github.com/users/${username}/repos`)
            .then(response => response.json())
            .then(data => {
            if(Array.isArray(data)) setRepos(data)
            setLoading(false)
            })
    }, [username]);

    const getLanguageData = () => {
        const languageCount = {};
        repos.forEach(repo => {
            if (repo.language) {
                languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
            }
        });
        return Object.entries(languageCount).map(([language, count]) => ({
            language,
            count
        }))
    }

    const languageData = getLanguageData()

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-white text-lg font-semibold animate-pulse">Loading...</p>
        </div>
    )

    if (error) return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-red-400 text-lg font-semibold">{error}</p>
        </div>
    )

    return (
        <div className="min-h-screen px-4 py-8">
            <div className="max-w-5xl mx-auto">
                {userData && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="md:col-span-1">
                            <ProfileCard userData={userData} />
                        </div>
                        <div className="md:col-span-2">
                            <Charts languageData={languageData} />
                        </div>
                    </div>
                )}
                <h3 className="text-white font-bold mb-4">Repositories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {repos.map(repo => (
                        <RepoCard key={repo.id} repo={repo} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Profile;