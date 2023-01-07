import React from 'react'

const Card001 = ({ icon, title, amount, perc, bgColor, brdColor, prColor }) => {
  return (
    <div className={`${bgColor} rounded-xl border ${brdColor} max-w-md py-2`}>
        <div className='flex items-center space-x-3 px-7'>
            {icon}
            <p className={`text-lg font-normal text-[${prColor}]`}>{title}</p>
        </div>
        <div className='flex items-baseline ml-14 pt-2 space-x-4'>
            <p className='text-4xl font-normal text-black'>{amount}</p>
            <span className='text-sm text-green-500'>+{perc}%</span>
        </div>
    </div>
  )
}

export default Card001