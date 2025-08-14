import FavoriteHadith from "@/components/FavoriteHadith";

export default function FavoritesPage() {
  return (
    <div className="grid gap-2 grid-rows-[auto_1fr]">
      <h1 className="text-3xl">Your Favorites</h1>
      {
        // make this dynamic
      }
      <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(230px,1fr))] content-start">
        <FavoriteHadith
          hadith="Abu Rifa'a reported:I came to the Prophet (ﷺ) when he was delivering the sermon, and I said: Messenger of Allah, here is a stranger and he wants to learn about this religion and he does not know what this religion is. The Messenger of Allah (ﷺ) looked at me and left his sermon till he came to me, and he was given a chair and I thought that Its legs were made of iron. The Messenger of Allah (ﷺ) sat In it and he began to teach me what Allah had taught him. He then came (to the pulpit) for his sermon and completed it to the end"
          source="- Sahih Muslim, 2025"
        />
        <FavoriteHadith
          hadith={`It was narrated from Sahl bin Sa'd that a woman came to the Messenger of Allah and said:"O Messenger of Allah, I give myself in marriage to you." She stood for a long time, then a man stood up and said: "Marry her to me if you do not want to marry her." The Messenger of Allah said: "Do you have anything?" He said: "I cannot find anything." He said: "Look (for something), even if it is only an iron ring." So he looked but he could not find anything. The Messenger of Allah said to him: "Have you (memorized) anything of the Qur'an?" He said: "Yes, Surah such and such and Surah such and such," naming them. The Messenger of Allah said: "I marry her to you for what you know of the Qur'an`}
          source="- Sunan an Nasai, 3359"
        />
        <FavoriteHadith
          hadith={`Narrated \`Uqba bin 'Amir:We said to the Prophet, "You send us out and it happens that we have to stay with people who do not entertain us. What do you think about it? He said to us, "If you stay with some people and they entertain you as they should for a guest, accept their hospitality, but if they don't, take the right of the guest from them`}
          source="- Sahih al Bukhari, 2461"
        />
        <FavoriteHadith
          hadith={`Narrated Abdullah ibn Sa'd al-Ansari: I asked the Messenger of Allah (ﷺ) as to what makes it necessary to take a bath and about the (prostatic) fluid that flows after taking a bath. He replied: that is called madhi (prostatic fluid). It flows from every male. You should wash your private parts and testicles because of it and perform ablution as you do for prayer`}
          source="- Sunan Abu Dawud, 211"
        />
      </div>
    </div>
  );
}
