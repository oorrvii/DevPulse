import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (username.trim()) navigate(`/profile/${username}`);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSearch();
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <div className="text-center mb-10">
                <h1 className="text-6xl font-bold mb-3"
                    style={{ background: 'linear-gradient(90deg, #a78bfa, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    DevPulse
                </h1>
                <p className="text-sm tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    GITHUB PROFILE ANALYZER
                </p>
            </div>

            <div className="w-full max-w-lg flex gap-3">
                <input
                    type="text"
                    placeholder="Enter GitHub username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 px-4 py-3 rounded-xl text-white text-sm outline-none"
                    style={{
                        background: 'rgba(255,255,255,0.07)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(10px)'
                    }}
                />
                <button
                    onClick={handleSearch}
                    className="px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all"
                    style={{ background: 'linear-gradient(90deg, #7c3aed, #2563eb)' }}
                >
                    Search
                </button>
            </div>
        </div>
    )
}
export default Home;