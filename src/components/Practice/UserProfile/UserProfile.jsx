import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users/1";

function UserProfile() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to load data");
      }

      const responseData = await response.json();
      setUser(responseData);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      {user ? (
        <div>
          <p>name: {user.name}</p>
          <p>email: {user.email}</p>
          <p>number:{user.number}</p>
        </div>
      ) : (
        <p>Data Not Found</p>
      )}
    </div>
  );
}

export default UserProfile;
