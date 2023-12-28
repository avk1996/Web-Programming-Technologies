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
var createBlog = (newBlog, f) => {
  setTimeout(() => {
    console.log("Create blogs called");
    blogs.push(newBlog);
    f();
  }, 2000);
};
console.log("before create blog");
createBlog({ name: "blog4", content: "blog4 content" }, getBlogs);
// getBlogs();
console.log("after create blog");
