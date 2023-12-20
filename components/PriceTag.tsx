import React from 'react'
import formatPrice from '@/lib/format'

interface PriceTagProps {
    price: number,
    className?: string
}

const PriceTag = ({price, className} : PriceTagProps) => {
  return (
    <span >
        {formatPrice(price)}
    </span>
  )
}

export default PriceTag