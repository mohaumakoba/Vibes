const loggedCookieKey = "vibes-system-logged";
const userCookieKey = "vibes-logged-userId";
function getAllUsers() {
  return getJsonCookie("Users");
}
function checkLogginStatus() {
  let loggedStatus = getCookie(loggedCookieKey);
  let userLogged = getCookie(userCookieKey);
  if (loggedStatus && userLogged) {
    return true;
  } else {
    return false;
  }
}
function getLoggedUser() {
  if (getCookie(userCookieKey)) {
    return getCookie(userCookieKey);
  } else {
    return "guest";
  }
}
function getLoggedUserDetails(id) {
  var u = getUsers();
  const returnObj = u.filter((item) => item.userId == id);
  return returnObj;
}
function logIn(username, password) {
  if (checkLogginStatus()) {
    console.log("already logged");
    window.location.href = "./index.html";
  } else {
    var user = null;
    var avaUsers = getUsers();
    let found = false;
    $.each(avaUsers, function () {
      console.log(this);
      if (this["email"] == username && this["password"] == password) {
        found = true;
        user = this;
        setCookie(loggedCookieKey, true);
        setCookie(userCookieKey, this["userId"]);
        return false;
      } else {
        return true;
      }
    });
    if (found) {
      console.log("found");
      document.location.href = "./index.html";
    } else {
      $("#form-summary").html("Invalid username or password.");
    }
  }
}
function signOut() {
  removeCookie(loggedCookieKey);
  removeCookie(userCookieKey);
  removeCookie("currentUserDetails");
  document.location.href = "./index.html";
}
function signUp(userInfo) {}
function getUsers() {
  var loadedUsers = getJsonCookie("loadedUsers");
  if (loadedUsers) {
    return loadedUsers;
  } else {
    return users;
  }
}
var users = [
  {
    userId: "1",
    fname: "Ruth",
    lname: "Hlongwane",
    email: "hlongwane.ruth@capaciti.org.za",
    phone: "0700000000",
    password: "12345678",
    subscription: { current: "", freeTrial: "none", details: new Object() },
    favorites: [],
  },
  {
    userId: "2",
    fname: "Katekani",
    lname: "Khoza",
    email: "katekani.khoza@capaciti.org.za",
    phone: "0700000000",
    password: "12345678",
    subscription: {
      current: "",
      freeTrial: "available",
      details: new Object(),
    },
    favorites: [],
  },
  {
    userId: "3",
    fname: "Kingsly",
    lname: "Mokgwathi",
    email: "kingslytshepiso@gmail.com",
    phone: "0700000000",
    password: "12345678",
    subscription: { current: "", freeTrial: "none", details: new Object() },
    favorites: [],
  },
];
function loadUsers() {
  setJsonCookie("Users", getUsers());
}
$(document).ready(function () {
  loadUsers();
  if (checkLogginStatus()) {
    var currentLoggedUser = getLoggedUserDetails(getLoggedUser())[0];
    setJsonCookie("currentUserDetails", currentLoggedUser);
    var userAccountItem = $("<li>")
      .addClass("mb-1 sticky-item")
      .html(
        $("<div>")
          .addClass("vibes-sticky")
          .html(
            $("<a>")
              .append()
              .attr("href", "./account.html")
              .addClass(
                "btn d-inline-flex align-items-center rounded border-0 collapsed"
              )
              .append(
                $("<span>")
                  .addClass("m-1")
                  .append('<i class="fa-sharp fa-solid fa-user"></i>')
              )
              .append("<span class='m-1'>Account</span>")
          )
      );
    var userFavorites = $("<li>")
      .addClass("mb-1 sticky-item")
      .html(
        $("<div>")
          .addClass("vibes-sticky")
          .html(
            $("<a>")
              .append()
              .attr("href", "./favorites.html")
              .addClass(
                "btn d-inline-flex align-items-center rounded border-0 collapsed"
              )
              .append(
                $("<span>")
                  .addClass("m-1")
                  .append('<i class="fa-solid fa-heart"></i>')
              )
              .append("<span class='m-1'>Favorites</span>")
          )
      );
    var logOutItem = $("<a>")
      .attr("href", "#logout")
      .attr("id", "logOutLink")
      .addClass("btn btn-danger mx-1")
      .html('<i class="fa-sharp fa-solid fa-power-off"></i>')
      .append("<span class='m-3'>Logout</span>");
    var subscriptionItem = $("<a>")
      .attr("href", "./pricing.html")
      .addClass("btn btn-success mx-1")
      .append("<span class='m-3'>Subscribe</span>");
    var freeTrialItem = $("<a>")
      .attr("href", "./subscription.html")
      .addClass("btn btn-success mx-1")
      .append("<span class='m-3'>Try</span>");
    $("#sideNavList").append(userAccountItem);
    if (currentLoggedUser.subscription.current) {
      $("#navbarCollapse").append(logOutItem);
    } else if (currentLoggedUser.subscription.freeTrial == "available") {
      $("#navbarCollapse").append(freeTrialItem);
      $("#navbarCollapse").append(logOutItem);
    } else {
      $("#navbarCollapse").append(subscriptionItem);
      $("#navbarCollapse").append(logOutItem);
    }
  } else {
    $("#navbarCollapse").append(
      $("<div>")
        .addClass("d-flex mx-3")
        .html(
          "<a href='./signin.html' class='btn btn-primary mx-1'>SignIn</a>" +
            "<a href='./signup.html' class='btn btn-secondary'>SignUp</a>"
        )
    );
  }
  $("#logOutLink").on("click", function () {
    console.log("off");
    signOut();
  });
});
$("#loginForm").on("submit", function (event) {
  event.preventDefault();
  var username = $("input[name='username']").val();
  var password = $("input[name='password']").val();
  logIn(username, password);
});
$("#registerForm").on("submit", function (event) {
  event.preventDefault();
  var name = $("input[name='name']").val();
  var surname = $("input[name='surname']").val();
  var email = $("input[name='email']").val();
  var phone = $("input[name='phoneNumber']").val();
  var password = $("input[name='psw']").val();
  var currentUsers = getUsers();
  var newUserDetails = {
    userId: (currentUsers.length + 1).toString(),
    fname: name,
    lname: surname,
    email: email,
    phone: phone,
    password: password,
    subscription: {
      current: "",
      freeTrial: "available",
      details: new Object(),
    },
    favorites: [],
  };
  currentUsers.push(newUserDetails);
  setJsonCookie("loadedUsers", currentUsers);
  alert("Registration successful");
  logIn(email, password);
});
$("#logOutLink").on("click", function () {
  console.log("off");
  signOut();
});
