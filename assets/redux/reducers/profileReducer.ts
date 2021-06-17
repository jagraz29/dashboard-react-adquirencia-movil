import { AnyAction } from 'redux'
import {PerfilReducerType} from '../../types/PerfilReducerType'
import {GET_PROFILE_DATA} from '../actions/index'

const initialState: PerfilReducerType = {
    profileData : {
        data: {
            id: '',
            companyName: '',
            mobilePhone: '',
            cellPhone: '',
            socialName: '',
            indicativeCity: '',
            indicativeCountry: '',
            logo: '',
            emailTransaction: '',
            domain: ''
        }
    }
}

const profileReducer = (state: PerfilReducerType = initialState, action: AnyAction) => {
    switch (action.type) {
        case GET_PROFILE_DATA: {
            return {
                ...state,
                profileData: action.payload,
            }
        }
        default: {
            return state
        }
    }
}

export default profileReducer
