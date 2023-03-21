// (***)
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    logout() {
        console.log(`${this.username} logs out!!`);
    }
}
export default User;
export function userHelper() {
    console.log(`userHelper()`);
}
