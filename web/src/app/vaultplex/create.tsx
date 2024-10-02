// We would like to create some central buttons to allow some easy creation flow.
import { useNavigate } from 'react-router-dom';
import NeonSquareButton from '../ui/neon-square-button';

export default function VaultplexCreatePage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="bg-gray-900 min-h-screen flex">
      <div className="container mx-auto p-4">
        <div className="flex items-center mb-6">
          <button
            onClick={handleBackClick}
            className="text-neon-violet border border-neon-violet px-4 py-2 rounded hover:bg-neon-violet hover:text-gray-900 transition"
          >
            Back
          </button>
          <h1 className="text-3xl font-bold ml-4 text-neon-violet">Create Vault</h1>
        </div>
      </div>
    </div>
  );
}
