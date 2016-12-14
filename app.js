var $topLeft = $("#topLeft"),
    $topMiddle = $("#topMiddle"),
    $topRight = $("#topRight"),
    $middleLeft = $("#middleLeft"),
    $middleMiddle = $("#middleMiddle"),
    $middleRight = $("#middleRight"),
    $bottomLeft = $("#bottomLeft"),
    $bottomMiddle = $("#bottomMiddle"),
    $bottomRight = $("#bottomRight"),

    $overlay = $("<div id='overlay'></div>"),

    player,
    computer,
    win = false,
    playerWon = false;

function clearScreen() {
  $topLeft.html("");
  $topMiddle.html("");
  $topRight.html("");
  $middleLeft.html("");
  $middleMiddle.html("");
  $middleRight.html("");
  $bottomLeft.html("");
  $bottomMiddle.html("");
  $bottomRight.html("");
}

function reset() {

  clearScreen();
  win = false;
  playerWon = false;

}

function computerMove() {

  if (!$topLeft.html()) {
    $topLeft.html(computer);
  } else if(!$topMiddle.html()) {
    $topMiddle.html(computer);
  } else if(!$topRight.html()) {
    $topRight.html(computer);
  } else if(!$middleLeft.html()) {
    $middleLeft.html(computer);
  } else if(!$middleMiddle.html()) {
    $middleMiddle.html(computer);
  } else if(!$middleRight.html()) {
    $middleRight.html(computer);
  } else if(!$bottomLeft.html()) {
    $bottomLeft.html(computer);
  } else if(!$bottomMiddle.html()) {
    $bottomMiddle.html(computer);
  } else {
    $bottomRight.html(computer);
  }

  checkForWin();

}

function winnerModal() {

  $overlay.html("");

  if (playerWon) {

    $overlay.append("<p class='modalP'>You Win!</p><button class='okButton btn btn-primary'>OK</button>");

  } else {

    $overlay.append("<p class='modalP'>You Lose!</p><button class='okButton btn btn-primary'>OK</button>");

  }

  $overlay.show();

}

function drawModal() {

  $overlay.html("");
  $overlay.append("<p class='modalP'>It's a draw!</p><button class='okButton btn btn-primary'>OK</button>");
  $overlay.show();

}

