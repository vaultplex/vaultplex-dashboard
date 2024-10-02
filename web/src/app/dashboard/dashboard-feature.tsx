import VaultImageComponent from '../ui/vault-image';

export default function DashboardFeature() {
  return (
    <div>
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <p>Welcome to Vaultplex. <br/><br/>The new protocol to manage your vaults. Click in the Vault to enter!</p>

          <VaultImageComponent />
        </div>
      </div>
    </div>
  );
}
