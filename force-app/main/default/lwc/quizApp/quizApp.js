import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    selected={} //for storing selected answers
    correctAnswers= 0; //to show the number of correct answer
    isSubmitted=false; //to show the reult

    get allNotSelected(){ //submit button disable or not
        return !(Object.keys(this.selected).length === this.myQuestions.length);
    }

    //Questions with option and answers
    myQuestions=[
        {id:"Q1", question:'My name is ',options:{a:'aa',b:'bb',c:'cc',d:'dd'},correctAnswer:'a'},
        {id:"Q2", question:'My fName is ',options:{a:'aa',b:'bb',c:'cc',d:'dd'},correctAnswer:'a'},
        {id:"Q3", question:'My lName is ',options:{a:'aa',b:'bb',c:'cc',d:'dd'},correctAnswer:'c'},
        {id:"Q4", question:'My fullName is ',options:{a:'aa',b:'bb',c:'cc',d:'dd'},correctAnswer:'b'}
    ]
    //store response on every click on the options
    checkAnswer(event){
        const {name,value}=event.target;
        this.selected={...this.selected, [name]:value};
    }

    //on submit the form
    handleSubmit(event){
        //event.preventDefault();
        const correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer); 
        this.correctAnswers = correct.length;  
        this.isSubmitted =true; 
    }

    //Form reset 
    handleReset(event){
        this.selected = {};
        this.correctAnswers = 0;
        this.isSubmitted=false;
    }

    // used to show dynamic styling to RESULT text 
    get isScoredFull(){
        return `slds-text-heading_large slds-var-m-around_medium ${this.myQuestions.length === this.correctAnswers?
            'slds-text-color_success':'slds-text-color_error'} `
    }
}