
export class Address {
    public houseNumber?: number;
    public street?: string;
    public country?: string;
    public state?: string;


    constructor(
        houseNumber?: number,
        street?: string,
        country?: string,
        state?: string
    ) {
        this.houseNumber = houseNumber;
        this.street = street;
        this.country = country;
        this.state = state;
    }
}
