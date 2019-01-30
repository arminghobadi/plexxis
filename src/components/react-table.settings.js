import React from 'react'

export const cols = [
  {
    Header: 'ID',
    accessor: 'id',
    Cell: props => <span style={{color: props.row._original.color}}>{props.value}</span>
  },
  {
    Header: 'Name',
    accessor: 'name'
  },
  {
    Header: 'Code',
    accessor: 'code'
  },
  {
    Header: 'Profession',
    accessor: 'profession'
  },
  {
    Header: 'City',
    accessor: 'city'
  },
  {
    Header: 'Branch',
    accessor: 'branch'
  },
  {
    Header: 'Assigned',
    accessor: 'assigned',
    Cell: props => <span>{props.value}</span>
  }
]