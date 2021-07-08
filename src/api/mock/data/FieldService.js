//import Influencer from '../../models/Influencer';
import posts from './post'
import Vue from 'vue'

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

class Influencer {
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

export default class FieldService extends Vue {
    constructor() {
        super()
        this.influencers = [
            new Influencer({
                id: '4118214092',
                name: 'dej_supes',
                fullName: 'Ajay Ghales',
                profileUrl: 'https://www.instagram.com/dej_supes/',
                avatarUrl: 'https://imgp.sptds.icu/v2?mb0KwpL92uYofJiSjDn1%2F0MxdG1TageTvcfUnxxVBkQc2nC72MyIwe8rY3gqtHPv%2BOY6GAGoqr8CzmoLS7Y0SknAH%2Fbh6hL%2FILnnnLMcYrlsJXYp2CoF7XmiPt%2FkZoKiNZ2bSaThBHPdPj%2F%2Bung0N1sKufobGm19DXPWlwgW3LM%3D',
                followers: 2950,
                er: 1032
            }),
            new Influencer({
                id: '4118214092',
                name: 'wedding_luchy',
                fullName: 'Свадьба твоей мечты',
                profileUrl: 'https://www.instagram.com/wedding_luchy/',
                avatarUrl: 'https://imgp.sptds.icu/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDZBgcJx%2Bz3p117ubABFdYZVBd8kuIoVCr3kX0OP5BL32iqe1%2FbvvTzmllniRG8zdCLyl17m3vzFHu1RJDr3Di0OT8Moe9fwKIU9YOWB9c0yTQ%3D%3D',
                followers: 4443,
                er: 514
            }),
            new Influencer({
                id: '5865650965',
                name: 'zeq192',
                fullName: null,
                profileUrl: 'https://www.instagram.com/zeq192/',
                avatarUrl: 'https://imgp.sptds.icu/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDY9ylLT5c6L8M5YYtkm82Y2ecFUm0J9D%2BxrLvYFQdmk24XyVQwcqF4fn4fFzAL3FVR21bumySLrc9YPBNSX0cX1tFP%2Fg4RdZsN1mq9UGz%2F%2B%2FA%3D%3D',
                followers: 1542,
                er: 1362
            }),
            new Influencer({
                id: '8288853707',
                name: 'blogers.memes',
                fullName: '🕷',
                profileUrl: 'https://www.instagram.com/blogers.memes/',
                avatarUrl: 'https://imgp.sptds.icu/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDY9ylLT5c6L8M5YYtkm82Y2KFX883evza%2BVWe49cgSM8onozcWuw2aSlJD7ZrWw2SKPQQR8WsIS3YIZzZyydthKQWYLeIG9Lgl%2Fhm41W%2B9Gnw%3D%3D',
                followers: 3294,
                er: 603
            }),
            new Influencer({
                id: '401364018',
                name: 'kirasokolov',
                fullName: null,
                profileUrl: 'https://www.instagram.com/kirasokolov/',
                avatarUrl: 'https://imgp.sptds.icu/v2?mb0KwpL92uYofJiSjDn1%2F6peL1lBwv3s%2BUvShHERlDY9ylLT5c6L8M5YYtkm82Y27%2BAU1h5qzKdgUOPZ9AD%2FEsV3W28mgisrPhq831s%2FugEv%2Fd7GVzHWakD6faCbxpzwkYz8XkDNVAH3C0yntyfSOw%3D%3D',
                followers: 1760,
                er: 909
            })
        ];   
    }
    /**
     * Имитирует получение инфлюенсеров
     * @returns {Promise<Array<Influencer>>}
     */
    getInfluencers() {
        console.log('getInfluencers')
        return new Promise(resolve => {
            setTimeout(() => {
                const clonedInfluencers = this.influencers.map(influencer => influencer);
                resolve(clonedInfluencers);
            }, 10);
        });
    }
    /**
     * Имитирует синхронное получение инфлюенсера по id
     * @param {string | null} influencerId
     * @returns {Influencer | null}
     */
    getInfluencerSync(influencerId = null) {
        if (influencerId === null)
            return null;
        const influencer = this.influencers.find(influencer => influencer.id === influencerId);
        return influencer || null;
    }
    /**
     * Имитирует получение инфлюенсера по id
     * @param {string | null} influencerId
     * @returns {Promise<Influencer | null>}
     */
    getInfluencer(influencerId = null) {
        return new Promise(resolve => {
            setTimeout(() => {
                const influencer = this.getInfluencerSync(influencerId);
                const clonedInfluencer = influencer ? new Influencer(influencer) : null;
                resolve(clonedInfluencer);
            }, 10);
        });
    }

    fetchPosts () {
        console.log('fetchPosts')
        return fetch(posts, 0) // wait 1s before returning posts
    }
    
    fetchInfluencers () {
        return this.getInfluencers()
    }
}