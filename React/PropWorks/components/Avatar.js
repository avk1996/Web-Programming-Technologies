import imagUrl from "./utils";
export function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={imagUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
export default Avatar;
