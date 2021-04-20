
export class UserError extends Error {
    displayMessage;
    helpMessage;

    constructor( displayMessage, helpMessage ) {
        super();
        this.displayMessage = displayMessage;
        this.helpMessage = helpMessage;
    }
}