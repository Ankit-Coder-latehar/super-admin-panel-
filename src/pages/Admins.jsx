import React from 'react'
import AdminSidebar from '../components/Admins/AdminSidebar'
import DataTable from "../components/Admins/DataTable"

const Admins = () => {
  return (
    <div>
      <AdminSidebar />
      <div className='p-6 mt-4'>
        <DataTable />
      </div>

    </div>
  )
}

export default Admins
