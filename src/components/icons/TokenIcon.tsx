import React from 'react'

interface TokenIconProps {
  className?: string
  symbol: string
  icon: string
  size: string
}

const TokenIcon: React.FC<TokenIconProps> = ({
  className,
  symbol,
  size = '64',
  icon,
}) => {
  const iconUrl = icon?.startsWith('http') ? icon : `/icons/${icon}`
  return (
    <img
      className={className}
      src={iconUrl}
      alt={symbol}
      width={size}
      height={size}
    />
  )
}

export default TokenIcon
