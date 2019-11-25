
export const getMySmallAvatar = (state )=>{
    if(!state.ProfilePage.myProfile) return null;
    return  state.ProfilePage.myProfile.photos.small};
export const getMyLargeAvatar = (state )=> state.ProfilePage.myProfile.photos.large;