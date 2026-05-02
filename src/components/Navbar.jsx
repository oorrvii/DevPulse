import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    return (
        <nav className="w-full px-8 py-4 flex items-center justify-between"
            style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <span
                onClick={() => navigate('/')}
                className="cursor-pointer font-bold text-xl tracking-tight"
                style={{ background: 'linear-gradient(90deg, #a78bfa, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
                DevPulse
            </span>
            <span className="text-xs tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>GITHUB ANALYZER</span>
        </nav>
    )
}
export default Navbar;