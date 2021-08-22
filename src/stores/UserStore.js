import { observable, action } from 'mobx';

function getDefaultUserObj () {
    return {
        email: undefined,
        verified: false,
        apiToken: '',
        channel: '',
        timezone: ''
    };
}

class UserStore {
    constructor () {
        this.user = getDefaultUserObj();
    }
    @observable user;

    @action
    setUserEmail (email) {
        this.user.email = email;
    }

    @action
    setUserVerified (status) {
        this.user.verified = status;
    }

    @action
    setUserApiToken (token) {
        this.user.apiToken = token;
    }

    @action
    setChannel (channelName) {
        this.user.channel = channelName;
    }

    @action
    setTimezone (timezone) {
        this.user.timezone = timezone;
    }

    @action
    logoutUser () {
        this.user = getDefaultUserObj();
    }

    setUserDetails (data) {
        if (!data)
            return;
        if (data.email !== undefined) {
            this.setUserEmail(data.email);
        }
        if (data.verified !== undefined) {
            this.setUserVerified(data.verified);
        }
        if (data.apiToken !== undefined) {
            this.setUserApiToken(data.apiToken);
        }
        if (data.channel !== undefined) {
            this.setChannel(data.channel);
        }
        if (data.timezone !== undefined) {
            this.setTimezone(data.timezone);
        }
    }

}
export default new UserStore();
