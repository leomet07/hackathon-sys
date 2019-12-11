window.onload = function () {
    var firebaseheadingref = firebase
        .database()
        .ref()
        .child("quiz_scores");
    firebaseheadingref.on("value", function (datasnapshot) {
        //console.log(datasnapshot.val());
        calculate_avg(datasnapshot);
    });
};

function calculate_avg(datasnapshot) {
    datasnapshot = datasnapshot.val();
    console.log(datasnapshot);
    /*
    all_entries = Object.values(datasnapshot);
    console.log("all entries", all_entries);
    let scores = [];
    for (let i = 0; i < all_entries.length; i++) {
        entry = all_entries[i];
        let score = entry["score"];
        //console.log(score);
        scores.push(score);
    }
    //console.log(scores);

    //calculating the avg
    let total = 0;
    let proper_scores = 0;
    for (let i = 0; i < scores.length; i++) {
        if (!isNaN(scores[i])) {
            total += scores[i];
            proper_scores++;
        }
    }
    //console.log(total);
    //console.log(proper_scores);

    let avg = total / proper_scores;
    console.log(avg);

    //displaying the avg to the user
    document.getElementById("avg").innerHTML =
        '<span class="badge badge-secondary">The global avg was: ' +
        precise_round(avg, 3) +
        "</span>";
    */
}

function write_db() {
    var today = new Date();
    //console.log("The time is ", today);

    if (percent != null) {
        //console.log(percent);
        time_as_str = String(today);
        //console.log(time_as_str);
        set = {
            score: percent,
            time: time_as_str
        };
        firebase
            .database()
            .ref()
            .child("quiz_scores")
            .push()

            .set(set);
    } else {
        //console.log(" No score to be had");
    }
}