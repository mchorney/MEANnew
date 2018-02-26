export class User {
    constructor(
        public user_name: string = '',
        public avatar_url: string = '',
        public score: number = 0,
        public ready: boolean = false,
    ) { }
}