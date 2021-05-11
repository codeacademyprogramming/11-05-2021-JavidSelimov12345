function fetchdata() {
  // datani api den cekmek ucun
  fetch("https://api.npoint.io/ec21414b0e15972dbfde/data")
    .then((response) => {
      if (!response.ok) {
        document.body.innerHTML = "Erororororororo";
        throw Error("erroreeeeee");
      }
      return response.json();
    })
    .then((data) => {
      // sehife yuklenerken ilkin melumati usere gostermek ucun

      CreditAccaunts(data);
    })
    .catch((error) => console.log(error));
}

fetchdata();

// userleri load etmek ucun funksiyasi
function LoadUserComponent(obj) {
  obj.loans.map((loan) => {
    let ContainerForCredit = document.createElement("div");
    ContainerForCredit.classList.add("cont");
    let loanerComp = document.createElement("div");
    loanerComp.classList.add("alert-primary");
    loanerComp.classList.add("alert");
    let amountComp = document.createElement("p");
    amountComp.classList.add("alert-secondary");
    amountComp.classList.add("alert");
    let isActiveComp = document.createElement("p");

    isActiveComp.classList.add("alert-success");
    isActiveComp.classList.add("alert");

    let MonthlyPayComp = document.createElement("div");

    MonthlyPayComp.classList.add("alert-info");
    MonthlyPayComp.classList.add("alert");

    let DuemontComp = document.createElement("div");

    DuemontComp.classList.add("alert-light");
    DuemontComp.classList.add("alert");

    let StartEnd = document.createElement("div");

    StartEnd.classList.add("alert-warning");
    StartEnd.classList.add("alert");

    let loaner = loan.loaner;
    let amount = loan.amount.value;
    let currency = loan.amount.currency;
    let isActive = loan.closed;

    if (suser.lang == "AZ") {
      if (loan.perMonth) {
        let monthlyPay = loan.perMonth.value;
        MonthlyPayComp.innerHTML = `Ayliq odenishi ${monthlyPay} ${currency}`;
      }

      let dueamount = loan.dueAmount.value;
      let start = loan.loanPeriod.start;
      let end = loan.loanPeriod.end;

      loanerComp.innerHTML = `TƏŞKİLAT ---- ${loaner}`;
      amountComp.innerHTML = `MƏBLƏĞ ---- ${amount} ${currency}`;
      isActiveComp.innerHTML = `Baglanıb---- ${isActive}`;

      DuemontComp.innerHTML = `Qalıq məbləğ ---- ${dueamount} ${currency}`;
      StartEnd.innerHTML = `Baslangic tarix  -${start}  Bitme tarixi - ${end}`;
    } else {
      if (loan.perMonth) {
        let monthlyPay = loan.perMonth.value;
        MonthlyPayComp.innerHTML = `Monthly paymant ---- ${monthlyPay} ${currency}`;
      }

      let dueamount = loan.dueAmount.value;
      let start = loan.loanPeriod.start;
      let end = loan.loanPeriod.end;

      loanerComp.innerHTML = `Loaner ---- ${loaner}`;
      amountComp.innerHTML = `Amount ---- ${amount} ${currency}`;
      isActiveComp.innerHTML = `Is Closed ---- ${isActive}`;

      DuemontComp.innerHTML = `Due Amount ---- ${dueamount} ${currency}`;
      StartEnd.innerHTML = `Start date  -${start}  End date - ${end}`;
    }

    ContainerForCredit.appendChild(loanerComp);
    ContainerForCredit.appendChild(amountComp);

    ContainerForCredit.appendChild(isActiveComp);

    ContainerForCredit.appendChild(MonthlyPayComp);

    ContainerForCredit.appendChild(DuemontComp);

    ContainerForCredit.appendChild(StartEnd);

    modal.appendChild(ContainerForCredit);
  });
}

