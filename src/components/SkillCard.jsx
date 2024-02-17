import React from 'react'

const SkillCard = ({skillName, skillIcon}) => {
  return (
    <div className=' w-36 h-36 border border-gray rounded-2xl flex gap-6 flex-col items-center justify-center'>
        
        <div className=' text-xl text-white'>{skillIcon}</div>
        <h3 className=' text-xl text-textPrimary'>{skillName}</h3>
    </div>
  )
}

export default SkillCard