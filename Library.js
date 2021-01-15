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









    get 





} // End of Media Class 