function ActiveCredits(obj) {
  obj.map((user) => {
    let name = user.name;
    let namefield = document.createElement("h4");

    namefield.innerHTML = name;
    namefield.classList.add("bg-primary");
    modal.appendChild(namefield);
    user.loans.map((loan) => {
      if (!loan.closed) {
        let ContainerForCredit = document.createElement("div");
        ContainerForCredit.classList.add("cont");
        let loanerComp = document.createElement("div");
        loanerComp.classList.add("alert-primary");
        loanerComp.classList.add("alert");
        let amountComp = document.createElement("p");
        amountComp.classList.add("alert-secondary");
        amountComp.classList.add("alert");
        let isActiveComp = document.createElement("p");

        isActiveComp.classList.add("alert-success");
        isActiveComp.classList.add("alert");

        let MonthlyPayComp = document.createElement("div");

        MonthlyPayComp.classList.add("alert-info");
        MonthlyPayComp.classList.add("alert");

        let DuemontComp = document.createElement("div");

        DuemontComp.classList.add("alert-light");
        DuemontComp.classList.add("alert");

        let StartEnd = document.createElement("div");

        StartEnd.classList.add("alert-warning");
        StartEnd.classList.add("alert");

        let loaner = loan.loaner;
        let amount = loan.amount.value;
        let currency = loan.amount.currency;
        let isActive = loan.closed;

        if (suser.lang == "AZ") {
          if (loan.perMonth) {
            let monthlyPay = loan.perMonth.value;
            MonthlyPayComp.innerHTML = `Ayliq odenishi ${monthlyPay} ${currency}`;
          }

          let dueamount = loan.dueAmount.value;
          let start = loan.loanPeriod.start;
          let end = loan.loanPeriod.end;

          loanerComp.innerHTML = `Kredit Təşkilatı ---- ${loaner}`;
          amountComp.innerHTML = `Məbləğ ---- ${amount} ${currency}`;
          isActiveComp.innerHTML = `Bağlanmışdır ---- ${isActive}`;

          DuemontComp.innerHTML = `Qalıq Məbləğ ---- ${dueamount} ${currency}`;
          StartEnd.innerHTML = `Baslangic tarix  -${start}  Bitme tarixi - ${end}`;
        } else {
          if (loan.perMonth) {
            let monthlyPay = loan.perMonth.value;
            MonthlyPayComp.innerHTML = `Monthly paymant ${monthlyPay} ${currency}`;
          }

          let dueamount = loan.dueAmount.value;
          let start = loan.loanPeriod.start;
          let end = loan.loanPeriod.end;

          loanerComp.innerHTML = `Loaner ---- ${loaner}`;
          amountComp.innerHTML = `Amount ---- ${amount} ${currency}`;
          isActiveComp.innerHTML = `Is Closed ---- ${isActive}`;

          DuemontComp.innerHTML = `Due Amount ---- ${dueamount} ${currency}`;
          StartEnd.innerHTML = `Start date  -${start}  End Date - ${end}`;
        }

        ContainerForCredit.appendChild(loanerComp);
        ContainerForCredit.appendChild(amountComp);

        ContainerForCredit.appendChild(isActiveComp);

        ContainerForCredit.appendChild(MonthlyPayComp);

        ContainerForCredit.appendChild(DuemontComp);

        ContainerForCredit.appendChild(StartEnd);

        modal.appendChild(ContainerForCredit);
      }
    });
  });
}

