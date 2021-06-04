import React from 'react'
import Test from '../../components/Test'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/reducers/index'

export default function index() {
  const viewState: RootState = useSelector((state: RootState) => state)
  return <Test />
}
