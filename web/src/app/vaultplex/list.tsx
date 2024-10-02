// We would like to create some central buttons to allow some easy creation flow.
import NeonSquareButton from '../ui/neon-square-button';

export default function VaultplexListPage() {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4"></div>
      <div className="flex flex-wrap items-center justify-center min-h-screen p-4 bg-gray-900">
        {/* List Button */}
        <div className="flex-1 p-2 max-w-xs">
          <NeonSquareButton to="/dashboard/list" label="List" />
        </div>
      </div>
    </div>
  );
}
