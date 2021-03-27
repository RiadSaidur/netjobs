import React from 'react'

import '../../css/base/baseSectionTitle.css'

interface Props {
  title: string;
}

const BaseSectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <p className="baseSectionTitle">
      { title }
    </p>
  )
}

export default BaseSectionTitle
