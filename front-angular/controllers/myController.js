let app = angular.module("myApp", []);
app.controller("myController", ($scope) => {
  $scope.hello = "Hello AngularJS";
});
app.controller("myBoard", ($scope) => {
  $scope.boardList = [
    { no: 1, title: "Title1", writer: "user1" },
    { no: 2, title: "Title2", writer: "user2" },
    { no: 3, title: "Title3", writer: "user3" },
  ];
  $scope.remove = function (no) {
    if (!no) return;

    let num = -1;
    for (let i = 0; i < $scope.boardList.length; i++) {
      if ($scope.boardList[i].no === no) {
        num = i;
        break;
      }
    }
    if (num === -1) return;
    $scope.boardList.splice(num, 1);
  };
  $scope.boardListForm = {};
  
  $scope.addBoard = () => {
    let newNo = !$scope.boardList.length
      ? 1
      : $scope.boardList[$scope.boardList.length - 1].no + 1;
    let newItem = {
      no: newNo,
      title: $scope.boardListForm.title,
      writer: $scope.boardListForm.writer,
    };
    $scope.boardList.push(newItem);

    $scope.boardListForm.title = "";
    $scope.boardListForm.writer = "";
  };

  $scope.update = (no) => {
    if ($scope.boardListForm.title === undefined || "") {
      if (!no) return;
      let num = -1;
      for (let i = 0; i < $scope.boardList.length; i++) {
        if ($scope.boardList[i].no === no) {
          num = i;
          break;
        }
      }
      if (num === -1) return;
      let newUpdateItem = $scope.boardList[num];
      $scope.boardListForm.title = newUpdateItem.title;
      $scope.boardListForm.writer = newUpdateItem.writer;
    } else {
      let updateItem = {
        no: this.no,
        title: $scope.boardListForm.title,
        writer: $scope.boardListForm.writer,
      };
      $scope.boardList.splice(no - 1, 1, updateItem);
    }
  };
});