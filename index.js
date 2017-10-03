function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function deepestChild() {
    var deepestChild;
    var grandNode = document.getElementById("grand-node");
    var allNodes = grandNode.querySelectorAll('div');

    for (var i = 0; i < allNodes.length; i++) {
      if (i === (allNodes.length - 1)) {
        deepestChild = allNodes[allNodes.length - 1];
      }
    }

    return deepestChild;
}

function increaseRankBy(n){
  var list = document.querySelectorAll("ul.ranked-list li");
  for (var i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}
