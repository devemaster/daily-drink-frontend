import * as types from './actionTypes';  
import RegionListApi from '../api/regionListApi';
import {logout} from '../helper/helper';
import { getItem } from '../utils/localStore';
import Swal from 'sweetalert2';

// request payload set
export function getregionList() {

  return {
    type: types.REGION_LIST,
  };
}

// request respnse set
export function getRegionListRes(data) {  
  return {
    type: types.REGION_LIST_RES, 
    data
  };
}

// call api, action and response
export function fetchRegionList() {
  const TOKEN = getItem('auth_token');
  if(TOKEN){
    return function(dispatch) {
      RegionListApi.getregionList().then(data => {
        dispatch(getRegionListRes(data));
        if(data.error){
          Swal.fire({
            title: data.message,
            type: 'error',
            confirmButtonText: 'OK',
            allowOutsideClick: false,
            timer: 3000
          });
        }
      }).catch(error => {
        return error
      });
    };
  }else{
    logout()
  }
}


