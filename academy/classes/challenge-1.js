/*
You are a college student and you want to stream a movie over one of the campuses Wi-Fi networks.
Based on the number of users, some networks won’t have the data to stream a movie.

Use the following Network class to track how much total data and how many users each network has:

class Network {
  constructor(data, users) {
    this.data = data;
    this.users = users;
  }
}
The properties of the Network class are:

data: Total units of data supplied by the network
users: Total numbers of users currently on the network
Each user on average deducts 5 units from the network’s total data. To watch a movie you must connect to a network that has at least 10 remaining units of data.

Add a method movieTime() to the Network class that returns true if there is enough data available to watch a movie, false if there isn’t.
*/

class Network {
    constructor(data, users) {
      this._data = data;
      this._users = users;
    }

    get data(){
        return this._data;
    }

    get users(){
        return this._users;
    }

    movieTime(){
        const deduct = this.users * 5;
        const remain = this.data - deduct;
        if (remain > 9){
            return true;
        } else {
            return false;
        }
    }
  }

const library = new Network(50, 9) 
library.movieTime() // returns false