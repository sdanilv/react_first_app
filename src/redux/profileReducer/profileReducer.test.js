import profileReducer, {AddPost, setProfile, setStatus} from "./profileReducer";

const initationState = {
    myprofile: {
        aboutMe: "About me. I`m I",
        lookingForAJob: true,
        lookingForAJobDescription: "Need a good job",
        fullName: "Danil Sidyakin",
        userId: 0,

        posts: [
            {
                id: 1,
                name: "Boris",
                age: 19,
                message: "Customer-focused Keyboard Identity",
                likeCount: 9,
                ava: "https://s3.amazonaws.com/uifaces/faces/twitter/dhooyenga/128.jpg"
            },
            {
                id: 2,
                name: "Rahsaan",
                age: 36,
                message: "Customer-focused Keyboard Identity",
                likeCount: 2,
                ava: "https://s3.amazonaws.com/uifaces/faces/twitter/sprayaga/128.jpg"
            },
            {
                id: 3,
                name: "Christopher",
                age: 55,
                message: "Customer-focused Keyboard Identity",
                likeCount: 13,
                ava: "https://s3.amazonaws.com/uifaces/faces/twitter/ratbus/128.jpg"
            }
        ]
    },
    profile: null,
    status: "1"
};

it(`posts length should be increased`, () => {
    const nState = profileReducer(initationState, AddPost());
    expect(nState.myprofile.posts.length).toBe(4);
});

it(`posts length should be increased`, () => {
    const nState = profileReducer(initationState, AddPost(4, "Hello"));
    expect(nState.myprofile.posts[3].message).toBe("Hello");
});
it(`porfile should not be a null`, () => {
    const profile = {
        aboutMe: "About me. I`m I",
        lookingForAJob: true,
        lookingForAJobDescription: "Need a good job",
        fullName: "Danil Sidyakin",
        userId: 0
    };
    const nState = profileReducer(initationState, setProfile(profile));
    expect(nState.profile).not.toBe(null);
});

it(`porfile fullName should be "Danil S"`, () => {
    const profile = {
        aboutMe: "About me. I`m I",
        lookingForAJob: true,
        lookingForAJobDescription: "Need a good job",
        fullName: "Danil S",
        userId: 0
    };
    const nState = profileReducer(initationState, setProfile(profile));
    expect(nState.profile.fullName).toBe("Danil S");
});

it(`profile status should be "oK"`, () => {
    const nState = profileReducer(initationState, setStatus("oK"));
    expect(nState.status).toBe("oK");
});
