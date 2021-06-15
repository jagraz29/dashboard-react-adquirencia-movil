import React from 'react'
import Title from '../../components/Title'
import { IconLink } from '../../config/configImages'
import Breadcrumbs from '../../components/Breadcrumbs/'
import TablaDashboard from '../../components/TableDashboard'
import { datos } from './data'
import {
  Content,
  ContentTitle,
  ButtonLink,
  ButtonLinkTitle,
  ButtonLinkImg,
  ButtonLinkText,
  ContentTable,
  CardTableTitle,
} from './styles'
import { useHistory } from 'react-router-dom'

const breadcrumb = [
  {
    title: 'Inicio',
    path: '/dashboard',
    active: true,
  },
  {
    title: 'Cobra',
    path: '/cobra',
    active: true,
  },
]

const dataTitle = [
  'Ref.Payco',
  'Ref.Client',
  'Descripción',
  'Medio de pago',
  'Valor',
  'Moneda',
  'Estado',
]

const Cobra = () => {
  const history = useHistory()

  const redirectRoute = (path: string) => {
    history.push(path)
  }

  return (
    <div>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <Title title={'Cobra'}></Title>
      <Content>
        <ContentTitle>Comience a cobrar/vender.</ContentTitle>
        <ButtonLink onClick={() => redirectRoute('/cobra/create')}>
          <ButtonLinkTitle>Link de cobro</ButtonLinkTitle>
          <ButtonLinkImg src={IconLink.url} />
          <ButtonLinkText>Crea vinculos de cobro, y compártalos por donde quiera.</ButtonLinkText>
        </ButtonLink>
        <ContentTable>
          <CardTableTitle>Cobros</CardTableTitle>
          <TablaDashboard data={datos} titleData={dataTitle} />
        </ContentTable>
      </Content>
    </div>
  )
}

export default Cobra
