export class Register {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public telephone: string,
        public password: string,
        public confirmPassword: string,
        public occupation: string
    ) {}
}

export class RegisterBuilder {

    private firstName!: string;
    private lastName!: string;
    private email!: string;
    private telephone!: string;
    private password!: string;
    private confirmPassword!: string;
    private occupation!: string;

    setFirstName(firstName: string): RegisterBuilder {
        this.firstName = firstName;
        return this;
    }

    setLastName(lastName: string): RegisterBuilder {
        this.lastName = lastName;
        return this;
    }

    setEmail(email: string): RegisterBuilder {
        this.email = email;
        return this;
    }

    setTelephone(telephone: string): RegisterBuilder {
        this.telephone = telephone;
        return this;
    }

    setPassword(password: string): RegisterBuilder {
        this.password = password;
        return this;
    }

    setConfirmPassword(confirmPassword: string): RegisterBuilder {
        this.confirmPassword = confirmPassword;
        return this;
    }

    setOccupation(occupation: string): RegisterBuilder {
        this.occupation = occupation;
        return this;
    }

    build(): Register {

        console.log("Builder Values => ", {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
        });

        return new Register(
            this.firstName,
            this.lastName,
            this.email,
            this.telephone,
            this.password,
            this.confirmPassword,
            this.occupation
        );
    }
}