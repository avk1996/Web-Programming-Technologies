import MyButton from "./components/MyButton";

//adding images using {}
const user = {
  name: "Hedy",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my first app</h1>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={`Photo of ${user.name}`}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
      <br />
      <MyButton />
    </div>
  );
}
