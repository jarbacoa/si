import React from 'react';

export function PortfolioIcon({ className = "" }: { className?: string }) {
  return (
    <img 
      src="https://cdn.discordapp.com/attachments/1263481051276251190/1312208456236929165/double_shut_dark.png?ex=674ba8db&is=674a575b&hm=2237d4679f275f11fa791dbf740ef5d700351b8c5668e86b6292b3b19dde548a&"
      alt="Portfolio"
      className={`w-6 h-6 ${className}`}
    />
  );
}