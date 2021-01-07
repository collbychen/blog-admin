
//设置键名，这里我设置的是固定的
const TokenKey = 'COOKIE-TOKEN';
//设置token
export function setToken(token){
    return localStorage.setItem(TokenKey,token);
}
//获取token
export function getToken(){
    return localStorage.getItem(TokenKey);
}
//删除token
export function removeToken(){
    return localStorage.removeItem(TokenKey);
}