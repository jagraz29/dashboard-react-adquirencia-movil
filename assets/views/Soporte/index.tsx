import Breadcrumbs from '../../components/Breadcrumbs/'
import Title from '../../components/Title'
import React from 'react'
import { StyleContainer } from './styles'
import { ToastContainer } from 'react-toastify'
import { Content } from '../Integraciones/styles'
import CardSupportMin from '../../components/CardSupportMin'
const breadcrumb = [
  {
    title: 'Inicio',
    path: '/dashboard',
    active: true,
  },
  {
    title: 'Soporte',
    path: '/soporte',
    active: false,
  },
]
const optionsSoport = [
  {
    icon: 'https://multimedia.epayco.co/dashboard/iconos-soporte/ticket-2.svg ',
    text: 'Crear ticket de soporte',
    history: true,
    url: 'soporte/nuevo',
  },
  {
    icon: 'https://multimedia.epayco.co/dashboard/iconos-soporte/conocimiento.svg',
    text: 'Base de conocimiento',
    target: true,
    url: 'https://docs.epayco.co/',
  },
  {
    icon: 'https://multimedia.epayco.co/dashboard/iconos-soporte/reunion-soporte.svg',
    text: 'Agendar reunión con soporte',
    target: true,
    url: 'https://calendly.com/epayco/',
  },
  {
    icon: 'https://multimedia.epayco.co/dashboard/iconos-soporte/contacto.svg',
    text: 'Contacto telefónico: +57 (4) 448 4952',
    phone: '+57 (4) 448 4952',
  },
]

const Soporte = () => {
  return (
    <div>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <Title title={'Soporte'}></Title>
      <Content>
        <ToastContainer />
        <div className={'row m-0 animated fadeIn wc p-2 p-lg-3 p-xl-4 '}>
          <div className="container m-lg-0" style={{ maxWidth: '100%' }}>
            <StyleContainer className={'wc'}>
              <div className={'wc pt-5'}>
                <p style={{ color: '#5C5B5C' }}>
                  Seleccione una de las siguientes opciones para resolver sus dudas o recibir
                  soporte.{' '}
                </p>
              </div>
              <div className={'row option-support '}>
                {optionsSoport.map((ticket, key) => {
                  return (
                    <div
                      key={key}
                      className={'col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center'}
                    >
                      <CardSupportMin {...ticket} className={'shadow-hover'} />
                    </div>
                  )
                })}
              </div>
            </StyleContainer>
          </div>
        </div>
      </Content>
    </div>
  )
}

export default Soporte
