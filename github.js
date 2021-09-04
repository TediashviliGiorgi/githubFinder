class Github {
  constructor() {
    this.client_id = '649315c1b66448996dcb';
    this.client_secret = 'c09cea9cd0f6a4bb87885d01d81cba74ad0b118b';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}