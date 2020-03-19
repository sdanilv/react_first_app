import {GlobalState} from "src/redux/storeRedux";
import {MyOldProfilePostsType, ProfileType} from "redux/profileReducer/profileReducer";

export const getMySmallAvatar = (state: GlobalState):string|null => {
    if (!state.ProfilePage.myProfile) return null;
    return state.ProfilePage.myProfile.photos.small
};
export const getMyLargeAvatar = (state: GlobalState) :string|null =>{
if (state.ProfilePage.myProfile) {
   return state.ProfilePage.myProfile.photos.large
}
return null};
export const getProfile = (state: GlobalState):ProfileType|null => state.ProfilePage.profile;
export const getProfileStatus = (state: GlobalState):string|null => state.ProfilePage.status;
export const getProfilePosts = (state: GlobalState):MyOldProfilePostsType => state.ProfilePage.myOldProfile.posts;
