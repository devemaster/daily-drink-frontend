import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './userReducer';
import createUserReducer from './createUserReducer';
import deleteUserReducer from './deleteUserReducer';
import editUserReducer from './editUserReducer';
import userListReducer from './userListReducer';
import userApprovedReducer from './userApprovedReducer';
import countryListReducer from './countryListReducer';
import stateListReducer from './stateListReducer';
import cityListReducer from './cityListReducer';
import applicationListReducer from './applicationListReducer';
import createApplicationReducer from './createApplicationReducer';
import updateApplicationReducer from './updateApplicationReducer';
import deleteApplicationReducer from './deleteApplicationReducer';
import uploadAppIconReducer from './uploadAppIconReducer';
import createNotificationReducer from './createNotificationReducer';
import userSearchReducer from './userSearchReducer';
import userApproveAppReducer from './userApproveAppReducer';
import createAdminReducer from './createAdminReducer';
import adminDetailsReducer from './adminDetailsReducer';
import deleteAdminReducer from './deleteAdminReducer';
import checkUserReducer from './checkUserReducer';
import novusBiReducer from './novusBiReducer';
import novusBiCreateReducer from './novusBiCreateReducer';
import novusBiArticleReducer from './novusBiArticleReducer';
import contentListReducer from './contentListReducer';
import categoryListReducer from './categoryListReducer';
import commentListReducer from './commentListReducer';
import trashListReducer from './trashListReducer';
import subCategoryListReducer from './subCategoryListReducer';
import articleListReducer from './articleListReducer';
import updateContentReducer from './updateContentReducer';
import updateCategoryReducer from './updateCategoryReducer';
import updateSubCategoryReducer from './updateSubCategoryReducer';
import createCategoryReducer from './createCategoryReducer';
import deleteCategoryListReducer from './deleteCategoryListReducer';
import allCategoryListReducer from './allCategoryListReducer';
import deleteContentReducer from './deleteContentReducer';
import statusContentReducer from './statusContentReducer';
import novusBiArticleUpdateReducer from './novusBiArticleUpdateReducer';
import bannerListReducer from './bannerListReducer';
import deleteBannerListReducer from './deleteBannerListReducer';
import createBannerReducer from './createBannerReducer';
import updateBannerReducer from './updateBannerReducer';
import regionListReducer from './regionListReducer';
import deleteRegionListReducer from './deleteRegionListReducer';
import createRegionReducer from './createRegionReducer';
import updateRegionReducer from './updateRegionReducer';

export default combineReducers({
  form: formReducer,
  user: userReducer,
  allUser: userListReducer,
  createUser: createUserReducer,
  deleteUser: deleteUserReducer,
  updateUser: editUserReducer,
  approvedUser: userApprovedReducer,
  countryList: countryListReducer,
  stateList: stateListReducer,
  cityList: cityListReducer,
  applicationList: applicationListReducer,
  createApplication: createApplicationReducer,
  uploadApplication: updateApplicationReducer,
  deleteApplication: deleteApplicationReducer,
  uploadAppIcon: uploadAppIconReducer,
  createNotification: createNotificationReducer,
  userSearch: userSearchReducer,
  userApproveApp: userApproveAppReducer,
  createAdmin: createAdminReducer,
  adminDetails: adminDetailsReducer,
  deleteAdmin: deleteAdminReducer,
  checkUser: checkUserReducer,
  novusBi: novusBiReducer,
  novusBiCreate: novusBiCreateReducer,
  novusBiArticle: novusBiArticleReducer,
  novusBiArticleUpdate: novusBiArticleUpdateReducer,
  contentList: contentListReducer,
  categoryList: categoryListReducer,
  commentList: commentListReducer,
  trashList: trashListReducer,
  subCategoryList: subCategoryListReducer,
  articleList: articleListReducer,
  updateContent: updateContentReducer,
  updateCategory: updateCategoryReducer,
  updateSubCategory: updateSubCategoryReducer,
  createCategory: createCategoryReducer,
  deleteCategoryList: deleteCategoryListReducer,
  allCategoryList:allCategoryListReducer,  
  doDeleteContentRes: deleteContentReducer,
  doStatusContentRes: statusContentReducer,
  bannerList: bannerListReducer,
  deleteBannerList: deleteBannerListReducer,
  createBanner: createBannerReducer,
  updateBanner: updateBannerReducer,
  regionList: regionListReducer,
  deleteRegionList: deleteRegionListReducer,
  createRegion: createRegionReducer,
  updateRegion: updateRegionReducer,
});