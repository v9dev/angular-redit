export class Article {
    title: string;
    link: string;
    votes: number;
    // Here we are creating a new class that represents an Article. Note that this is a plain
    //class and not an Angular component. In the Model-View-Controller pattern this
    //would be the Model.
  
    constructor(title: string, link: string, votes?: number) {
      this.title = title;
      this.link = link;
      this.votes = votes || 0; //default is zero
    }
    //get values of model in costructor and votes in optional
  
    voteUp(): boolean {
      //define functions here for encapsulate and loose coupling
      this.votes += 1;
      return false;
    }
  
    voteDown(): boolean {
      this.votes -= 1;
      return false;
    }
  
    domain() {
      //this function is for split the link of article
      try {
        const domainAndPath: string = this.link.split('//')[1]; //split here and take the right side after // with [1]
        return domainAndPath.split('/')[0]; //return what is before / with [0]
      } catch (err) {
        // if there was any errors it returns null
        return null;
      }
    }
  }