import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error)); // Fetch does not catch 404 errors
  }, []);

  if (isLoading) {
    return (
      <>
        <h2>loading...</h2>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <h2>error...</h2>
      </>
    );
  }
  return (
    <>
      <h2>{user}</h2>
    </>
  );
};

export default MultipleReturns;
