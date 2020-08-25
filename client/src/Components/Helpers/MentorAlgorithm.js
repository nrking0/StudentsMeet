export default function sortMentors(mentors, searchQueries) {
    // temp will store the mentors to display on the screen
    var mentorsToReturn = [];

    //var leftOvers = [];
    // finds the perfect match mentors
    //var mentorFlag = false;
    // for (var i = 0; i < mentors.length; i++) {
    //     var mentor = mentors[i];
    //     for (var j = 0; j < searchQueries.length; j++) {
    //         if (mentor.interestedsubjects.indexOf(searchQueries[j]) === -1) {
    //             mentorFlag = true;
    //             break;
    //         }
    //     }
    //     if (!mentorFlag) {
    //         mentorsToReturn.push({
    //             mentors: mentor,
    //             status: 100
    //         });
    //     } else {
    //         leftOvers.push(mentor);
    //     }
    // }

    for(var i = 0; i < mentors.length; i++) {
        var person = mentors[i];
        var matchCounter = 0;

        for(var j = 0; j < searchQueries.length; j++) {
            if(person.interestedsubjects.indexOf(searchQueries[j]) !== -1) {
                matchCounter++;
            }
        }

        if(matchCounter !== 0) {
            var matchCalc = Math.round(matchCounter / searchQueries.length * 100);

            mentorsToReturn.push({
                mentor: person,
                match: matchCalc,
            })
        }
    }

    mentorsToReturn.sort(function(a, b){
        return a.match - b.match;
    });


    return mentorsToReturn;

}