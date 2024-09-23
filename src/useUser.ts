import { useEffect, useState } from "react";

const useUser = (user:any) => {
    const [userData, setUserData] = useState<any>();
    useEffect(() => {
      if (user) {
        fetch("/users.json").then((response) =>
          response.json().then((resp) => {
            console.log(resp);
            return setUserData(resp.users.find((item:any) => item.id === user.id));
          })
        );
      }
    },[user]);

    return userData;
  };
  export default useUser;