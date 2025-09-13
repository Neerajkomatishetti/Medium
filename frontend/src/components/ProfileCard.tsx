

export type Profileprops = {
    ProfileDetails:{
        name: string,
        img_url: string,
        link:string
    }
}

export const ProfileCard = ({ProfileDetails}:Profileprops) => {
    return <>
    <div className=" flex flex-col justify-between h-fit w-full">
        <div className="size-30 pb-5 mb-5">
        <img className="h-fit rounded-full" src={ProfileDetails.img_url} alt="Profile picture" />
        </div>
        <p className="w-full pb-7 font-bold ">{ProfileDetails.name}</p>
        <div className="w-full h-fit underline">
            <a href={ProfileDetails.link} >Edit Profile</a>
        </div>
    </div>
    </>
}

export default ProfileCard;