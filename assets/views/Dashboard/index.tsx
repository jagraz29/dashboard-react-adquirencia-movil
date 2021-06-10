import React, { useState, useEffect } from 'react'
import AvatarDashboard from '../../components/AvatarDashboard/'
import { IconLink } from '../../config/configImages'
import { StorageData } from '../../services/storegeData'

import {
  Content,
  ContentPay,
  ContentAvatar,
  ContentLink,
  TextWolcome,
  TextItem1,
  ButtonLink,
  TitleLink,
  ButtonImg,
  ButtonText,
  ContentItems,
  CardTrasactionOk,
  CardPending,
  CardTransactionTitle,
  CardTransactionCount,
  CardTransactionDetails,
  ContentTable,
  CardTableTitle,
  SpanTitle,
} from './styles'

import TablaDashboard from '../../components/TableDashboard'
import { datos } from './data'

const index = () => {
  const [dataUser, setDataUser] = useState(new StorageData().getData())

  useEffect(() => {
    setDataUser(new StorageData().getData())
  }, [dataUser])

  return (
    <div>
      <Content>
        <ContentPay>
          <ContentAvatar>
            <AvatarDashboard srcImage={dataUser.logo}></AvatarDashboard>
            <TextWolcome>¡ Hola {dataUser.companyName} !</TextWolcome>
            <TextItem1>Ya puedes empezar a cobrar. Tipo de cuenta: Personal</TextItem1>
          </ContentAvatar>
          <ContentLink>
            <TitleLink>Herramienta de cobro</TitleLink>
            <ButtonLink>
              <ButtonImg src={IconLink.url} />
              <ButtonText>Crear y comparti un link de cobro</ButtonText>
            </ButtonLink>
          </ContentLink>
        </ContentPay>
        <ContentItems>
          <CardTrasactionOk>
            <CardTransactionTitle>Transacciones aprobadas</CardTransactionTitle>
            <CardTransactionCount>0</CardTransactionCount>
            <CardTransactionDetails>Ver detalles</CardTransactionDetails>
          </CardTrasactionOk>
          <CardPending>
            <CardTransactionTitle>Transacciones pendientes</CardTransactionTitle>
            <CardTransactionCount>0</CardTransactionCount>
            <CardTransactionDetails>Ver detalles</CardTransactionDetails>
          </CardPending>
        </ContentItems>
        <ContentTable>
          <CardTableTitle>Últimas Transacciones</CardTableTitle>
          <TablaDashboard data={datos} />
        </ContentTable>
      </Content>
    </div>
  )
}

export default index
