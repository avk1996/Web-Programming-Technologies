var blogs = [
  { name: "blog1", content: "blog1 content" },
  { name: "blog2", content: "blog2 content" },
  { name: "blog3", content: "blog3 content" },
];

var getBlogs = () => {
  console.log("Get blogs called");

  setTimeout(() => {
    var str = "<ul>";
    for (var ob of blogs) {
      str += `<li>${ob.name}=${ob.content}</li>`;
    }
    str += "</ul>";
    document.getElementById("MyDiv").innerHTML = str;
  }, 1000);
};
//to avoid of nesting function we need promice object
var createBlog = (newBlog, f) => {
  //in the state of pending before execution of
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Create blogs called");
      blogs.push(newBlog);
      error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error Occured");
      }
    }, 2000);
  });
};

// var createBlog = (newBlog, f) => {
//   setTimeout(() => {
//     console.log("Create blogs called");
//     blogs.push(newBlog);
//     f();
//   }, 2000);
// };
//one of the problems with fetch is it will succeeds if and only if their is a serios problem
//then only fetch fails so fetch is not used in REACT
var promise1 = fetch("www.google.com").then(
  (result) => {
    console.log(result);
    if (result.status == 200 && result.ok) {
      console.log("Successful completion of AJAX request");
      return result.json();
    }
    throw "promise rejected vai then function";
  },
  (error) => {
    console.log("Error occured");
    throw "promise rejected vai then function";
  }
);

promise1
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//this is the reason why then function is used twice
async function greet() {
  return "Namaskar";
}
var ans = greet();
// alert(ans);
ans.then((data) => {
  console.log(`Print the Hello: ${data}`);
});

console.log("before create blog");
createBlog({ name: "blog4", content: "blog4 content" })
  .then(getBlogs)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("after create blog");
