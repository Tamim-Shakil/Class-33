import Card from "../components/Card";
import useFetch from "../hook/useFetch";

export default function Data() {
  const { data, loading, error } = useFetch(
    "https://randomuser.me/api/?results=10"
  );

  if (loading) return <span className="loading loading-ring loading-lg"></span>;

  if (error) return <h2>Something went wrong!</h2>;

  //   const users = data.results;
  //   console.log(users);
  console.log(data);

  return (
    <div>
      {/* {users.map((user) => (
        <Card key={user.phone} user= {user} />
      ))} */}
      {data?.map((item) => (
        <Card data={item} key={item.id} />
      ))}
    </div>
  );
}
