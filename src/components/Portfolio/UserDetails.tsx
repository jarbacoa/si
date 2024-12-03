import React from 'react';
import { usePrivy } from '@privy-io/react-auth';
import { formatDistanceToNow } from 'date-fns';

export function UserDetails() {
  const { user, login } = usePrivy();

  if (!user) return null;

  const joinedDate = user.createdAt ? formatDistanceToNow(new Date(user.createdAt * 1000), { addSuffix: true }) : null;
  const handle = user.customMetadata?.handle;
  const handleCreatedAt = user.customMetadata?.handleCreatedAt;

  return (
    <div className="bg-purple-500 rounded-3xl mx-4 mt-4 p-6 text-white">
      <div className="space-y-6">
        {/* Handle Section */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-yellow-300 text-sm font-semibold">Handle</h3>
            <p className="font-mono text-xl">
              {handle ? `@${handle}` : 'No handle set'}
            </p>
          </div>
          {handleCreatedAt && (
            <span className="text-xs opacity-60">
              Set {formatDistanceToNow(handleCreatedAt, { addSuffix: true })}
            </span>
          )}
        </div>

        {/* Wallet Section */}
        {user.wallet && (
          <div>
            <h3 className="text-yellow-300 text-sm font-semibold mb-2">Wallet</h3>
            <div className="bg-purple-400/20 rounded-xl p-3">
              <p className="font-mono text-sm break-all">{user.wallet.address}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs bg-purple-400/30 px-2 py-1 rounded-full">
                  {user.wallet.walletClientType === 'privy' ? 'Embedded Wallet' : 'External Wallet'}
                </span>
                {user.wallet.chainId && (
                  <span className="text-xs bg-purple-400/30 px-2 py-1 rounded-full">
                    Chain ID: {user.wallet.chainId}
                  </span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Email Section */}
        {user.email && (
          <div>
            <h3 className="text-yellow-300 text-sm font-semibold">Email</h3>
            <p className="font-mono">{user.email.address}</p>
            {user.email.verified && (
              <span className="inline-block mt-1 text-xs bg-green-400/20 text-green-300 px-2 py-1 rounded-full">
                Verified
              </span>
            )}
          </div>
        )}

        {/* Account Info */}
        <div className="pt-2 border-t border-white/10">
          <div className="flex items-center justify-between text-sm">
            <span className="opacity-60">Joined</span>
            <span>{joinedDate}</span>
          </div>
          <div className="flex items-center justify-between text-sm mt-2">
            <span className="opacity-60">User ID</span>
            <span className="font-mono text-xs">{user.id.slice(0, 16)}...</span>
          </div>
        </div>
      </div>
    </div>
  );
}