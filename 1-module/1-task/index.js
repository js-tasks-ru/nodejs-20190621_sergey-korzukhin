const intervalId = setInterval(() => {
  console.log('James');// (1)
}, 10);

setTimeout(() => {
  const promise = new Promise((resolve) => {
    console.log('Richard'); // (2)
    resolve('Robert');
  });

  promise
      .then((value) => {
        console.log(value); // (4)

        setTimeout(() => {
          console.log('Michael');// (5)

          clearInterval(intervalId);
        }, 10);
      });

  console.log('John'); // (3)
}, 10);

