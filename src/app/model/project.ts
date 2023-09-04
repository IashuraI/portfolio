export class Project {
    public id: number;
    public title: string;
    public description: string;

    public constructor(title: string, description: string, id: number){
        this.title = title;
        this.description = description;
        this.id = id;
    }
}