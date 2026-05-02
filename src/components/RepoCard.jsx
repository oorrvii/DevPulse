function RepoCard({ repo }) {
    return (
        <div className="rounded-xl p-4 transition-all hover:scale-[1.02]"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
                <a
                href={repo.html_url}
                target="_blank"
                className="font-semibold text-sm hover:underline"
                style={{ color: '#a78bfa' }}
            >
                {repo.name}
            </a>
            <p className="text-xs mt-1 mb-3" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {repo.description || 'No description'}
            </p>
            <div className="flex gap-4 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                <span>{repo.language || 'Unknown'}</span>
                <span>⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
            </div>
        </div>
    )
}
export default RepoCard;