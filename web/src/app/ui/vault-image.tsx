import { useWallet } from '@solana/wallet-adapter-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const VaultImageComponent = () => {
  const wallet = useWallet();
  const navigate  = useNavigate();

  console.log(wallet);

  const handleImageClick = () => {
    // We check if the wallet is connected. If yes, we will route to the internal page.
    // otherwise, we show a notification to login in their solana wallet

    if (wallet.connected) {
      navigate('/dashboard/root');

    } else {
      alert('connect your wallet!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img
        src="./assets/vault_center.png"
        alt="Welcome to Vaultplex"
        className="cursor-pointer mb-4"
        onClick={handleImageClick}
      />
    </div>
  );
};

export default VaultImageComponent;
