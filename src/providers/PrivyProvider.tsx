import { PrivyProvider as BasePrivyProvider } from '@privy-io/react-auth';

const blastChain = {
  id: 168587773,
  name: 'Blast',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.blast.io'],
    },
    public: {
      http: ['https://rpc.blast.io'],
    },
  },
  blockExplorers: {
    default: {
      name: 'BlastScan',
      url: 'https://blastscan.io',
    },
  },
  testnet: false,
};

export function PrivyProvider({ children }: { children: React.ReactNode }) {
  return (
    <BasePrivyProvider
      appId="cm43auhef001d70jozvlxrayu"
      config={{
        appearance: {
          theme: 'light',
          accentColor: '#8B5CF6', // Purple-500
          logo: 'https://your-logo-url',
        },
        embeddedWallets: {
          createOnLogin: 'always',
          noPromptOnSignature: true,
        },
        loginMethods: ['email', 'wallet'],
        defaultChain: blastChain,
        supportedChains: [blastChain],
      }}
    >
      {children}
    </BasePrivyProvider>
  );
}