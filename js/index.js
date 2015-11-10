function stateQuiz() {

 
  // 50 U.S. States
  this.states = [
    {
        "name": "Alabama",
        "id": "AL"
    },
    {
        "name": "Alaska",
        "id": "AK"
    },
    {
        "name": "Arizona",
        "id": "AZ"
    },
    {
        "name": "Arkansas",
        "id": "AR"
    },
    {
        "name": "California",
        "id": "CA"
    },
    {
        "name": "Colorado",
        "id": "CO"
    },
    {
        "name": "Connecticut",
        "id": "CT"
    },
    {
        "name": "Delaware",
        "id": "DE"
    },
    {
        "name": "Florida",
        "id": "FL"
    },
    {
        "name": "Georgia",
        "id": "GA"
    },
    {
        "name": "Hawaii",
        "id": "HI"
    },
    {
        "name": "Idaho",
        "id": "ID"
    },
    {
        "name": "Illinois",
        "id": "IL"
    },
    {
        "name": "Indiana",
        "id": "IN"
    },
    {
        "name": "Iowa",
        "id": "IA"
    },
    {
        "name": "Kansas",
        "id": "KS"
    },
    {
        "name": "Kentucky",
        "id": "KY"
    },
    {
        "name": "Louisiana",
        "id": "LA"
    },
    {
        "name": "Maine",
        "id": "ME"
    },
    {
        "name": "Maryland",
        "id": "MD"
    },
    {
        "name": "Massachusetts",
        "id": "MA"
    },
    {
        "name": "Michigan",
        "id": "MI"
    },
    {
        "name": "Minnesota",
        "id": "MN"
    },
    {
        "name": "Mississippi",
        "id": "MS"
    },
    {
        "name": "Missouri",
        "id": "MO"
    },
    {
        "name": "Montana",
        "id": "MT"
    },
    {
        "name": "Nebraska",
        "id": "NE"
    },
    {
        "name": "Nevada",
        "id": "NV"
    },
    {
        "name": "New Hampshire",
        "id": "NH"
    },
    {
        "name": "New Jersey",
        "id": "NJ"
    },
    {
        "name": "New Mexico",
        "id": "NM"
    },
    {
        "name": "New York",
        "id": "NY"
    },
    {
        "name": "North Carolina",
        "id": "NC"
    },
    {
        "name": "North Dakota",
        "id": "ND"
    },
    {
        "name": "Ohio",
        "id": "OH"
    },
    {
        "name": "Oklahoma",
        "id": "OK"
    },
    {
        "name": "Oregon",
        "id": "OR"
    },
    {
        "name": "Pennsylvania",
        "id": "PA"
    },
    {
        "name": "Rhode Island",
        "id": "RI"
    },
    {
        "name": "South Carolina",
        "id": "SC"
    },
    {
        "name": "South Dakota",
        "id": "SD"
    },
    {
        "name": "Tennessee",
        "id": "TN"
    },
    {
        "name": "Texas",
        "id": "TX"
    },
    {
        "name": "Utah",
        "id": "UT"
    },
    {
        "name": "Vermont",
        "id": "VT"
    },
    {
        "name": "Virginia",
        "id": "VA"
    },
    {
        "name": "Washington",
        "id": "WA"
    },
    {
        "name": "West Virginia",
        "id": "WV"
    },
    {
        "name": "Wisconsin",
        "id": "WI"
    },
    {
        "name": "Wyoming",
        "id": "WY"
    }
  ];

  this.currentState = null;

  this.genRandomState = function() {
    this.currentState = this.states[Math.floor(Math.random() * this.states.length)];
    this.displayState(this.currentState.name);
  };

  this.displayState = function(state) {
    $('#current-state').text(state);  
  };

  this.checkAnswer = function(selection) {
    if (selection.attr('id') === this.currentState.id) {
      selection.addClass('green');
      // remove state from array
      this.removeState(this.currentState.name)
    } else {
      alert('incorrect');
    }
    console.log(selection);
  }

  this.removeState = function(stateName) {
    var stateToBeRemoved = $.map(this.states, function(obj, index) {
      if(obj.name == stateName) {
        return index;
      }
    });
    this.states.splice(stateToBeRemoved, 1);
    this.genRandomState();
    console.log(this.currentState);
    console.log(this.states.length);
  }

}

var quiz = new stateQuiz();

quiz.genRandomState();

$('.state').on('click', function() {
  quiz.checkAnswer($(this)); 
});


















































