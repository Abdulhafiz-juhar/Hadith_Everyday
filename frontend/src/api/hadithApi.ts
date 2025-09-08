import axios from "axios";

// type getHadithParams = {
//     editionName: string;
//     hadithNo: string;
// }

export type hadithReturnType = {
  hadith: string;
  source: string;
};

export async function getHadith(
  editionName: string,
  hadithNo: string
): Promise<hadithReturnType> {
  const response = await axios.get(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/${editionName}/${hadithNo}.json`
  );
  const hadith = response.data;
  console.log(hadith);
  return {
    hadith: hadith.hadiths[0].text,
    source: `- ${hadith.metadata.name}, ${hadith.hadiths[0].hadithnumber}`,
  };
}

export async function getRandomHadith(): Promise<hadithReturnType> {
  const editions = [
    "eng-bukhari",
    "eng-muslim",
    "eng-abudawud",
    "eng-tirmidhi",
    "eng-nasai",
    "eng-ibnmajah",
  ];

  function randomNumber(maxNumber: number) {
    return Math.floor(Math.random() * maxNumber) + 1;
  }
  const randomEditionName = editions[Math.floor(Math.random() * 6)];

  function randomHadithNumberGenerator(randomEditionName: string) {
    switch (randomEditionName) {
      case "eng-bukhari":
        return randomNumber(7563);
        break;
      case "eng-muslim":
        return randomNumber(5368);
        break;
      case "eng-abudawud":
        return randomNumber(5274);
        break;
      case "eng-tirmidhi":
        return randomNumber(3958);
        break;
      case "eng-nasai":
        return randomNumber(5662);
        break;
      case "eng-ibnmajah":
        return randomNumber(4341);
        break;
      default:
        return randomNumber(7563);
      //bukhari is the default edition
    }
  }

  const randomHadithNo =
    randomHadithNumberGenerator(randomEditionName).toString();

  return getHadith(randomEditionName, randomHadithNo)
    .then((response) => response)
    .catch((error) => {
      console.error("Error fetching random hadith:", error);
      return {
        hadith: "An error occurred while fetching the hadith.",
        source: "",
      };
    });
}
