import { User } from './user';
import * as fs from 'fs';
import { UserService } from './user.service';

export class UserJSONService implements UserService {
    constructor() {
        this.loadUsersFromFile();
    }

    private filePath: string = './src/user/users.json';

    private users: User[] = [];

    private loadUsersFromFile(): void {
        try {
            const data = fs.readFileSync(this.filePath, 'utf-8');
            this.users = JSON.parse(data);
        } catch (error) {
            throw new Error('Error reading file: ' + error);
        }
    }

    private saveUsersToFile(): void {
        fs.writeFileSync(this.filePath, JSON.stringify(this.users, null, 2));
    }

    add(username: string): User {
        const newUser = new User(this.users.length + 1, username);
        this.users.push(newUser);
        this.saveUsersToFile();
        return newUser;
    }

    getById(id: number): User | null {
        const foundUser = this.users.find(user => user.id === id);
        return foundUser || null;
    }
}
