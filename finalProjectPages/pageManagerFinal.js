import { signUpPage } from "../finalProjectPages/signUpPage"

export class pageManagerFinal {
    constructor(page) {
        this.sp = new signUpPage(page);
    }

    async getSignUpPage() {
        return this.sp;
    }
}