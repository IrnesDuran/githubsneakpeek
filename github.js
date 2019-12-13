class Github {
    constructor() {
      this.client_id = '23128d14bf59fac42c4b';
      this.client_secret = 'c37ad31f6e56268caefbab0d28b91dfa1610712c';
    }
  
    async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const profile = await profileResponse.json();
  
      return {
        profile
      }
    }
  }