function CreditAccaunts(obj) {
  let main = document.querySelector("#app");
  let modal = document.querySelector("#modal");

  let closeModal = document.createElement("button");

  if (suser.lang == "AZ") {
    closeModal.innerText = "Bagla";
  } else {
    closeModal.innerText = "Close";
  }

  modal.appendChild(closeModal);
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });
  obj.map((user) => {
    let container = document.createElement("div");
    container.classList.add("mato");
    let name = document.createElement("p");

    name.classList.add("h3");
    name.innerText = ` ${user.name} ${user.surname}`;
    let image = document.createElement("img");
    image.classList.add("img-thumbnail");
    image.src = user.img;
    let salary = document.createElement("div");
    salary.classList.add("bg-primary");

    if (suser.lang == "AZ") {
      salary.innerText = `Maaş   : ${user.salary.value} ${user.salary.currency}`;
    } else {
      salary.innerText = `Monthly Salary   : ${user.salary.value} ${user.salary.currency}`;
    }

    let loanclosed = document.createElement("div");
    loanclosed.classList.add("bg-danger");
    let monthlyPay = document.createElement("div");
    monthlyPay.classList.add("bg-secondary");
    let vla = 0;
    let canApplyLoan = document.createElement("div");

    canApplyLoan.classList.add("bg-warning");
    let currency45 = (user.salary.value * 45) / 100;

    // userin cemi ayliq odenishini hesablamaq ucun  ve eger aktiv krediti varsa onu tapmaq ucun

    user.loans.map((loan) => {
      if (!loan.closed) {
        vla += loan.perMonth.value;

        if (suser.lang == "AZ") {
          loanclosed.innerHTML = `Aktiv krediti var`;
        } else {
          loanclosed.innerHTML = `Has Active Credit`;
        }
      }
    });

    user.loans.map((loan) => {
      if (suser.lang == "AZ") {
        if (vla <= currency45) {
          canApplyLoan.innerText = `${user.name} ${user.surname} yeniden kredit sifarishi vere biler`;
          canApplyLoan.classList.add("bg-success");
          canApplyLoan.classList.remove("bg-warning");
        } else {
          canApplyLoan.innerText = `${user.name} ${user.surname} yeniden kredit sifarishi vere bilmez`;
          canApplyLoan.classList.remove("bg-warning");
          canApplyLoan.classList.add("bg-danger");
        }
      } else {
        if (vla <= currency45) {
          canApplyLoan.innerText = `${user.name} ${user.surname} Can order new credit`;
          canApplyLoan.classList.add("bg-success");
          canApplyLoan.classList.remove("bg-warning");
        } else {
          canApplyLoan.innerText = `${user.name} ${user.surname} Can not  order new credit`;
          canApplyLoan.classList.remove("bg-warning");
          canApplyLoan.classList.add("bg-danger");
        }
      }
    });

    if (suser.lang == "AZ") {
      monthlyPay.innerHTML = `Cəmi aylıq ödəniş ${vla} ${user.salary.currency}`;
    } else {
      monthlyPay.innerHTML = `Total monthly pay ${vla} ${user.salary.currency}`;
    }

    // eger userin ayliq odenisi onun maashinin 45% den yuxari deyilse

    container.appendChild(name);
    container.appendChild(image);
    container.appendChild(salary);
    container.appendChild(loanclosed);
    container.appendChild(monthlyPay);
    container.appendChild(canApplyLoan);

    main.appendChild(container);

    container.addEventListener("click", function () {
      modal.style.display = "block";
      modal.innerHTML = "";
      let cont = document.createElement("div");
      cont.classList.add("cont");

      let search = document.createElement("input");

      search.classList.add("form-control");
      if (suser.lang == "AZ") {
        search.placeholder = "Ada və ya soyada görə axtar...";
      } else {
        search.placeholder =
          "Search by name or surname...(Please after typing click enter)";
      }

      closeModal.classList.add("btn");
      closeModal.classList.add("btn-warning");

      let aktiv = document.createElement("button");
      aktiv.classList.add("btn");
      aktiv.classList.add("btn-info");
      aktiv.classList.add("but");
      if (suser.lang == "AZ") {
        aktiv.innerText = "Aktiv kreditler";
      } else {
        aktiv.innerText = "Active loans";
      }

      modal.appendChild(cont);
      cont.appendChild(search);
      modal.appendChild(aktiv);
      modal.appendChild(closeModal);

      //   search olunduqda  kredit tarixcesini tapmaq

      search.addEventListener("keydown", function (e) {
        if (e.keyCode == 13) {
          modal.innerHTML = "";
          modal.appendChild(closeModal);
          if (search.value) {
            let val = search.value.trim().toUpperCase();

            obj.map((user) => {
              if (
                val === user.name.toUpperCase() ||
                val === user.surname.toUpperCase()
              ) {
                LoadUserComponent(user);
              }
            });
          }
        }
      });

      //   Aktiv kreditler butona klikde yalniz aktivleri gostersin
      aktiv.addEventListener("click", function () {
        modal.style.display = "block";
        modal.innerHTML = "";

        if (suser.lang == "AZ") {
          closeModal.innerText = "Bagla";
          modal.appendChild(closeModal);
          let aktiv = document.createElement("button");
          aktiv.innerText = "Aktiv kreditler";
        } else {
          closeModal.innerText = "Close";
          modal.appendChild(closeModal);
          let aktiv = document.createElement("button");
          aktiv.innerText = "Active Loans";
        }

        ActiveCredits(obj);
      });

      obj.map((user) => {
        // userlere klik olarken butun kredit tarixcelerini ekrana getirmek ucun
        let name = user.name;
        let namefield = document.createElement("h4");

        namefield.innerHTML = name;
        namefield.classList.add("bg-primary");
        modal.appendChild(namefield);

        LoadUserComponent(user);
      });
    });
  });
}