function checkForWin() {

  if ($topLeft.html() === "X" && $topMiddle.html() === "X" && $topRight.html() === "X") {
    if (player === "X") {
      playerWon = true;
    }
    winnerModal();
    win = true;
    reset();
  } else if ($middleLeft.html() === "X" && $middleMiddle.html() === "X" && $middleRight.html() === "X") {
    if (player === "X") {
      playerWon = true;
    }
    winnerModal();
    win = true;
    reset();
  } else if ($bottomLeft.html() === "X" && $bottomMiddle.html() === "X" && $bottomRight.html() === "X") {
    if (player === "X") {
      playerWon = true;
    }
    winnerModal();
    win = true;
    reset();
  } else if ($topLeft.html() === "X" && $middleLeft.html() === "X" && $bottomLeft.html() === "X") {
    if (player === "X") {
      playerWon = true;
    }
    winnerModal();
    win = true;
    reset();
  } else if ($topMiddle.html() === "X" && $middleMiddle.html() === "X" && $bottomMiddle.html() === "X") {
    if (player === "X") {
      playerWon = true;
    }
    winnerModal();
    win = true;
    reset();
  } else if ($topRight.html() === "X" && $middleRight.html() === "X" && $bottomRight.html() === "X") {
    if (player === "X") {
      playerWon = true;
    }
    winnerModal();
    win = true;
    reset();
  } else if ($topLeft.html() === "X" && $middleMiddle.html() === "X" && $bottomRight.html() === "X") {
    if (player === "X") {
      playerWon = true;
    }
    winnerModal();
    win = true;
    reset();
  } else if ($topRight.html() === "X" && $middleMiddle.html() === "X" && $bottomLeft.html() === "X") {
    if (player === "X") {
      playerWon = true;
    }
    winnerModal();
    win = true;
    reset();
  } else if ($topLeft.html() === "O" && $topMiddle.html() === "O" && $topRight.html() === "O") {
    if (player === "O") {
      playerWon = true;
    }
    winnerModal();
    win = true;
    reset();
  } else if ($middleLeft.html() === "O" && $middleMiddle.html() === "O" && $middleRight.html() === "O") {
    if (player === "O") {
      playerWon = true;
    }
    winnerModal();
    win = true;
    reset();
  } else if ($bottomLeft.html() === "O" && $bottomMiddle.html() === "O" && $bottomRight.html() === "O") {
    if (player === "O") {
      playerWon = true;
    }
    winnerModal();
    win = true;
    reset();
  } else if ($topLeft.html() === "O" && $middleLeft.html() === "O" && $bottomLeft.html() === "O") {
    if (player === "O") {
      playerWon = true;
    }
    winnerModal();
    win = true;
    reset();
  } else if ($topMiddle.html() === "O" && $middleMiddle.html() === "O" && $bottomMiddle.html() === "O") {
    if (player === "O") {
      playerWon = true;
    }
    winnerModal();
    win = true;
    reset();
  } else if ($topRight.html() === "O" && $middleRight.html() === "O" && $bottomRight.html() === "O") {
    if (player === "O") {
      playerWon = true;
    }
    winnerModal();
    win = true;
    reset();
  } else if ($topLeft.html() === "O" && $middleMiddle.html() === "O" && $bottomRight.html() === "O") {
    if (player === "O") {
      playerWon = true;
    }
    winnerModal();
    win = true;
    reset();
  } else if ($topRight.html() === "O" && $middleMiddle.html() === "O" && $bottomLeft.html() === "O") {
    if (player === "O") {
      playerWon = true;
    }
    winnerModal();
    win = true;
    reset();
  } else if ($topRight.html() && $topMiddle.html() && $topRight.html() && $middleLeft.html() && $middleMiddle.html() && $middleRight.html() && $bottomLeft.html() && $bottomMiddle.html() && $bottomRight.html()) {
    drawModal();
    win = true;
    reset();
  }

}

function showTakenModal() {

  $overlay.html("");
  $overlay.append("<p class='modalP'>Spot is already taken. Please choose another spot</p><button class='okButton btn btn-primary'>OK</button>");
  $overlay.show();

}

function divClicked(e) {

  var $space = $(e.target);

  if ($space.html() === "X" || $space.html() === "O") {
    showTakenModal();
    return;
  }

  $space.html(player);
  checkForWin();

  if (win === true) {
    return;
  }

  computerMove();

}

function choosePlayer() {

  $overlay.append("<p class='modalP'>Choose your player</p><button id='xButton' class='btn btn-primary'>X</button><button id='oButton' class='btn btn-primary'>O</button>");
  $("#bigDiv").append($overlay);
  $overlay.show();

}

function assignPlayerToX() {

  player = "X";
  computer = "O"
  $overlay.hide();

}

function assignPlayerToO() {

  player = "O";
  computer = "X"
  $overlay.hide();

}

function hideModal() {
  $overlay.hide();
}

$("#bigDiv").on("click", "#topLeft", divClicked)
            .on("click", "#topMiddle", divClicked)
            .on("click", "#topRight", divClicked)
            .on("click", "#middleLeft", divClicked)
            .on("click", "#middleMiddle", divClicked)
            .on("click", "#middleRight", divClicked)
            .on("click", "#bottomLeft", divClicked)
            .on("click", "#bottomMiddle", divClicked)
            .on("click", "#bottomRight", divClicked)
            .on("click", "#xButton", assignPlayerToX)
            .on("click", "#oButton", assignPlayerToO)
            .on("click", ".okButton", hideModal);

choosePlayer();
