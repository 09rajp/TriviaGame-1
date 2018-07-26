


var c3po = "<button value='c3po' class='pictures'><img id='image1' src='./assets/images/c3po.jpg' alt='c3po' height='200' width='200'></button>";
var bubba = "<button value='bubba' class='pictures'><img id='image2' src='./assets/images/c3po_new.jpg' alt='bubba' height='200' width='200'></button>";
var yoda = "<button value='yoda' class='pictures'><img id='image3' src='./assets/images/yoda.jpg' alt='yoda' height='200' width='200'></button>";
var darth = "<button value='darth' class='pictures'><img id='image4' src='./assets/images/yoda_new.jpg' alt='darth' height='200' width='200'></button>";

$("#userGuess").append(c3po);
$("#userGuess").append(bubba);
$("#userGuess").append(yoda);
$("#userGuess").append(darth);

$(".pictures").on("click", function() {
    // console.log(this.value);
    var selectedPlayer = this.value;
    if (selectedPlayer === "c3po") {
        $("#enemy").append(bubba);
        $("#enemy").append(yoda);
        $("#enemy").append(darth);
        $("#userselection").append(c3po);
        $("#userGuess").remove(c3po);
    }
    // console.log("HI")
    else if (selectedPlayer === "bubba") {
        $("#enemy").append(c3po);
        $("#enemy").append(yoda);
        $("#enemy").append(darth);
        $("#userselection").append(bubba);
        $("#userGuess").remove(bubba);
    }
    else if (selectedPlayer === "yoda") {
        $("#enemy").append(c3po);
        $("#enemy").append(bubba);
        $("#enemy").append(darth);
        $("#userselection").append(yoda);
        $("#userGuess").remove(yoda);
    }
    else if (selectedPlayer === "darth") {
        $("#enemy").append(c3po);
        $("#enemy").append(yoda);
        $("#enemy").append(bubba);
        $("#userselection").append(darth);
        $("#userGuess").remove(darth);
    }
});

    $("#enemy").on("click", ".pictures", function() {
    var selectedEnemy = this.value;
    // var selectedPlayer = userselection;
    // console.log("HI");
    if (selectedEnemy === "c3po") {
        $("#enemyfighting").append(c3po);
        $("#enemy").remove(c3po);
        // $("#enemy").append(bubba);
        // $("#enemy").append(yoda);
        // $("#enemy").append(darth);
        // $("#enemy").remove(selectedEnemy);
        // console.log(selectedEnemy);

    }
    else if (selectedEnemy === "bubba") {
        $("#enemyfighting").append(bubba);
        $("#enemy").remove(bubba);
        // $("#enemy").append(c3po);
        // $("#enemy").append(yoda);
        // $("#enemy").append(darth);
        // $("#enemy").remove(selectedEnemy);
    }
    else if (selectedEnemy === "yoda") {
        $("#enemyfighting").append(yoda);
        $("#enemy").remove(yoda);
        // $("#enemy").append(bubba);
        // $("#enemy").append(c3po);
        // $("#enemy").append(darth);
        // $("#enemy").remove(selectedEnemy);
    }
    else if (selectedEnemy === "darth") {
        $("#enemyfighting").append(darth);
        $("#enemy").remove(darth);
        // $("#enemy").append(bubba);
        // $("#enemy").append(yoda);
        // $("#enemy").append(c3po);
        // $("#enemy").remove(selectedEnemy);
    }
})