// set localstorage
var local_store = {
  lang: "AZ",
  theme: "light",
};

if (!localStorage.getItem("test")) {
  localStorage.setItem("test", JSON.stringify(local_store));
}
var suser = JSON.parse(localStorage.getItem("test"));

dark.addEventListener("click", () => {
  suser.theme = "dark";

  localStorage.setItem("test", JSON.stringify(suser));
  document.body.style.backgroundColor = "gray";
});
light.addEventListener("click", () => {
  suser.theme = "light";

  localStorage.setItem("test", JSON.stringify(suser));
  document.body.style.backgroundColor = "white";
});

az.addEventListener("click", () => {
  suser.lang = "AZ";

  localStorage.setItem("test", JSON.stringify(suser));
  window.location.reload();
});
en.addEventListener("click", () => {
  suser.lang = "EN";

  localStorage.setItem("test", JSON.stringify(suser));
  window.location.reload();
});

if (suser.theme === "light") {
  document.body.style.backgroundColor = "white";
} else {
  document.body.style.backgroundColor = "gray";
}

if (suser.lang == "AZ") {
  title.innerText = "MÜŞTƏRİLƏR";
} else {
  title.innerText = "Customers";
}

// setting token cookie
var cookie_store = {
  token: "supersecuretoken",
  exp_date: "expires=Thu, 12 may 2021 12:00:00 UTC",
};
document.cookie = "token=" + cookie_store.token + ";" + cookie_store.exp_date;

// setting session
// user data
var session_store = {
  username: "john",
  fullname: "John Doe",
  email: "john@example.com",
  password: "12345",
};
sessionStorage.setItem("name", JSON.stringify(session_store));
let session_storer = JSON.parse(sessionStorage.getItem("name"));
if (session_storer.username) {
}

// login sehifesi user log olarken yuklenen sehifeye aid kodlar apide data yklenir

var login_submit = document.getElementById("btn_login_submit");
let login = document.getElementById("loginput");
let errormessage = document.createElement("div");
errormessage.classList.add("error");
login_submit.addEventListener("click", function () {
  let login_username = document.getElementById("Username_input").value;
  let login_password = document
    .getElementById("Userpassword_input")
    .value.toString();
  errormessage.innerText = "";
  console.log(session_storer.username);
  console.log(session_storer.password);
  if (
    login_username.toUpperCase() === session_storer.username.toUpperCase() &&
    login_password === session_storer.password
  ) {
    async function fetchMoviesJSON() {
      const response = await fetch("https://randomuser.me/api/");
      const userss = await response.json();
      return userss;
    }

    fetchMoviesJSON().then((usersss) => {
      usersss; // fetched users  i defined the variables which fech from api
      let title = usersss.results[0].name.title;
      let first = usersss.results[0].name.first;
      let last = usersss.results[0].name.last;
      let email = usersss.results[0].email;
      let picture = usersss.results[0].picture.thumbnail;
      let nameSession = document.createElement("div");
      let picbox = document.createElement("img");
      picbox.classList.add("img-thumbnail");
      picbox.src = picture;
      nameSession.classList.add("btn");
      nameSession.classList.add("btn-primary");
      nameSession.innerText = email;
      tools.appendChild(nameSession);
      tools.appendChild(picbox);
    });

    document.getElementById("login").style.display = "none";
    document.getElementById("mainContainer").style.display = "block";
  } else {
    login.appendChild(errormessage);
    errormessage.innerText = "Please enter true credentials";
  }
});
