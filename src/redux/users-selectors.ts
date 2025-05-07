import { RootState } from "./store"; // Импортируйте RootState если есть

export const getUsers = (state: RootState) =>{
    return state.usersPage.users
}

export const getPageSize = (state: RootState) =>{
    return state.usersPage.pageSize
}

export const getUsersTotalCount = (state: RootState) =>{
    return state.usersPage.usersTotalCount
}

export const getCurrentPageNum = (state: RootState) =>{
    return state.usersPage.currentPageNum
}

export const getFollowingProgress = (state: RootState) =>{
    return state.usersPage.followingProgress
}




