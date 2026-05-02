function ProfileCard({ userData }) {
    return (
        <div className="rounded-2xl p-6 flex flex-col items-center text-center h-full"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
            <img
                src={userData.avatar_url}
                alt="avatar"
                className="w-24 h-24 rounded-full mb-4"
                style={{ border: '2px solid rgba(167,139,250,0.6)' }}
            />
            <h2 className="text-white font-bold text-xl mb-1">{userData.name || 'No name provided'}</h2>
            <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>{userData.bio || 'No bio available'}</p>

            <div className="flex gap-6 w-full justify-center">
                <div className="text-center">
                    <p className="font-bold text-lg" style={{ color: '#a78bfa' }}>{userData.followers}</p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Followers</p>
                </div>
                <div className="text-center">
                    <p className="font-bold text-lg" style={{ color: '#a78bfa' }}>{userData.following}</p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Following</p>
                </div>
                <div className="text-center">
                    <p className="font-bold text-lg" style={{ color: '#a78bfa' }}>{userData.public_repos}</p>
                    <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>Repos</p>
                </div>
            </div>
        </div>
    )
}
export default ProfileCard;