
function User(username, balance) {
this.username = username;
this.balance = balance;
}

Balance.prototype.newBalance = function() {
return this.balance + (this.balance + this.deposit) - (this balance + this.withdrawl);
}



$(document).ready(function() {


$("form#new-user").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#username").val();
    var inputtedDeposit = parseInt($("input#initialdeposit").val());
    var newUser = new User(inputtedName, inputtedDeposit);

    $(".deposit-or-withdrawl").each(function() {
      var inputtedDeposit = parseInt($("input#deposit").val());
      var inputtedWithdrawl = parseInt($("input#withdrawl").val());
      var accountBalance = new Balance(inputtedDeposit, inputtedWithdrawl)
      newUser.account-balance.push(accountBalance)
$("#add").click(function() {
  $("#account-balance").show();
      $("#account-balance h2").text(newUser.newBalance());

    });

  });
 });




});
