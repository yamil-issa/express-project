import { User } from './user';
import { UserService } from './user.service';

export class UserController {
    constructor(private userService: UserService) {}

    add(username: string): User {
        //check if username is empty or whitespace
        if (!username || username.trim() === '') {
            throw new Error('Username cannot be empty or whitespace.');
        }else {
            return this.userService.add(username);
        }
        
    }
 
    getById(id: number): User | null {
        if (!Number.isInteger(id)) {
            throw new Error('ID must be an integer.');
        }
        // Check if the id is a negative number
        if (id < 0) {
            throw new Error('ID cannot be a negative number.');
        }else {
            return this.userService.getById(id);

        }
        
    }
}
