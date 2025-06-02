// export const useNavigationLabels = () => {
//   const {t} = useTranslation();
//   return {
//     auth: {
//       splash: t('navigation.auth.splash'),
//       qrScreen: t('navigation.auth.qrScreen'),
//       login: t('navigation.auth.login'),
//       OTP: t('navigation.auth.OTP'),
//       businessList: t('navigation.auth.businessList'),
//       outletList: t('navigation.auth.outletList'),
//       addTerminal: t('navigation.auth.addTerminal'),
//     },
//     home: {
//       dashboard: t('navigation.home.dashboard'),
//       checkout: t('navigation.home.checkout'),
//       language: t('navigation.home.language'),
//       bluetooth: t('navigation.home.bluetooth'),
//     },
//     order: {
//       list: t('navigation.order.list'),
//       details: t('navigation.order.details'),
//     },
//   };
// };

export const LocalStorageKey = {
  AUTH_TOKEN: 'auth_token',
  MENU_DATA: 'menu_data',
  PREVIOUS_ORDER_AMOUNT: 'previous_order_amount',
  MESSAGE_DATA: 'message_data',
  OFFLINE_ORDER_DATA: 'offline_order_data',
  LANGUAGE_SELECTION: 'language_selection',
  PRINTER_SELECTION: 'printer_selection',
  BUSINESS_DETAILS: 'business_details',
  OTP: 'opt',
  CONNECTED_BLUETOOTH_UUID: 'connected_bluetooth_uuid',
  REMOVE_PRINTER_SPACE: 'remove_printer_space'
}

export const URLS = {
  //live Dev IP
  base: 'https://dncdev.infocorptus.com/api/v2/',
  // base: 'https://api-prod.swadsetu.com/api/v2/',
  //mihir IP
  // base: 'http://192.168.23.22:3000/api/v2',
  // base: 'http://192.168.23.7:3000/api/v2',
  //samir IP
  // base: 'http://192.168.23.25:3000/api/v2',
  auth: {
    verifyOtp: 'users/login',
    sendOtp: 'users/otp'
  },
  terminal: {
    add: 'terminal/login'
  },
  business: {
    business: 'users/businesses',
    outlet: 'outlet/list'
  },
  menu: {
    getCategoryWithItem: 'terminal/menu/list'
  },
  order: {
    createOrder: 'order/create',
    createOfflineOrder: 'order/bulk/create',
    list: 'terminal/order/list',
    updatePaymentMode: 'order/update/paymentmode'
  },
  language: {
    listLanguage: 'language/list',
    updateLanguage: 'terminal/update/language'
  },
  users: {
    getDetails: 'terminal/details',
    getLogout: 'terminal/logout'
  }
}
