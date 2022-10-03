import { useState, useEffect } from "react";

export default function InsertJoke(props: any) {
  const [joke, setJoke] = useState<any>({ setup: "", delivery: "" });

  const getJoke = async () => {
    const joke: any = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart"
    )
      .then((res) => res.json())
      .then((data) => setJoke(data))
      .catch((err) => console.error(err));

    console.log(joke);

    return joke[0];
  };

  useEffect(() => {
    // console.log("Getting joke");
    getJoke();
  }, []);

  return (
    <>
      {joke.setup}&nbsp;{joke.delivery}
    </>
  );
}
