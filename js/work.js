(function() {
  // Create the Work navigation menu
  Array.from(document.getElementsByClassName("work-block")).forEach(function(workBlock) {
    var workTitle = workBlock.getElementsByClassName("header")[0].innerText;

    // Create an id on the workBlock
    workBlock.setAttribute("id", workTitle);

    // Create a link to that id on the navBlock
    var navLi = document.createElement("li");
    var navLink = document.createElement("a");
    var navP = document.createElement("p");

    navLink.setAttribute("href", "#" + workTitle);
    navP.innerText = workTitle;

    navLink.appendChild(navP);
    navLi.appendChild(navLink);

    // Attach the navBlock to the DOM
    document.getElementsByClassName("navigation")[0].appendChild(navLi);
  });

  // Create a div that will hide all but the top three navBlocks
  var hiddenDiv = document.createElement("div");
  hiddenDiv.setAttribute("class", "hider hidden");
  Array.from(document.getElementsByClassName("navigation")[0].children).forEach(function(element, i) {
    if (i > 2) {
      hiddenDiv.appendChild(element);
    }
  });

  // Add a "more" link
  var moreLi = document.createElement("li");
  var moreLink = document.createElement("a");

  moreLink.setAttribute("class", "more");
  moreLink.setAttribute("href", "#");
  moreLink.onclick = function(e) {
    e.preventDefault();
    // Remove the "hidden" class
    hiddenDiv.setAttribute("class", "hider");
    moreLi.remove();
  };
  moreLink.innerText = ". . .";

  moreLi.appendChild(moreLink);

  document.getElementsByClassName("navigation")[0].appendChild(hiddenDiv);
  document.getElementsByClassName("navigation")[0].appendChild(moreLi);

  // Assign each of the work blocks to a column (either left or right)
  //   so that they read from left to right, then top to bottom
  Array.from(document.getElementsByClassName("work-block")).forEach(function(workBlock, i) {
    if (i % 2 == 0) {
      // even / left
      workBlock.setAttribute("class", "work-block column-left");
    } else {
      // odd / right
      workBlock.setAttribute("class", "work-block column-right");
    }
  });
})();
