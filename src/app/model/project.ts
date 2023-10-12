export class Project {
    public id: number;
    public title: string;
    public img: string;
    public role: string;
    public goal: string;
    public skills: string[];
    public solution: string;
    public solutionImg: string;
    public solutionUrl: string;

    public constructor(title: string, id: number, img: string, role: string, goal: string, skills: string[], solution: string, 
        solutionImg: string, solutionUrl: string){
            
        this.title = title;
        this.id = id;
        this.img = img;
        this.role = role;
        this.goal = goal;
        this.skills = skills;
        this.solution = solution;
        this.solutionImg = solutionImg;
        this.solutionUrl = solutionUrl;
    }
}