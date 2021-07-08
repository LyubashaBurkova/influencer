export default class Influencer {
    constructor(args) {
        const { id = null, name, fullName, profileUrl, avatarUrl, followers, er } = args;
        this.id = id;
        this.name = name;
        this.fullName = fullName;
        this.profileUrl = profileUrl;
        this.avatarUrl = avatarUrl;
        this.followers = followers;
        this.er = er;
    }
}