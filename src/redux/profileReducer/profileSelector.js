export const getMySmallAvatar = (state )=>{
    if(!state.ProfilePage.myProfile) return null;
    return  state.ProfilePage.myProfile.photos.small};
export const getMyLargeAvatar = (state )=> state.ProfilePage.myProfile.photos.large;
export const getProfile = (state) => state.ProfilePage.profile;
export const getProfileStatus= (state) => state.ProfilePage.status;
export const getProfilePosts= (state) => state.ProfilePage.myOldProfile.posts;
