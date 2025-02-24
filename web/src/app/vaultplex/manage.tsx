// We would like to create some central buttons to allow some easy creation flow.
import NeonSquareButton from '../ui/neon-square-button';

export default function VaultplexManagePage() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap items-center justify-center min-h-screen p-4 bg-gray-900">
          {/* Manage Button */}
          <div className="flex-1 p-2 max-w-xs">
            <NeonSquareButton to="/dashboard/manage" label="Manage" />
          </div>
        </div>
      </div>
    </div>
  );
}
