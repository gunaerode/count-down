function countDown(count, callback) {
  setTimeout(() => {
    let temp = --count;
    console.log(temp);
    callback(temp);
  }, 1000);
}

let divCount = document.querySelector(".countDown");
let count = 10;
countDown(count, function (count) {
  divCount.innerText = count;
  countDown(count, function (count) {
    divCount.innerText = count;
    countDown(count, function (count) {
      divCount.innerText = count;
      countDown(count, function (count) {
        divCount.innerText = count;
        countDown(count, function (count) {
          divCount.innerText = count;
          countDown(count, function (count) {
            divCount.innerText = count;
            countDown(count, function (count) {
              divCount.innerText = count;
              countDown(count, function (count) {
                divCount.innerText = count;
                countDown(count, function (count) {
                  divCount.innerText = count;
                  countDown(count, function (count) {
                    divCount.innerText = count;
                    countDown(count, function (count) {
                      divCount.style.borderWidth = "0px";
                      divCount.innerText = "🙂";
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
