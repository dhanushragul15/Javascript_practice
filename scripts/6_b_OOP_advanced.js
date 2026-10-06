// let's imagine a university
// Everyone in the university is a member of their website

// BASE CLASS -> Gives the base schema for the members entity of the university like
// student, teacher, staff, etc. 

class Member {
    // Let's design the schema for each and every member of the university
    static memberCount = 0; 

    // Let's design the schema for each and every member of the university
    constructor(id, name, email) {
        // initialize basic information
        this.id = id;
        this.name = name;
        this.email = email;

        // for every member constructed, increment the memberCount
        Member.memberCount++;
    }

    // auth
    login() {
        console.log(`${this.name} has logging in...`);
    }

    logout() {
        console.log(`${this.name} has logging out...`);
    }

    displayInfo() {
        console.log(`_`.repeat(50));
        console.log(`ID\t:\t ${this.id}`);
        console.log(`Name\t:\t ${this.name}`);
        console.log(`Email\t:\t ${this.email}`);
    }

    static getMemberCount() {
        // This method belong to the class.
        return Member.memberCount;
    }
}

const m1 = new Member();
m1.displayInfo();

const m2 = new Member(1, "John Doe", "john@gmail.com");
m2.displayInfo();