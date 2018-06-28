import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'
import FixtureAPI from '../Services/FixtureApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { GithubTypes } from '../Redux/GithubRedux'
import { ProductGridTypes } from '../Redux/ProductGridRedux'
import { CategoriesTypes } from '../Redux/CategoriesRedux'
import { ProductDetailTypes } from '../Redux/ProductDetailRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getUserAvatar } from './GithubSagas'
import { getProductGrid } from './ProductGridSagas'
import { getCategories } from './CategoriesSagas'
import { getProductDetail } from './ProductDetailSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api),
    takeLatest(ProductGridTypes.PRODUCT_GRID_REQUEST, getProductGrid, api),
    takeLatest(CategoriesTypes.CATEGORIES_REQUEST, getCategories, api),
    takeLatest(ProductDetailTypes.PRODUCT_DETAIL_REQUEST, getProductDetail, api),
  ])
}
