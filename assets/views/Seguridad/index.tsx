import React, { useState, useEffect, useCallback } from 'react'
import Title from '../../components/Title'
import Breadcrumbs from '../../components/Breadcrumbs/'
import * as BsIcons from 'react-icons/bs'
import InputCustumer from '../../components/InputCostumer'
import InputLabel from '../../components/InputLabel'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/reducers/index'
import { getPropertySite, setPropertySite, getProfileData } from '../../redux/actions/'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { datos } from './data'
import {
  Content,
  ContentCard,
  Card,
  CardHeader,
  CardContent1,
  CardContent2,
  CardContent3,
  CardTitle,
  ContentInput,
  CardContentButton,
  ButtonOk,
  ButtonCancel,
  ContentInputCard,
  InputGroup,
} from '../Integraciones/styles'
import InputNoEditable from '../../components/InputNoEditable'
import InputSelectWithValue from '../../components/InputSelectWithValue'
import InputSelectPaisWithValue from '../../components/InputSelectPaisWithValue'

const breadcrumb = [
  {
    title: 'Inicio',
    path: '/dashboard',
    active: true,
  },
  {
    title: 'Seguridad',
    path: '/seguridad',
    active: false,
  },
]

const dataSelect = [
  {
    value: 'movil',
    label: 'móvil',
  },
  {
    value: 'fijo',
    label: 'fijo',
  },
]
const Seguridad = () => {
  const dispatch = useDispatch()

  const viewState: RootState = useSelector((state: RootState) => state)
  console.log(viewState.profile.profileData)

  const [openCardContent, setOpenCardContent] = useState({ display: 'block' })
  const [openCardContent2, setOpenCardContent2] = useState({ display: 'block' })
  const [openCardContent3, setOpenCardContent3] = useState({ display: 'block' })
  const [nombre, setNombre] = useState(viewState.profile.profileData.data.socialName)
  const [email, setEmail] = useState(viewState.profile.profileData.data.emailTransaction)
  const [nombreEmpresa, setNombreEmpresa] = useState(viewState.profile.profileData.data.companyName)
  const [numMovil, setNumMovil] = useState(viewState.profile.profileData.data.cellPhone)
  const [numFijo, setNumFijo] = useState(viewState.profile.profileData.data.mobilePhone)
  const [indicativoCiudad, setIndicativoCiudad] = useState(
    viewState.profile.profileData.data.indicativeCity
  )
  const [indicativoPais, setIndicativoPais] = useState(
    viewState.profile.profileData.data.indicativeCountry
  )
  const [tipoTelefono, setTipoTelefono] = useState(
    viewState.profile.profileData.data.cellPhone == '' ? 'fijo' : 'movil'
  )
  const [web, setWeb] = useState(viewState.profile.profileData.data.domain)
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  useEffect(() => {
    dispatch(getProfileData())
  })

  const changeNombreEmpresa = useCallback((event) => {
    setNombreEmpresa(event)
  }, [])

  const changeNumMovil = useCallback((event) => {
    setNumMovil(event)
  }, [])

  const changeNumFijo = useCallback((event) => {
    setNumFijo(event)
  }, [])

  const changeIndCiudad = useCallback((event) => {
    setIndicativoCiudad(event)
  }, [])

  const changeIndPais = useCallback((event) => {
    setIndicativoPais(event)
  }, [])

  const changeTipoTelefono = useCallback((event) => {
    setTipoTelefono(event)
  }, [])

  const changeWeb = useCallback((event) => {
    setWeb(event)
  }, [])

  const changePassword = useCallback((event) => {
    setPassword(event)
  }, [])

  const changeNewPassword = useCallback((event) => {
    setNewPassword(event)
  }, [])

  const changeConfirmPassword = useCallback((event) => {
    setConfirmPassword(event)
  }, [])

  const savePropiedad = () => {
    const datos = {
      razonSocial: 'Prueba a ver',
      nombreEmpresa: 'prueba123',
      telefono: '1231231',
      celular: '3136139322',
      indicativoCiudad: '1',
      indicativoPais: '57',
      tipoTelefonoValue: 'fijo',
      campoTelValue: '1231231',
      valueIndicativo: '1',
      paises: [],
    }

    dispatch(setPropertySite(datos))
    console.log('pase pues por aqui', datos)

    toast.success('Wow so easy!')
  }

  return (
    <div>
      <Breadcrumbs breadcrumb={breadcrumb} />
      <Title title={'Perfil'}></Title>

      <Content>
        <ToastContainer />
        <ContentCard>
          <Card>
            <CardContent1 theme={openCardContent}>
              <ContentInput>
                <ContentInputCard>
                  <InputLabel label={'Nombre'} />
                  <InputNoEditable name={'nombre'} type={'text'} width={'44.6vw'} value={nombre} />
                </ContentInputCard>
              </ContentInput>
              <ContentInput>
                <ContentInputCard>
                  <InputLabel label={'Email'} />
                  <InputNoEditable name={'email'} type={'text'} width={'44.6vw'} value={email} />
                </ContentInputCard>
              </ContentInput>
            </CardContent1>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Datos de contacto</CardTitle>
            </CardHeader>

            <CardContent2 theme={openCardContent2}>
              <ContentInput>
                <ContentInputCard>
                  <InputLabel label={'Nombre empresa'} />
                  <InputCustumer
                    name={'nombreEmpresa'}
                    type={'text'}
                    placeholder={'Nombre de la Empresa'}
                    width={'44.6vw'}
                    value={nombreEmpresa}
                    onChange={(e: any) => {
                      changeNombreEmpresa(e)
                    }}
                  />
                </ContentInputCard>
              </ContentInput>

              <ContentInput>
                <ContentInputCard>
                  <InputLabel label={'Telefono negocio'} />
                  <InputGroup>
                    <InputSelectWithValue
                      name={'type_telefono'}
                      placeholder={tipoTelefono != null ? tipoTelefono : 'movil'}
                      width={'12vw'}
                      dataSelect={dataSelect}
                      value={tipoTelefono}
                      onClick={() => {}}
                      onChange={(e: any) => {
                        changeTipoTelefono(e)
                      }}
                    />
                    {tipoTelefono == 'fijo' ? (
                      <InputCustumer
                        name={'indicativoCiudad'}
                        type={'number'}
                        placeholder={'Indicativo'}
                        width={'10vw'}
                        value={indicativoCiudad}
                        onChange={(e: any) => {
                          changeIndCiudad(e)
                        }}
                      />
                    ) : tipoTelefono == 'movil' ? (
                      <InputSelectPaisWithValue
                        name={'indicativoPais'}
                        value={indicativoPais}
                        placeholder={'Indicativo'}
                        width={'10vw'}
                        dataSelect={datos}
                        onClick={() => {}}
                        onChange={(e: any) => {
                          changeIndPais(e)
                        }}
                      />
                    ) : (
                      ''
                    )}

                    {tipoTelefono == 'fijo' ? (
                      <InputCustumer
                        name={'telefono'}
                        type={'number'}
                        placeholder={'Telefono'}
                        width={'18vw'}
                        value={numFijo}
                        onChange={(e: any) => {
                          changeNumFijo(e)
                        }}
                      />
                    ) : tipoTelefono == 'movil' ? (
                      <InputCustumer
                        name={'telefono'}
                        type={'number'}
                        placeholder={'Telefono'}
                        width={'18vw'}
                        value={numMovil}
                        onChange={(e: any) => {
                          changeNumMovil(e)
                        }}
                      />
                    ) : (
                      ''
                    )}
                  </InputGroup>
                </ContentInputCard>
              </ContentInput>

              <ContentInput>
                <ContentInputCard>
                  <InputLabel label={'Sitio web'} />
                  <InputCustumer
                    name={'weba'}
                    type={'text'}
                    placeholder={'Sitio Web'}
                    width={'44.6vw'}
                    value={web}
                    onChange={(e: any) => {
                      changeWeb(e)
                    }}
                  />
                </ContentInputCard>
              </ContentInput>
            </CardContent2>

            <CardContentButton theme={openCardContent2}>
              <ButtonOk>Guardar Información</ButtonOk>
              <ButtonCancel>Cancelar</ButtonCancel>
            </CardContentButton>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Actualizar Contraseña</CardTitle>
            </CardHeader>

            <CardContent3 theme={openCardContent3}>
              <ContentInput>
                <ContentInputCard>
                  <InputLabel label={'Contraseña Actual'} />
                  <InputCustumer
                    name={'password'}
                    type={'password'}
                    placeholder={''}
                    width={'44.6vw'}
                    value={password}
                    onChange={(e: any) => {
                      changePassword(e)
                    }}
                  />
                </ContentInputCard>
              </ContentInput>
              <ContentInput>
                <ContentInputCard>
                  <InputLabel label={'Nueva Contraseña'} />
                  <InputCustumer
                    name={'newPassword'}
                    type={'password'}
                    placeholder={''}
                    width={'44.6vw'}
                    value={newPassword}
                    onChange={(e: any) => {
                      changeNewPassword(e)
                    }}
                  />
                </ContentInputCard>
              </ContentInput>
              <ContentInput>
                <ContentInputCard>
                  <InputLabel label={'Confirmar Contraseña'} />
                  <InputCustumer
                    name={'confirmPassword'}
                    type={'password'}
                    placeholder={''}
                    width={'44.6vw'}
                    value={confirmPassword}
                    onChange={(e: any) => {
                      changeConfirmPassword(e)
                    }}
                  />
                </ContentInputCard>
              </ContentInput>
            </CardContent3>
            <CardContentButton theme={openCardContent2}>
              <ButtonOk>Cambiar contraseña</ButtonOk>
              <ButtonCancel>Cancelar</ButtonCancel>
            </CardContentButton>
          </Card>
        </ContentCard>
      </Content>
    </div>
  )
}

export default Seguridad
