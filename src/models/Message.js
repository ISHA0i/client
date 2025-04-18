class Message {
    constructor(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
        this.timestamp = new Date();
    }

    validate() {
        return {
            isValid: this.name && this.email && this.message,
            errors: {
                name: !this.name ? 'Name is required' : '',
                email: !this.email ? 'Email is required' : '',
                message: !this.message ? 'Message is required' : ''
            }
        };
    }
}

export default Message;