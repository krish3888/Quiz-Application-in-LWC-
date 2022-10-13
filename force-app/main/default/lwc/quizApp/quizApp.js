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
        {id:"Q1", question:'Double values have what restrictions?',options:{A:'Scale and precision.',B:'Scale and position.',C:'Age and scale.',D:'Size and time.'},correctAnswer:'A'},
        {id:"Q2", question:'When is a custom object’s associated name field defined?',options:{A:'Never.',B:'During setup.',C:'Before setup.',D:'After setup.'},correctAnswer:'B'},
        {id:"Q3", question:'Select the Incorrect Primitive Data Type.',options:{A:'DateTime',B:'date',C:'time',D:'base32'},correctAnswer:'C'},
        {id:"Q4", question:'Currency and percent fields are what type of value?',options:{A:'Double',B:'Triple',C:'Alphabetical',D:'Single'},correctAnswer:'A'},
        {id:"Q5", question:'Which of the following is an example of an audit field?',options:{A:'NewID',B:'created',C:'OldID',D:'CreatedById'},correctAnswer:'D'}
    ]
    //store response on every click on the options
    checkAnswer(event){
        const {name,value}=event.target;
        this.selected={...this.selected, [name]:value};
    }

    //on submit the form
    handleSubmit(event){
        event.preventDefault();
        const correct = this.myQuestions.filter(item=>this.selected[item.id] === item.correctAnswer); 
        this.correctAnswers = correct.length;  
        this.isSubmitted =true; 
    }

    //Form reset 
    handleReset(){
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