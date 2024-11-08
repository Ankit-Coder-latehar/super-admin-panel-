import React from 'react'
import FakeBusinessSidebar from '../components/FakeBusinessSidebar'
import FakeBusinesses from '../components/FakeBusiness/FakeBusiness'
import FakeBusinessTable from '../components/FakeBusiness/FakeBusinessTable'

const FakeBusiness = () => {
  return (
    <div>
      <FakeBusinessSidebar/>
      <FakeBusinesses/>
       <FakeBusinessTable/>
    </div>
  )
}

export default FakeBusiness
