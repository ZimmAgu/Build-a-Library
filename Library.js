//////////////////////////////
//  Build a Library Project //
//      from Codecademy     //
//  Written by Zimuzo Agu   //
//////////////////////////////













// Parent class for the Book, Movie, & CD Subclasses
class Media {










    constructor (title) {
    
        this._title = title;

        this._isCheckedOut = false;

        this._ratings = [];

    } // End of the Media constructor














    // Getter for the title property
    get get_title () {
        return this._title;
    }

    // There is no need for a title setter because the title won't ever change



















    // Getter and Setters for the isCheckedOut property
    get set_isCheckedOut () {
        return this._isCheckedOut;
    }

    set set_isCheckedOut (checked_Out) {
        this._isCheckedOut = checked_Out;
    }
















    // Getter for the ratings property
    get get_ratings () {
        return this._ratings;
    }

    // There is no need for a rarintg setter because the ratings won't ever change






















    /* toggleCheckOutStatus Explanation:

        If the value of set_isCheckedOut is set to true
        then change it to false

        If the value of set_isCheckedOut is set to false
        then change it to true

    */
    toggleCheckOutStatus = () => {
        
        this.set_isCheckedOut = !this.set_isCheckedOut;

    } // End of toggleCheckOutStatus function

























    getAvergaeRating = () => {


        // For the reduce parameter
        let reducer = (accumulator, currentValue) => {
            return accumulator + currentValue;
        }




        /* 
            Calculates the sum of the numbers in the ratings array
            
            Stores the sum in the sum_of_Ratings variable
        */
        let sum_of_Ratings = this.get_ratings.reduce(reducer);





        // Assigns the length of the ratings array to length_of_Ratings                                             
        let amount_of_Ratings = this.get_ratings.length;



        /*
            Divides the sum of the ratings by the amount of ratings 
            in the rating array to geth the average

            Stores the sum of the ratings into the variable averge_Rating
        */
        let averge_Rating = sum_of_Ratings / amount_of_Ratings;



        return averge_Rating;


    } // End of getAverageRating function





















    addRating = (new_Rating) => {
        this._ratings.push(new_Rating);
    }



} // End of Media Class 





































//////////////////
//  Book Class  //
//////////////////
class Book extends Media{




    constructor(title, author, pages) {

        super(title);
        
        this._author = author;

        this._pages = pages;

    } // End of book constructor










    // Get method for the author property
    get get_author () {

        return this._author;

    }
    /* 
        The author does not change 
        so the _author property doesn't need a setter
    */



    get get_pages () {

        return this._pages;

    }
    /* 
        The amount of pages in a book does not change
        so the _pages property doesn't need a setter
    */




} // End of the Book class








































//////////////////
//  Movie class //
//////////////////
class Movie extends Media {




    constructor(title, director, runtime) {
        
        super(title);

        this._director = director;

        this._runtime = runtime;

    } // End of constructor 










    get get_director () {

        return this._director;

    }
    /* 
        The director of a movie does not change
        so there is no setter for _director
    */









    get get_runtime () {

        return this._runtime;

    }
    /* 
        The runtime of a movie does not change
        so there is no setter for _runtime
    */


} // End of Movie class

















/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                         End of Class Declarations                                           //                                        
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////















