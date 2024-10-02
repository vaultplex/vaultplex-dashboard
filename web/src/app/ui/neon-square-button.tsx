import { Link } from 'react-router-dom'; // For routing

const NeonSquareButton = ({ to, label }: { to: string; label: string; }) => {
  return (
    <Link to={to} className="group">
      <div className="relative flex items-center justify-center w-full sm:w-48 h-48 border-4 border-neon-violet green rounded-lg transition-all duration-300 group-hover:scale-105">
        <span className="text-neon-text font-bold text-xl transition-all duration-300 group-hover:text-white">
          {label}
        </span>
        {/* Neon darker gradient background */}
        <div className="absolute inset-0 rounded-lg bg-neon-gradient-dark opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        {/* Neon border pulse effect */}
        <div className="absolute inset-0 rounded-lg border-4 border-neon-green group-hover:border-neon-green/80 animate-pulse"></div>
      </div>
    </Link>
  );
};

export default NeonSquareButton;
