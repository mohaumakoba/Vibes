function subscribe(subs) {
  console.log(subs);
  var loggedUserId = getLoggedUser();
  var currentLoadedUsers = getUsers();
  const d = new Date();
  d.setTime(d.getTime() + 100 * 24 * 60 * 60 * 1000);
  var expiryDate = d.toUTCString();
  for (let i = 0; i < currentLoadedUsers.length; i++) {
    if (currentLoadedUsers[i].userId == loggedUserId) {
      currentLoadedUsers[i].subscription = {
        current: subs,
        freeTrial: "available",
        details: {
          expiryDate: expiryDate,
          paymentDate: expiryDate,
        },
      };
    }
    setJsonCookie("loadedUsers", currentLoadedUsers);
  }
  alert("subscription successful");
}
function cancelSubscription() {
  var loggedUserId = getLoggedUser();
  var currentLoadedUsers = getUsers();
  for (let i = 0; i < currentLoadedUsers.length; i++) {
    if (currentLoadedUsers[i].userId == loggedUserId) {
      currentLoadedUsers[i].subscription = {
        current: "",
        freeTrial: "none",
        details: new Object(),
      };
    }
    setJsonCookie("loadedUsers", currentLoadedUsers);
  }
  alert("subscription canceled");
}
$("#subsForm").on("submit", function (ev) {
  ev.preventDefault();
  console.log("provoked");
  var isFree = $("input[name=subs]:checked")[0].value == "free";
  var isPaid = $("input[name=subs]:checked")[0].value;
  if (isFree) {
    subscribe("Free");
  } else if (isPaid) {
    subscribe("Paid");
  }
  document.location.href = "./index.html";
});
