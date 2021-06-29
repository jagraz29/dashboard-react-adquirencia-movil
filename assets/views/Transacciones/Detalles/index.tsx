import React, { useState } from 'react'
import Breadcrumbs from '../../../components/Breadcrumbs/'
import Title from '../../../components/Title'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../redux/reducers/index'
import * as BsIcons from 'react-icons/bs'
import * as AiIcons from 'react-icons/ai'
import {} from '../../../redux/actions/'
import {
  Content,
  ContentCard,
  Card,
  CardHeader,
  CardContent1,
  CardTitle,
  CardSubTitle,
  CardIcon,
  CardContent2,
  ContentItem,
  ItemTitle,
  ItemValue,
  ItemGroup,
  ItemGroup2,
  CardGroup,
  Card2,
  CardContent3,
  ButtonExportar,
  ButtonImg,
  CardContentButton,
  ButtonTransacciones,
  ContentLog,
  LogGroup,
  Log,
  LogItem,
  LogStatus,
  LogMetodo,
  LogHora,
} from './styles'
const breadcrumb = [
  {
    title: 'Inicio',
    path: '/dashboard',
    active: true,
  },
  {
    title: 'Transacciones',
    path: '/transacciones',
    active: false,
  },
  {
    title: 'Detalles de transaccion',
    path: '/transacciones',
    active: false,
  },
]

