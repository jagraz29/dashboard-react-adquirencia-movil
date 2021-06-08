export type CaptchaReducerType = {
  tokenCaptcha: string
}

export type ViewReducerType = {
  view: 'home' | 'other'
}

export type UserReducerType = {
  userData: {
    data: {
      email: string
      cellPhone: string
      companyName: string
      indicative: string
      logo: string
      socialName: string
    }
  }
  profileImage: string
  backgroundImage: string
}
