import React from 'react'
import SeoSidebar from '../components/SeoSidebar'
import SearchBar from '../components/seoContents/SeoContent'
import SeoTable from '../components/seoContents/SeoTable'

const SeoContent = () => {
  return (
    <div>
      <SeoSidebar/>
      <SearchBar/>
      <SeoTable/>
    </div>
  )
}

export default SeoContent
