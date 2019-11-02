$(document).ready(function() {
  $('#shell').click(function() {
    $.ajax({
      dataType: "json",
      url: "http://taco-randomizer.herokuapp.com/random/",
      success: function(results) {
        console.log(results);
        $(".tacoShell").text(results["shell"]["name"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});

$(document).ready(function() {
  $('#baselayer').click(function() {
    $.ajax({
      dataType: "json",
      url: "http://taco-randomizer.herokuapp.com/random/",
      success: function(results) {
        console.log(results);
        $(".tacoBaseLayer").text(results["base_layer"]["name"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});

$(document).ready(function() {
  $('#seasoning').click(function() {
    $.ajax({
      dataType: "json",
      url: "http://taco-randomizer.herokuapp.com/random/",
      success: function(results) {
        console.log(results);
        $(".tacoSeasoning").text(results["seasoning"]["name"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});

$(document).ready(function() {
  $('#mixin').click(function() {
    $.ajax({
      dataType: "json",
      url: "http://taco-randomizer.herokuapp.com/random/",
      success: function(results) {
        console.log(results);
        $(".tacoMixin").text(results['mixin']['name']);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});

$(document).ready(function() {
  $('#condiment').click(function() {
    $.ajax({
      dataType: "json",
      url: "http://taco-randomizer.herokuapp.com/random/",
      success: function(results) {
        console.log(results);
        $(".tacoCondiment").text(results["condiment"]["name"]);
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });
});
