export class UserService {
    private users = [{ id: 1, name: "Panashe" }];
  
    getUsers() {
      return this.users;
    }
  
    getUserById(id: number) {
      return this.users.find((user) => user.id === id);
    }
  }
  