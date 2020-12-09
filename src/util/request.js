import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'



const baseUrl = '/api'

axios.interceptors.response.use(res=>{
    console.log('========请求的路径:'+res.config.url+'=============')
    console.log(res);
    return res
})


export const reqMenuAdd = (data)=>{
    return axios({
        url:baseUrl+'/api/menuadd',
        method:'post',
        data:data
    })
}

export const reqMenuList = (data)=>{
    return axios({
        url:baseUrl+'/api/menulist',
        method:'get',
        params:data
    })
}

export const reqMenuListOne=(data)=>{
    return axios({
        url:baseUrl+'/api/menuinfo',
        method:'get',
        params:data
    })
}

export const reqChangeMenu=(data)=>{
    return axios({
        url:baseUrl+'/api/menuedit',
        method:'post',
        data:data
    })
}


export const reqMenuDel=(data)=>{
    return axios({
        url:baseUrl+'/api/menudelete',
        method:'post',
        data:data
    })
}


//////////////////角色管理////////////////////////

export const reqRoleAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/roleadd',
        method:'post',
        data:data
    })
}


export const reqRoleList =()=>{
    return axios({
        url:baseUrl+'/api/rolelist',
        method:'get'

    })
}


export const reqRoleInfo =(data)=>{
    return axios({
        url:baseUrl+'/api/roleinfo',
        method:'get',
        params:data
    })
}
export const reqRoleEdit =(data)=>{
    return axios({
        url:baseUrl+'/api/roleedit',
        method:'post',
        data:data
    })
}
export const reqRoleDel =(data)=>{
    return axios({
        url:baseUrl+'/api/roledelete',
        method:'post',
       data:data
    })
}



//////////////////////////管理员管理///////////////////////////

export const reqUserAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/useradd',
        method:'post',
        data:data
    })
}

export const reqUserCount=()=>{
    return axios({
        url:baseUrl+'/api/usercount',
        method:'get',
    })
}

export const reqUserList=(data)=>{
    return axios({
        url:baseUrl+'/api/userlist',
        method:'get',
        params:data
    })
}

export const reqUserInfo=(data)=>{
    return axios({
        url:baseUrl+'/api/userinfo',
        method:'get',
        params:data
    })
}


export const reqUserEdit=(data)=>{
    return axios({
        url:baseUrl+'/api/useredit',
        method:'post',
        data:data
    })
}


export const reqUserDelete=(data)=>{
    return axios({
        url:baseUrl+'/api/userdelete',
        method:'post',
        data:data
    })
}


export const reqUserLogin=(data)=>{
    return axios({
        url:baseUrl+'/api/userlogin',
        method:'post',
        data:data
    })
}



///////////////////////商品分类/////////////////////////

export const reqCateAdd=(params)=>{
    let data = new FormData()

    for(let i in params){
        data.append(i,params[i])
    }
    return axios({
        url:baseUrl+'/api/cateadd',
        method:'post',
        data:data
    })
}


export const reqCateList =(data)=>{
    return axios({
        url:baseUrl+'/api/catelist',
        method:'get',
        params:data
    })
}


export const reqCateInfo =(data)=>{
    return axios({
        url:baseUrl+'/api/cateinfo',
        method:'get',
        params:data
    })
}
export const reqCateEdit =(params)=>{
    let data = new FormData()
    for (let i in params){
        data.append(i,params[i])
    }
    return axios({
        url:baseUrl+'/api/cateedit',
        method:'post',
        data:data
    })
}
export const reqCateDel =(data)=>{
    return axios({
        url:baseUrl+'/api/catedelete',
        method:'post',
       data:data
    })
}



////////////////////商品规格添加////////////////////////

export const reqSpecsAdd=(data)=>{
    return axios({
        url:baseUrl+'/api/specsadd',
        method:'post',
        data:data
    })
}


export const reqSpecsList =(data)=>{
    return axios({
        url:baseUrl+'/api/specslist',
        method:'get',
        params:data

    })
}
export const reqSpecsCount =()=>{
    return axios({
        url:baseUrl+'/api/specscount',
        method:'get'

    })
}


export const reqSpecsInfo =(data)=>{
    return axios({
        url:baseUrl+'/api/specsinfo',
        method:'get',
        params:data
    })
}
export const reqSpecsEdit =(data)=>{
    return axios({
        url:baseUrl+'/api/specsedit',
        method:'post',
        data:data
    })
}
export const reqSpecsDel =(data)=>{
    return axios({
        url:baseUrl+'/api/specsdelete',
        method:'post',
       data:data
    })
}




////////////////////商品管理////////////////////////

export const reqGoodsAdd=(params)=>{

    let data = new FormData()

    for(let i in params){
        data.append(i,params[i])
    }
    return axios({
        url:baseUrl+'/api/goodsadd',
        method:'post',
        data:data
    })
}


export const reqGoodsList =(data)=>{
    return axios({
        url:baseUrl+'/api/goodslist',
        method:'get',
        params:data

    })
}
export const reqGoodsCount =()=>{
    return axios({
        url:baseUrl+'/api/goodscount',
        method:'get'

    })
}


export const reqGoodsInfo =(data)=>{
    return axios({
        url:baseUrl+'/api/goodsinfo',
        method:'get',
        params:data
    })
}
export const reqGoodsEdit =(data)=>{
    return axios({
        url:baseUrl+'/api/goodsedit',
        method:'post',
        data:data
    })
}
export const reqGoodsDel =(data)=>{
    return axios({
        url:baseUrl+'/api/goodsdelete',
        method:'post',
       data:data
    })
}