const TransaccionesDetalles = () => {
  let iconStyles = { color: '#d3d3d3' }
  let iconStylesExport = { size: '100px', color: '#d3d3d3' }
  const dispatch = useDispatch()
  let { id }: any = useParams()
  const [openCard, setOpenCard] = useState(false)
  const [openCardContent, setOpenCardContent] = useState({ display: 'none' })
  const [openCard1, setOpenCard1] = useState(false)
  const [openCardContent1, setOpenCardContent1] = useState({ display: 'none' })
  const [openCard2, setOpenCard2] = useState(false)
  const [openCardContent2, setOpenCardContent2] = useState({ display: 'none' })

  const openClose = () => {
    if (!openCard) {
      setOpenCard(true)
      setOpenCardContent({
        display: 'block',
      })

      //dispatch(getPropertySite())
    } else {
      setOpenCard(false)
      setOpenCardContent({
        display: 'none',
      })
    }
  }

  const openClose1 = () => {
    if (!openCard1) {
      setOpenCard1(true)
      setOpenCardContent1({
        display: 'block',
      })

      //dispatch(getPropertySite())
    } else {
      setOpenCard1(false)
      setOpenCardContent1({
        display: 'none',
      })
    }
  }

  const openClose2 = () => {
    if (!openCard2) {
      setOpenCard2(true)
      setOpenCardContent2({
        display: 'block',
      })

      //dispatch(getPropertySite())
    } else {
      setOpenCard2(false)
      setOpenCardContent2({
        display: 'none',
      })
    }
  }
  return (
    <div>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <Title title={`Detalles de transacción #${id}`}></Title>
      <Content>
        <ContentCard>
          <CardGroup>
            <Card>
              <CardHeader>
                <CardTitle>Detalle de transacción</CardTitle>
                <CardIcon onClick={() => openClose()}>
                  {openCard == false ? (
                    <BsIcons.BsFillCaretDownFill style={iconStyles} />
                  ) : (
                    <BsIcons.BsFillCaretUpFill style={iconStyles} />
                  )}
                </CardIcon>
              </CardHeader>
              <CardContent1 theme={openCardContent}>
                <ContentItem>
                  <ItemGroup>
                    <ItemTitle>Ref.Payco</ItemTitle>
                    <ItemValue>909643</ItemValue>
                  </ItemGroup>

                  <ItemGroup>
                    <ItemTitle>Valor Total</ItemTitle>
                    <ItemValue>$120,000.00 COP</ItemValue>
                  </ItemGroup>

                  <ItemGroup>
                    <ItemTitle>Estado</ItemTitle>
                    <ItemValue>Rechazada</ItemValue>
                  </ItemGroup>
                </ContentItem>
                <ContentItem>
                  <ItemGroup>
                    <ItemTitle>Factura</ItemTitle>
                    <ItemValue>01-1530204052304</ItemValue>
                  </ItemGroup>

                  <ItemGroup>
                    <ItemTitle>IVA</ItemTitle>
                    <ItemValue>$0 COP</ItemValue>
                  </ItemGroup>

                  <ItemGroup>
                    <ItemTitle></ItemTitle>
                    <ItemValue></ItemValue>
                  </ItemGroup>
                </ContentItem>
                <ContentItem>
                  <ItemGroup>
                    <ItemTitle>Factura transaccion</ItemTitle>
                    <ItemValue>28/06/2018 11:42:09 AM</ItemValue>
                  </ItemGroup>

                  <ItemGroup>
                    <ItemTitle>Base Devolucion IVA</ItemTitle>
                    <ItemValue>$0 COP</ItemValue>
                  </ItemGroup>

                  <ItemGroup>
                    <ItemTitle>Respuesta</ItemTitle>
                    <ItemValue>Transacción Rechazada</ItemValue>
                  </ItemGroup>
                </ContentItem>
                <ContentItem>
                  <ItemGroup2>
                    <ItemTitle>Descripción Compra</ItemTitle>
                    <ItemValue>Servicios de creación y publicación de post</ItemValue>
                  </ItemGroup2>

                  <ItemGroup>
                    <ItemTitle>Autorización</ItemTitle>
                    <ItemValue>348237762</ItemValue>
                  </ItemGroup>
                </ContentItem>
                <ContentItem>
                  <ItemGroup>
                    <ItemTitle>Ganancia Cliente</ItemTitle>
                    <ItemValue>$114,659.28</ItemValue>
                  </ItemGroup>

                  <ItemGroup>
                    <ItemTitle>Recibo</ItemTitle>
                    <ItemValue>48771530204129</ItemValue>
                  </ItemGroup>

                  <ItemGroup>
                    <ItemTitle>IP Transacción</ItemTitle>
                    <ItemValue>191.102.238.37</ItemValue>
                  </ItemGroup>
                </ContentItem>

                <ContentItem>
                  <ItemGroup>
                    <ItemTitle>Franquicia / Medio de Pago</ItemTitle>
                    <ItemValue>$114,659.28</ItemValue>
                  </ItemGroup>

                  <ItemGroup>
                    <ItemTitle>Banco</ItemTitle>
                    <ItemValue>BANCOLOMBIA</ItemValue>
                  </ItemGroup>

                  <ItemGroup>
                    <ItemTitle>Numero Tarjeta</ItemTitle>
                    <ItemValue>********</ItemValue>
                  </ItemGroup>
                </ContentItem>

                <ContentItem>
                  <ItemGroup>
                    <ItemTitle>Extra 1</ItemTitle>
                    <ItemValue></ItemValue>
                  </ItemGroup>

                  <ItemGroup>
                    <ItemTitle>Extra 2</ItemTitle>
                    <ItemValue></ItemValue>
                  </ItemGroup>

                  <ItemGroup>
                    <ItemTitle>Extra 3</ItemTitle>
                    <ItemValue></ItemValue>
                  </ItemGroup>
                </ContentItem>
                <ContentItem>
                  <ItemGroup>
                    <ItemTitle>Url confirmacion:</ItemTitle>
                    <ItemValue>http://epayco.co</ItemValue>
                  </ItemGroup>
                </ContentItem>
                <ContentItem>
                  <ItemGroup2>
                    <ItemTitle>Url Respuesta:</ItemTitle>
                    <ItemValue>http://epayco.co/response/233rwer423424232er3wr234235423</ItemValue>
                  </ItemGroup2>
                </ContentItem>
              </CardContent1>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Detalle del comprador</CardTitle>
                <CardIcon onClick={() => openClose1()}>
                  {openCard1 == false ? (
                    <BsIcons.BsFillCaretDownFill style={iconStyles} />
                  ) : (
                    <BsIcons.BsFillCaretUpFill style={iconStyles} />
                  )}
                </CardIcon>
              </CardHeader>
              <CardContent1 theme={openCardContent1}>
                <ContentItem>
                  <ItemGroup>
                    <ItemTitle>Cedula de Ciudadania</ItemTitle>
                    <ItemValue>123456789</ItemValue>
                  </ItemGroup>

                  <ItemGroup>
                    <ItemTitle>Dirección</ItemTitle>
                    <ItemValue>N/A</ItemValue>
                  </ItemGroup>

                  <ItemGroup>
                    <ItemTitle>Pais</ItemTitle>
                    <ItemValue>CO</ItemValue>
                  </ItemGroup>
                </ContentItem>
                <ContentItem>
                  <ItemGroup>
                    <ItemTitle>Nombres</ItemTitle>
                    <ItemValue>Darina</ItemValue>
                  </ItemGroup>

                  <ItemGroup>
                    <ItemTitle>Telefono</ItemTitle>
                    <ItemValue>3043599347</ItemValue>
                  </ItemGroup>

                  <ItemGroup>
                    <ItemTitle>Estado / Provincia</ItemTitle>
                    <ItemValue></ItemValue>
                  </ItemGroup>
                </ContentItem>
                <ContentItem>
                  <ItemGroup>
                    <ItemTitle>Apellidos</ItemTitle>
                    <ItemValue>Gonzalez</ItemValue>
                  </ItemGroup>

                  <ItemGroup>
                    <ItemTitle>Celular</ItemTitle>
                    <ItemValue>3043599347</ItemValue>
                  </ItemGroup>

                  <ItemGroup>
                    <ItemTitle>Ciudad</ItemTitle>
                    <ItemValue>NINGUNO</ItemValue>
                  </ItemGroup>
                </ContentItem>
                <ContentItem>
                  <ItemGroup>
                    <ItemTitle>Compañia</ItemTitle>
                    <ItemValue>N / A</ItemValue>
                  </ItemGroup>

                  <ItemGroup>
                    <ItemTitle>Email</ItemTitle>
                    <ItemValue>dariana_2111@hotmail.com</ItemValue>
                  </ItemGroup>

                  <ItemGroup>
                    <ItemTitle>Codigo Area</ItemTitle>
                    <ItemValue>NINGUNO</ItemValue>
                  </ItemGroup>
                </ContentItem>
              </CardContent1>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Información enviada en la confirmación</CardTitle>
                <CardIcon onClick={() => openClose2()}>
                  {openCard2 == false ? (
                    <BsIcons.BsFillCaretDownFill style={iconStyles} />
                  ) : (
                    <BsIcons.BsFillCaretUpFill style={iconStyles} />
                  )}
                </CardIcon>
              </CardHeader>
              <CardContent2 theme={openCardContent2}>
                <ContentLog>
                  <LogGroup>
                    <Log>
                      <LogItem>
                        <LogStatus>200 OK</LogStatus>
                        <LogMetodo>POST /metminim/mollit/non/deserunt/ulia</LogMetodo>
                        <LogHora>12:2013</LogHora>
                      </LogItem>
                      <LogItem>
                        <LogStatus>200 OK</LogStatus>
                        <LogMetodo>POST /metminim/mollit/non/deserunt/ulia</LogMetodo>
                        <LogHora>12:2013</LogHora>
                      </LogItem>
                      <LogItem>
                        <LogStatus>200 OK</LogStatus>
                        <LogMetodo>POST /metminim/mollit/non/deserunt/ulia</LogMetodo>
                        <LogHora>12:2013</LogHora>
                      </LogItem>
                    </Log>
                  </LogGroup>
                  <LogGroup>hola</LogGroup>
                </ContentLog>
              </CardContent2>
            </Card>
          </CardGroup>
          <CardGroup>
            <Card2>
              <CardHeader>
                <CardTitle>Acciones</CardTitle>
                <CardSubTitle>Las Siguientes acciones pueden no ser reversibles.</CardSubTitle>
              </CardHeader>
              <CardContent3>
                <ButtonExportar>
                  <AiIcons.AiFillFilePdf style={iconStylesExport} />
                  Descargar comprobante
                </ButtonExportar>
              </CardContent3>
              <CardContentButton>
                <ButtonTransacciones>&laquo; Volver a transacciones</ButtonTransacciones>
              </CardContentButton>
            </Card2>
          </CardGroup>
        </ContentCard>
      </Content>
    </div>
  )
}

export default TransaccionesDetalles
